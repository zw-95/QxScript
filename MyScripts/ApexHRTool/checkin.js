/*
顶点HR签到

脚本兼容：QuantumultX
更新日期：2025-01-22 17:54:54

说明：
打开顶点HR小程序，或者已登录的刷新首页，获取到cookie，有效期很短,所以手动通过任务执行打卡，执行完后会清除获取到的cookie，且会返回异常打卡记录

~~~~~~~~~~~~~~~~
QX 1.0.10+ :

[rewrite_local]
#顶点HR签到Cookie
//^https:\/\/hrtool\.apexsoft\.com\.cn\/register\/attendance\/position\/query ^GET url-and-header script-request-header http://192.168.10.19:5500/MyScripts/ApexHRTool/checkin.js

^https:\/\/hrtool\.apexsoft\.com\.cn\/register\/attendance\/position\/query ^GET url-and-header script-request-header https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/ApexHRTool/checkin.js

[task_local]
8 38 * * * https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/ApexHRTool/checkin.js, tag= 顶点HR小程序打卡，需获取cookie后手动执行, enabled=false

[mitm]
hostname = hrtool.apexsoft.com.cn
~~~~~~~~~~~~~~~~
*/

const $ = new Env(`顶点HR`)
const ckName = 'apex_hr_Cookies'
const xAuthUserName = 'apex_hr_User'
let pinPositionName = $.getdata('pinPositionName') || '招商证券-机构'
let userCookie = $.getdata(ckName) ||''
let xAuthUser = $.getdata(xAuthUserName)||''
const hrHost = 'hrtool.apexsoft.com.cn'
const tencentMapHost = 'apis.map.qq.com'
const tencentMapParam = 'VVVSTVFsb3RWbFpHTmxNdFRrbExUek10Tmt4V1RsWXRRMUZJVmxNdE0waEdSVkU9' // 暂时不知道从哪取的
const barkKey = '' //Bark APP 通知推送Key
let userIdx = 0
let userList = []
let userCount = 0
const distance = 100 // 单位m
const minTimeout = 3 // 单位s
const maxTimeout = 3 // 单位s
let envSplitor = ['@'] //多账号分隔符

$.Messages = []
//调试
$.is_debug = 'false'
//是否真实打卡
$.is_signIn = 'true'

//脚本入口函数main()
async function main() {
  $.log('\n================== 任务 ==================\n')
  for (let user of userList) {
    $.log(`🔷账号${user.user} >> 开始任务`)
    // var randomTimeout = user.getRandomTime();
    // $.log(`随机延迟 ${randomTimeout} 秒`)
    // await $.wait(randomTimeout*1000); //延迟

    // 查询当月考勤情况
    let signSituation = await user.getCmthErrorCount()
    if(signSituation){
      if (signSituation.flowRecords.length > 0) {
        pushMsg(`本月考勤异常 ${signSituation.flowRecords.length} 天`)
      }
      if (signSituation.flowRecords.length > 0) {
        pushMsg(`本月请假 ${signSituation.flowRecords.length} 天`)
      }
      if(signSituation.errorSignInRecords.length > 0){
        pushMsg(`❗本月缺勤 ${signSituation.errorSignInRecords.length} 天，请及时处理`)
        pushMsg(signSituation.errorSignInRecords.map((v) => `${v.f2} ${v.f6CN}`).join('\n'))
      }
    } else {
      pushMsg(`❌账号${user.user} >> 查询本月签到记录失败!`)
    }

    // 签到前校验
    await user.getSignTimeRange()
    if (!user.isWorkOffTime) {
      pushMsg(`❌账号${user.user} >> 非打卡时间!`)
      return
    }
    await user.checkLog()
    if (!user.logStat) {
      pushMsg(`❌账号${user.user} >> 请填写日志后再打卡!`)
      return
    }
    await user.checkSignRecord()
    if (!user.checkStat) {
      pushMsg(`❌账号${user.user} >> 校验签到记录失败!`)
      return
    }
    await user.checkPosiConfig()
    if (!user.posiStat) {
      pushMsg(`❌账号${user.user} >> 校验位置失败!`)
      return
    }

    let signInRecord = await user.signIn()
    if (signInRecord) {
      pushMsg(`${signInRecord.code > 0 ? '✅' : '❌'}${signInRecord.note}`)
      if (signInRecord.code > 0) {
        pushMsg(`签到公司:${user.getSignCorpName()}，`)
        pushMsg(`签到地点:${user.getPosiName()}，`)
      }
    } else {
      pushMsg(`❌账号${user.user} >> 签到失败!`)
    }
    $.log(`🔷账号${user.user} >> 结束任务`)
  }
}

