/*
XXX定时签到

说明：
打开XXX，提示获取Cookie成即可

~~~~~~~~~~~~~~~~
QX:

[rewrite_local]
# 本地
//^https:\/\/xxx\.com\/config ^GET url-and-header script-request-header http://192.168.10.19:5500/MyScripts/checkinTemplate.js

# 远程
^https:\/\/xxx\.com\/config ^GET url-and-header script-request-header https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/checkinTemplate.js

[mitm]
hostname = xxx.com
~~~~~~~~~~~~~~~~
*/

const $ = new Env(`打卡程序`)
const ckName = 'xxx_Cookies'
let userCookie = ''
const xxHost = 'xx.com'

let userIdx = 0
let userList = []
let userCount = 0
const minTimeout = 3 // 单位s
const maxTimeout = 3 // 单位s
let envSplitor = ['@'] //多账号分隔符

$.Messages = []
//调试
$.is_debug = 'false'

//脚本入口函数main()
async function main() {
  $.log('\n================== 任务 ==================\n')
  for (let user of userList) {
    $.log(`🔷账号${user.user} >> 开始任务`)
    var randomTimeout = user.getRandomTime();
    $.log(`随机延迟 ${randomTimeout} 秒`)
    await $.wait(randomTimeout*1000); //延迟

    //签到前检查
    await user.checkBeforeSign()
    if (!user.checkStat) {
      $.log(`❌账号${user.user} >> 校验XXX失败!`)
      return
    }

    // 签到
    let signInRecord = await user.signIn()
    if (signInRecord) {
      $.Messages.push(`${signInRecord.code > 0 ? '✅' : '❌'}${signInRecord.note}`)
    } else {
      $.log(`❌账号${user.user} >> 签到失败!`)
    }

  }
}

class UserInfo {
  constructor(str, userStr) {
    this.index = ++userIdx
    this.cookie = str
    this.user = index
    // this.user = userStr 
    this.checkStat = false
    this.headers = {
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.48(0x18003013) NetType/4G Language/zh_CN',
      Cookie: this.cookie,
      // 'Content-Type': 'application/json'
    }
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

  //验证当日签到记录
  async checkBeforeSign() {
    try {
      var now = Math.floor(new Date() / 1000)
      const toDay = formatTimestamp(now)
      const tomorrow = formatTimestamp(Math.floor(now + 24 * 60 * 60))
      const options = {
        url: `https://${xxHost}/xxx`,
        //请求头, 所有接口通用
        headers: this.headers,
      }
      debug(options, `验证XXX请求`)
      let body = await this.Request(options, 'get')
      debug(body, `验证XXX结果`)
      if (body.code == 1) {
        this.checkStat = true
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
        debug(res, '模拟签到结果')
        var body = { code: 1, note: `模拟签到成功` }
        // var body = { code: -1, note: `调取打卡接口失败` }
        if (body) {
          return body
        } else {
          return { code: -1, note: `调取签到接口失败` }
        }
      } catch (e) {
        throw e
      }
    } else {
      try {
        const options = {
          url: `https://${xxHost}/sign`,
          //请求头, 所有接口通用
          headers: {...this.headers,'Content-Type':'application/json'},
          body: {$.toStr({})},
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
    if (userCookie && xAuthUser) {
      $.Messages.push(`获取 Cookie 成功`)
      return true
    } else {
      $.Messages.push('获取 Cookie失败 ❌')
      return false
    }
  }
}

//主程序执行入口
!(async () => {
  var hasCookie = false;
  //没有设置变量,执行Cookie获取
  if (typeof $request != 'undefined' && !!$response.body && (userCookie === undefined || userCookie === '')) {
    hasCookie = await getCookie()
  }
  //未检测到ck，退出 
  if (!(await checkEnv())) {
    throw new Error(`❌未检测到Cookie`)
  }
  if (userList.length > 0) {
    await main()
  }
})()
  .catch((e) => {
    // 错误消息
    const errorMessage = e.message || $.toStr(e) || e
    // 堆栈跟踪信息
    const errorStack = e.stack || 'No stack trace available'

    // 将错误消息和堆栈跟踪信息一起添加到消息数组
    $.Messages.push(`Error: ${errorMessage}\nStack Trace: ${errorStack}`)

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
    $.setdata('', ckName)
    $.setdata('', xAuthUserName)
    $.done() //调用Surge、QX内部特有的函数, 用于退出脚本执行
  })

//检查变量
async function checkEnv() {
  if (userCookie) {
    let e = envSplitor[0]
    for (let o of envSplitor)
      if (userCookie.indexOf(o) > -1) {
        e = o
        break
      }
    var cookies = userCookie.split(e)
    for (let n of cookies) {
      n && userList.push(new UserInfo(n))
    }
    userCount = userList.length
  } else {
    console.log('未找到Cookie')
    return
  }
  return console.log(`共找到 ${userCount} 个账号`), true //true == !0
}
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

//随机整数生成
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
//Bark APP notify
async function BarkNotify(c, k, t, b) { for (let i = 0; i < 3; i++) { console.log(`🔷Bark notify >> Start push (${i + 1})`); const s = await new Promise((n) => { c.post({ url: 'https://api.day.app/push', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: t, body: b, device_key: k, ext_params: { group: t } }) }, (e, r, d) => r && r.status == 200 ? n(1) : n(d || e)) }); if (s === 1) { console.log('✅Push success!'); break } else { console.log(`❌Push failed! >> ${s.message || s}`) } } };

// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
