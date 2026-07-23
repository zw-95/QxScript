/*
U你 签到

说明：
打开U你·天然调味小程序，进入会员中心页面（触发会员卡接口即可获取Headers）。

~~~~~~~~~~~~~~~~
QX:
[rewrite_local]
# 本地
#^https:\/\/wx-kaci\.shouqianba\.com\/applet\/scrm\/member\/card\/queryCustomerCardInfoAndAllLevel ^POST url-and-header script-request-header http://192.168.137.1:5500/MyScripts/life/Uni/checkin.js

# 远程
^https:\/\/wx-kaci\.shouqianba\.com\/applet\/scrm\/member\/card\/queryCustomerCardInfoAndAllLevel ^POST url-and-header script-request-header https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/life/Uni/checkin.js
[mitm]
hostname = wx-kaci.shouqianba.com

[task_local]
# 本地
0 9 * * * http://192.168.137.1:5500/MyScripts/life/Uni/checkin.js, tag=U你 签到, enabled=false

# 远程
# 0 9 * * * https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/life/Uni/checkin.js, tag=U你 签到, enabled=false
~~~~~~~~~~~~~~~~
*/

const $ = new Env('U你 签到')
$.name = 'U你 签到'
$.baseUrl = 'https://wx-kaci.shouqianba.com/applet/scrm/marketing'

$.Messages = []
$.barkKey = $.getdata('bark_key') || '' // Bark 推送 Key
$.is_debug = 'false'

// 持久化 Key
const HEADERS_KEY = 'Uni_headers'
const BODY_KEY = 'Uni_body'
const CHECKIN_BODY_KEY = 'Uni_checkin_body' // 补全后的签到 body 缓存

// GetCookie: 从会员卡接口捕获 Headers 和 Body
async function GetCookie() {
  if (!$request || $request.method === 'OPTIONS') return

  try {
    const reqHeaders = $request.headers || {}

    const persistHeaders = {}
    const keepKeys = [
      'accessToken', 'appId', 'deviceId', 'source', 'unionId',
      'cv', 'openId', 'lang', 'groupId', 'thirdUniqueId',
      'traceId', 'sign', 'cs', 'Content-Type', 'User-Agent', 'Referer'
    ]

    for (const key of keepKeys) {
      const val = reqHeaders[key] || reqHeaders[key.toLowerCase()]
      if (val) persistHeaders[key] = val
    }

    $.setdata(JSON.stringify(persistHeaders), HEADERS_KEY)
    $.setdata($request.body || '', BODY_KEY)
    pushMsg('✅ 获取 Headers 成功')
  } catch (e) {
    pushMsg(`❌ 获取 Headers 失败: ${e.message}`)
  }
}

// 查询会员卡信息（用于补全签到 body 缺失字段）
function queryCardInfo() {
  return new Promise((resolve) => {
    const headersStr = $.getdata(HEADERS_KEY)
    const bodyStr = $.getdata(BODY_KEY)

    if (!headersStr || !bodyStr) {
      pushMsg('❌ 未获取到凭证，请先打开U你小程序会员中心')
      resolve(null)
      return
    }

    try {
      const headers = JSON.parse(headersStr)

      const options = {
        url: 'https://wx-kaci.shouqianba.com/applet/scrm/member/card/queryCustomerCardInfoAndAllLevel',
        headers: { ...headers, 'User-Agent': $.UA },
        body: bodyStr
      }

      $.post(options, async (err, resp, data) => {
        try {
          if (err) {
            pushMsg(`❌ 会员卡查询失败: ${err.message || err}`)
            resolve(null)
            return
          }

          const obj = JSON.parse(data)

          if (obj.success !== true) {
            pushMsg(`❌ 会员卡查询异常: ${obj.message || obj.code}`)
            pushMsg('💡 请重新打开U你小程序刷新凭证')
            resolve(null)
            return
          }

          resolve(obj.bizData || obj.data || null)
        } catch (e) {
          $.logErr(e, resp)
          pushMsg(`❌ 会员卡解析异常: ${e.message}`)
          resolve(null)
        }
      })
    } catch (e) {
      pushMsg(`❌ 解析 Headers 失败: ${e.message}`)
      resolve(null)
    }
  })
}

// 用会员卡响应补全签到 body，并持久化
function buildCheckinBody(cardData) {
  const bodyStr = $.getdata(BODY_KEY)

  try {
    const baseBody = JSON.parse(bodyStr)

    // 从会员卡响应补充缺失字段
    const checkinBody = JSON.stringify({
      ...baseBody,
      brandId: baseBody.brandId || '',
      totalPoint: cardData?.pointBalance ?? 0,
      tableName: '',
      tableBrand: null,
      orgId: cardData?.openOrgId || '',
      orgName: cardData?.openOrgName || '',
      orgCode: cardData?.openOrgCode || '',
      orgPath: '',
      orgRate: 0,
      marketingId: cardData?.marketingId || '0'
    })

    // 持久化补全后的签到 body，后续可直接使用
    $.setdata(checkinBody, CHECKIN_BODY_KEY)

    return checkinBody
  } catch (e) {
    pushMsg(`❌ 构建签到 Body 失败: ${e.message}`)
    return null
  }
}