class UserInfo {
  constructor(str, userStr) {
    this.index = ++userIdx
    this.cookie = str
    this.user = userStr
    this.logStat = false // 是否正常填写日志
    this.checkStat = false // 是否可以正常打卡
    this.posiStat = false // 定位状态
    this.isWorkOffTime = false // 是否非工作时间
    this.worktimeBegin = '' //工作开始时间
    this.worktimeEnd = '' //工作结束时间
    this.signCorpName = '' // 签到地点名称
    this.posiName = '' // 位置名称
    this.signRandomPosiLat = 0 // 签到随机经度
    this.signRandomPosiLon = 0 // 签到随机维度
    this.headers = {
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.48(0x18003013) NetType/4G Language/zh_CN',
      Cookie: this.cookie,
      'x-auth-user': this.user,
      // 'Content-Type': 'application/json'
    }
  }
  getSignCorpName() {
    return this.signCorpName
  }
  getPosiName() {
    return this.posiName
  }
  getRandomTime() {
    return randomInt(minTimeout, maxTimeout)
  }
  //请求二次封装
  Request(options, method) {
    typeof method === 'undefined' ? ('body' in options ? (method = 'post') : (method = 'get')) : (method = method)
    return new Promise((resolve, reject) => {
      $.http[method.toLowerCase()](options)
        .then((response) => {
          let res = response.body
          res = $.toObj(res) || res
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }
  // 获取打卡时间范围
  async getSignTimeRange() {
    try {
      var now = Math.floor(new Date() / 1000)
      const options = {
        url: `https://${hrHost}/config`,
        headers: this.headers,
      }
      debug(options, `查询工作时间范围`)
      let res = await this.Request(options, 'get')
      debug(res, `查询工作时间范围`)
      var body = res
      if (body.code == 1) {
        this.worktimeBegin = body.worktimeBegin
        this.worktimeEnd = body.worktimeEnd
        $.log(`上班时间: ${body.worktimeBegin}，下班时间:${body.worktimeEnd}`)
        var workTimeType = checkCurrentTime(body.worktimeBegin, body.worktimeEnd)
        if (workTimeType == 1) {
          // 已下班
          this.isWorkOffTime = true
        } else if (workTimeType == 0) {
          // 上班期间
          this.isWorkOffTime = false
          $.log(`上班期间，无法打卡！`)
        } else if (workTimeType == -1) {
          // 上午上班之前
          this.isWorkOffTime = true
        }
      }
    } catch (e) {
      throw e
    }
  }
  //验证当日签到记录
  async checkSignRecord() {
    try {
      var now = Math.floor(new Date() / 1000)
      const toDay = formatTimestamp(now)
      const tomorrow = formatTimestamp(Math.floor(now + 24 * 60 * 60))
      const options = {
        url: `https://${hrHost}/register/workAttendance/query?beginDate=${toDay}${encodeURI(
          ' 03:00:00'
        )}&endDate=${tomorrow}${encodeURI(' 02:59:59')}&type=1`,
        //请求头, 所有接口通用
        headers: this.headers,
      }
      debug(options, `查询当日签到记录请求`)
      let res = await this.Request(options, 'get')
      debug(res, `查询当日签到记录结果`)
      var body = res
      var hours = new Date().getHours()
      var mins = new Date().getMinutes()
      if (body.code == 1) {
        if (checkCurrentTime(this.worktimeBegin, this.worktimeEnd) == -1) {
          // 上午
          if (body.records.length == 0) {
            // 上午校验时，需要没有签到过
            this.checkStat = true
          } else {
            pushMsg(`上午已经签过到了！`)
          }
        } else if (checkCurrentTime(this.worktimeBegin, this.worktimeEnd) == 1) {
          // 下午下班之后
          if (body.records.length == 1) {
            // 下午校验时，需要仅早上签到过一次
            this.checkStat = true
          } else {
            pushMsg(`下午已经签过到了！`)
          }
        } else {
          pushMsg(`上班期间，无法打卡！`)
        }
      }
    } catch (e) {
      throw e
    }
  }
  //查询签到位置，取武汉那一条
  async checkPosiConfig() {
    try {
      const options = {
        url: `https://${hrHost}/register/attendance/position/query`,
        //请求头, 所有接口通用
        headers: this.headers,
      }
      debug(options, `查询签到位置配置请求`)
      let res = await this.Request(options, 'get')
      debug(res, `查询签到位置配置返回`)

      var body = res
      if (body.code == 1 && body.records.length > 0) {
        var posi = body.records.find((v) => v.note.indexOf(pinPositionName) != -1 && v.longitude && v.latitude)
        if (posi) {
          $.log(`签到公司名：${posi.note}`)
          // 获取该签到地点旁边的随机位置
          var randomPosi = generateRandomCoordinates(parseFloat(posi.latitude), parseFloat(posi.longitude), distance)
          this.signRandomPosiLat = randomPosi.latitude
          this.signRandomPosiLon = randomPosi.longitude
          this.signCorpName = posi.note
          if (this.signCorpName == null || this.signCorpName == '') {
            pushMsg(`获取签到分公司名称失败！`)
            return
          }
          const getPosiNameOptions = {
            url: `https://${tencentMapHost}/ws/geocoder/v1/?location=${this.signRandomPosiLat},${
              this.signRandomPosiLon
            }&key=${atob(atob(tencentMapParam))}`,
            //请求头, 所有接口通用
            headers: this.headers,
          }
          debug(getPosiNameOptions, `查询随机位置名称请求`)
          let posiNameRes = await this.Request(getPosiNameOptions, 'get')
          var posiNameBody = posiNameRes
          debug(posiNameRes, `查询随机位置名称结果`)
          if (posiNameBody && posiNameBody.status === 0) {
            // this.posiName = posiNameBody.result.formatted_addresses.standard_address || ''
            this.posiName = posiNameBody.result.address || ''
            $.log(`签到地点名称：${this.posiName}`)
          }
          if (this.posiName == null || this.posiName == '') {
            pushMsg(`获取签到地点名称失败！`)
            return
          }
          this.posiStat = true
        }
      } else {
        pushMsg(`获取公司签到信息失败！`)
      }
    } catch (e) {
      throw e
    }
  }
  //查询日志，校验是否可以打卡
  async checkLog() {
    try {
      const options = {
        url: `https://${hrHost}/workLog/check`,
        //请求头, 所有接口通用
        headers: { ...this.headers, 'Content-Type': 'application/json' },
        body: $.toStr({}),
      }
      debug(options, `查询日志校验请求`)
      let res = await this.Request(options, 'post')
      debug(res, `查询日志校验结果`)
      var body = res
      if (body.code >= 0) {
        this.logStat = true
      } else {
        pushMsg(`请填写日志后重试:${body.note}`)
      }
    } catch (e) {
      throw e
    }
  }
  //查询本月签到记录，查出不正常的天数（不包括今天）
  async getCmthErrorCount() {
    try {
      var now = new Date();
      var year = now.getUTCFullYear();
      var month = now.getUTCMonth();
      // 计算当月第一天（UTC时间）
      var mthBegin = formatTimestamp(Date.UTC(year, month, 1) / 1000);
      // 计算次月第一天（UTC时间）
      var mthEnd = formatTimestamp(Date.UTC(year, month + 1, 1) / 1000);
      const options = {
        url: `https://${hrHost}/register/attendance/t98/query?beginDate=${mthBegin}&endDate=${mthEnd}&pageSize=35&pageNum=1`,
        headers: this.headers,
      }
      debug(options, '当月签到记录请求')
      let res = await this.Request(options, 'get')
      debug(res, '当月签到记录结果')
      var body = res
      if (body) {
        if (body.code == 1) {
          // 正常打卡天数
          var signInRecords = body.records.filter((v) => ['正常上下班'].includes(v.f6CN));
          // 考勤异常天数
          var flowRecords = body.records.filter((v) => ['考勤异常'].includes(v.f6CN));
          // 请假天数
          var leaveRecords = body.records.filter((v) => ['休假'].includes(v.f6CN));
          // 未处理的缺勤，不包括今天
          var errorSignInRecords = body.records.filter((v) => ![...signInRecords, ...flowRecords, ...leaveRecords].includes(v) && v.f2 != formatTimestamp(now.getTime() / 1000));

        }
      }
      return { 
        signInRecords,
        flowRecords,
        errorSignInRecords,
      }
    } catch (e) {
      throw e
    }
  }
  //签到
  async signIn() {
    // debug模式不真的打卡
    if ($.is_signIn !== 'true') {
      try {
        await $.wait(1000)
        debug(res, '模拟签到动作延时1s')
        var body = { code: 1, note: `模拟打卡成功` }
        // var body = { code: -1, note: `调取打卡接口失败` }
        if (body) {
          return body
        } else {
          return { code: -1, note: `调取打卡接口失败` }
        }
      } catch (e) {
        throw e
      }
    } else {
      try {
        const options = {
          url: `https://${hrHost}/register/workAttendance/add`,
          //请求头, 所有接口通用
          headers: { ...this.headers, 'Content-Type': 'application/json' },
          body: $.toStr({
            latitude: this.signRandomPosiLat,
            longitude: this.signRandomPosiLon,
            address: `[${this.signCorpName}]${this.posiName}`,
            note: '',
            type: 1,
            inRange: 1,
            businessTrip: 1,
            model: -1,
          }),
        }
        debug(options, '签到打卡请求')
        let res = await this.Request(options, 'post')
        debug(res, '签到打卡结果')
        var body = res
        if (body) {
          return body
        } else {
          return { code: -1, note: `调取打卡接口失败` }
        }
      } catch (e) {
        throw e
      }
    }
  }
}

//获取Cookie
async function getCookie() {
  if ($request && $request.method != 'OPTIONS') {
    userCookie = $request.headers['Cookie'] || $request.headers['cookie']
    xAuthUser = $request.headers['x-auth-user'] || $request.headers['x-Auth-User']
    if (userCookie && xAuthUser) {
      $.setdata(userCookie, ckName)
      $.setdata(xAuthUser, xAuthUserName)
      pushMsg(`获取 Cookie 成功:${xAuthUser},${userCookie},请手动执行任务打卡`)
      return true
    } else {
      pushMsg('获取 Cookie失败 ❌')
      return false
    }
  }
}

//主程序执行入口
!(async () => {
  var hasCookie = false
  if (typeof $request != 'undefined') {
    // 重写
    hasCookie = await getCookie()
  } else if (!(await checkEnv())) {
    // 未检测到ck，退出
    throw new Error(`❌未检测到Cookie`)
  } else {
    // 任务执行
    if (userList.length > 0) {
      await main()
      $.setdata('', ckName)
      $.setdata('', xAuthUserName)
      pushMsg(`执行完毕，cookie已清除`)
    }
  }
})()
  .catch((e) => {
    // 错误消息
    const errorMessage = e.message || $.toStr(e) || e
    // 堆栈跟踪信息
    const errorStack = e.stack || 'No stack trace available'

    // 将错误消息和堆栈跟踪信息一起添加到消息数组
    pushMsg(`Error: ${errorMessage}\nStack Trace: ${errorStack}`)

    // 如果需要，也可以单独输出错误消息和堆栈跟踪信息
    $.log(`Error: ${errorMessage}`)
    $.log(`Stack Trace: ${errorStack}`)
  }) //捕获登录函数等抛出的异常, 并把原因添加到全局变量(通知)
  .finally(async () => {
    if ($.Messages.length > 0) {
      if ($.barkKey) {
        //如果已填写Bark Key
        await BarkNotify($, $.barkKey, $.name, $.Messages.join('\n')) //推送Bark通知
      }
      await $.msg($.name, ``, $.Messages.join('\n')) //带上总结推送通知
    }
    // 由于会话过短，每次使用后清除
    $.done() //调用Surge、QX内部特有的函数, 用于退出脚本执行
  })

//检查变量 将cookie放到UserInfo对象中，构造对象到userList
async function checkEnv() {
  if (userCookie && xAuthUser) {
    let e = envSplitor[0]
    for (let o of envSplitor){
      if (userCookie.indexOf(o) > -1) {
        e = o
        break
      }
    }
    var cookies = userCookie.split(e)
    for (let n of cookies) {
      var user = xAuthUser.split(e)[cookies.indexOf(n)]
      n && user && userList.push(new UserInfo(n, parseInt(user)))
    }
    userCount = userList.length
  } else {
    console.log('未找到Cookie')
    return
  }
  return console.log(`共找到${userCount}个账号`), true //true == !0
}


// ==================================== 通用函数 ====================================
// DEBUG
function debug(text, title = 'debug') {
  if ($.is_debug === 'true') {
    if (typeof text == 'string') {
      console.log(`\n-----------${title}------------\n`)
      console.log(text)
      console.log(`\n-----------${title}------------\n`)
    } else if (typeof text == 'object') {
      console.log(`\n-----------${title}------------\n`)
      console.log($.toStr(text))
      console.log(`\n-----------${title}------------\n`)
    }
  }
}
function pushMsg(text){
  $.Messages.push(text)
  $.log(`通知内容：${text}`)
}
function checkCurrentTime(startTimeStr, endTimeStr) {
  // 获取当前时间
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()

  // 解析开始时间和结束时间
  const [startHour, startMinute] = startTimeStr.split(':').map(Number)
  const [endHour, endMinute] = endTimeStr.split(':').map(Number)

  // 将时间转换为分钟数，方便比较
  const currentTimeInMinutes = currentHour * 60 + currentMinute
  const startTimeInMinutes = startHour * 60 + startMinute
  const endTimeInMinutes = endHour * 60 + endMinute

  // 判断当前时间的状态
  if (currentTimeInMinutes < startTimeInMinutes) {
    // 还未到该时间范围
    return -1
  } else if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes) {
    // 在时间范围内
    return 0
  } else {
    // 超过时间范围
    return 1
  }
}
// 生成一个在[minLat, maxLat]范围内的随机小数，支持六位小数
function generateRandomLatitude(minLat, maxLat) {
  return Math.random() * (maxLat - minLat) + minLat
}

// 生成一个在[minLon, maxLon]范围内的随机小数，支持六位小数
function generateRandomLongitude(minLon, maxLon) {
  return Math.random() * (maxLon - minLon) + minLon
}

// 生成一个随机的经纬度坐标点
function generateRandomCoordinates(lat, lon, distance) {
  var earthRadius = 6371e3 // 地球半径，单位：米
  var maxLatitude = lat + ((distance / earthRadius) * 180) / Math.PI
  var minLatitude = lat - ((distance / earthRadius) * 180) / Math.PI
  var deltaLon = ((distance / earthRadius) * 360) / Math.PI

  // 计算经度的最小值和最大值
  var minLon = lon - deltaLon
  var maxLon = lon + deltaLon

  // 处理经度的越界问题
  if (maxLon > 180) {
    maxLon -= 360
    minLon -= 360
  } else if (minLon < -180) {
    maxLon += 360
    minLon += 360
  }

  // 生成随机的纬度和经度
  var randomLatitude = generateRandomLatitude(minLatitude, maxLatitude).toFixed(14)
  var randomLongitude = generateRandomLongitude(minLon, maxLon).toFixed(14)

  return {
    latitude: Number(randomLatitude),
    longitude: Number(randomLongitude),
  }
}

// 格式化时间戳为日期
function formatTimestamp(timestampInSeconds) {
  var date = new Date(timestampInSeconds * 1000)
  var year = date.getUTCFullYear();
  var month = date.getUTCMonth() + 1;
  var day = date.getUTCDate();
  return year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
}
//随机整数生成
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
//Bark APP notify
async function BarkNotify(c, k, t, b) {
  for (let i = 0; i < 3; i++) {
    console.log(`🔷Bark notify >> Start push (${i + 1})`)
    const s = await new Promise((n) => {
      c.post(
        {
          url: 'https://api.day.app/push',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: t, body: b, device_key: k, ext_params: { group: t } }),
        },
        (e, r, d) => (r && r.status == 200 ? n(1) : n(d || e))
      )
    })
    if (s === 1) {
      console.log('✅Push success!')
      break
    } else {
      console.log(`❌Push failed! >> ${s.message || s}`)
    }
  }
}

// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