// 查询最近7天签到状态，判断今日是否已签
function queryStatus() {
  return new Promise((resolve) => {
    const headersStr = $.getdata(HEADERS_KEY)
    const bodyStr = $.getdata(BODY_KEY)

    if (!headersStr || headersStr === '') {
      pushMsg('❌ 未获取到 Headers，请先打开U你小程序签到页面')
      resolve(null)
      return
    }

    try {
      const headers = JSON.parse(headersStr)

      const options = {
        url: `${$.baseUrl}/checkIn/queryCurrent7DaysCheckInGiveGift`,
        headers: { ...headers, 'User-Agent': $.UA },
        body: bodyStr || ''
      }

      $.post(options, async (err, resp, data) => {
        try {
          if (err) {
            pushMsg(`❌ 查询签到状态失败: ${err.message || err}`)
            resolve(null)
            return
          }

          const obj = JSON.parse(data)

          if (obj.success !== true) {
            pushMsg(`❌ 查询异常: ${obj.message || obj.code}`)
            pushMsg('💡 请重新打开U你小程序刷新凭证')
            resolve(null)
            return
          }

          // 拼接签到日历
          const today = $.time('yyyyMMdd') + '000000'
          let todayStatus = null

          if (obj.list && obj.list.length > 0) {
            const weekMap = { 0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六' }
            const lines = ['📅 近7天签到：']

            for (const item of obj.list) {
              const dateStr = item.date ? item.date.substring(0, 8) : ''
              if (!dateStr) continue

              // 格式化日期为 MM/dd 周X
              const y = dateStr.substring(0, 4)
              const m = dateStr.substring(4, 6)
              const d = dateStr.substring(6, 8)
              const w = new Date(`${y}-${m}-${d}`).getDay()
              const icon = item.checkInStatus === 1 ? '✅' : '⬜'

              lines.push(`${icon} ${m}/${d} 周${weekMap[w]}`)

              // 判断今天是否已签到
              if (item.date === today) {
                todayStatus = item.checkInStatus === 1
              }
            }

            pushMsg(lines.join('\n'))
          }

          resolve(todayStatus)
        } catch (e) {
          $.logErr(e, resp)
          pushMsg(`❌ 查询异常: ${e.message}`)
          resolve(null)
        }
      })
    } catch (e) {
      pushMsg(`❌ 解析 Headers 失败: ${e.message}`)
      resolve(null)
    }
  })
}

// 执行签到（需传入已补全的 body）
function doCheckin(checkinBody) {
  return new Promise((resolve) => {
    const headersStr = $.getdata(HEADERS_KEY)

    if (!headersStr || !checkinBody) {
      pushMsg('❌ 签到失败，缺少凭证')
      resolve()
      return
    }

    try {
      const headers = JSON.parse(headersStr)

      const options = {
        url: `${$.baseUrl}/checkIn/customerCheckIn`,
        headers: { ...headers, 'User-Agent': $.UA },
        body: checkinBody
      }

      $.post(options, async (err, resp, data) => {
        try {
          if (err) {
            pushMsg(`❌ 签到请求失败: ${err.message || err}`)
            resolve()
            return
          }

          const obj = JSON.parse(data)

          if (obj.success === true || obj.code === '000') {
            pushMsg(`✅ 签到成功！${obj.message || ''}`)
            $.setdata($.Messages[$.Messages.length - 1], '签到信息')
          } else {
            pushMsg(`❌ 签到失败，${obj.message || obj.code || '未知错误'}`)
            pushMsg('💡 请重新打开U你小程序刷新凭证')
          }
        } catch (e) {
          $.logErr(e, resp)
          pushMsg(`❌ 签到异常: ${e.message}`)
        } finally {
          resolve()
        }
      })
    } catch (e) {
      pushMsg(`❌ 解析 Headers 失败: ${e.message}`)
      resolve()
    }
  })
}

function pushMsg(text) {
  $.Messages.push(text)
  $.log(`通知内容：${text}`)
}

// Bark APP 通知推送（重试3次）
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
        (e, r, d) => r && r.status == 200 ? n(1) : n(d || e)
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
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

!(async () => {
  // 从会员卡接口捕获 Headers
  if (typeof($request) !== 'undefined') {
    await GetCookie()
    $.done()
    return
  }

  let checkinBody = $.getdata(CHECKIN_BODY_KEY) // 优先读取缓存的签到 body

  // 1. 无缓存 → 调会员卡接口补全字段并持久化
  if (!checkinBody) {
    const cardData = await queryCardInfo()
    if (!cardData) return // 会员卡查询失败，无法继续
    checkinBody = buildCheckinBody(cardData)
    if (!checkinBody) return
  }

  // 2. 查询今日是否已签到
  const todaySigned = await queryStatus()

  if (todaySigned === null) {
    // 查询失败，无法继续
  } else if (todaySigned === true) {
    pushMsg('⏭️ 今日已签到，无需重复签到')
  } else {
    // 3. 今日未签到，执行签到
    await doCheckin(checkinBody)
  }
})()
  .catch((e) => $.logErr(e))
  .finally(async () => {
    if ($.Messages.length > 0) {
      if ($.barkKey) {
        await BarkNotify($, $.barkKey, $.name, $.Messages.join('\n'))
      } else {
        await $.msg($.name, ``, $.Messages.join('\n'))
      }
    }
    $.done()
  })
