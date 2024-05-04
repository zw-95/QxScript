/*
飞兔云签到

脚本兼容：QuantumultX
更新日期：2024-05-04
如果转载，请注明出处

说明：
打开飞兔云登录，或者已登录的刷新首页。支持多个账号，请用不同浏览器打开，避免旧账号cookie失效

脚本将在每天上午6点执行。 您可以修改执行时间。
~~~~~~~~~~~~~~~~
QX 1.0.10+ :

[task_local]
0 6 * * * https://raw.githubusercontent.com/zw-95/QxScript/master/Feitu-DailyBonus/Checkin.js, tag=飞兔云签到

[rewrite_local]
#飞兔云Cookie
^https:\/\/api-cdn.feitu.im\/ft\/gateway\/cn\/user\/getSubscribe ^GET url-and-header script-request-header https://raw.githubusercontent.com/zw-95/QxScript/master/Feitu-DailyBonus/Checkin.js

[mitm]
hostname = api-cdn.feitu.im
~~~~~~~~~~~~~~~~
*/

const $ = new Env(`飞兔云`)

let cookies = JSON.parse($.getdata('feitu_Cookies') || '[]') // 飞兔云Cookies，支持多个

const barkKey = '' //Bark APP 通知推送Key

$.Messages = []
$.msgBody = ''

!(async () => {
  if (typeof $request !== 'undefined') {
    // 获取cookie
    $.log('开始获取 Cookie')
    await GetCookie(cookies)
  } else if (!cookies) {
    // 非重写，没有cookie
    $.Messages.push(`签到Cookie失效/未获取 ⚠️`)
  } else {
    // 执行签到
    $.log('开始签到')
    await checkin(cookies)
  }
})()
  .catch((e) => {
    $.Messages.push(e.message || e) && $.logErr(e)
  })
  .finally(async () => {
    if ($.Messages.length > 0) {
      await $.msg($.name, ``, $.Messages.join('\n').trimStart().trimEnd())
      if (barkKey) {
        await BarkNotify($, barkKey, $.name, $.Messages.join('\n').trimStart().trimEnd())
      }
    }

    $.done()
  })

async function checkin(cookies) {
  for (let eachCK of cookies) {
    try {
      const checkinOptions = {
        url: 'https://api-cdn.feitu.im/ft/gateway/cn/user/sign',
        headers: {
          Authorization: eachCK,
          'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/124.0.6367.88 Mobile/15E148 Safari/604.1',
        },
      }
      const getInfoOptions = {
        url: 'https://api-cdn.feitu.im/ft/gateway/cn/user/getSubscribe',
        headers: {
          Authorization: eachCK,
          'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/124.0.6367.88 Mobile/15E148 Safari/604.1',
        },
      }
      // 获取订阅信息
      const getInfoResponse = await new Promise((resolve) => {
        $.get(getInfoOptions, (error, resp, data) => {
          resolve(resp)
        })
      })
      if (getInfoResponse && getInfoResponse.status == 200) {
        const infoBody = JSON.parse(getInfoResponse.body)
        const infoData = infoBody.data
        if (infoData.plan_id) {
          let expirdDate = formatTimestamp(new Date(infoData.expired_at));
          let used = `${(infoData.d / 1024 / 1024 / 1024).toFixed(1)}`;
          let total = `${(infoData.transfer_enable /1024 /1024 /1024).toFixed(1)}`;
          $.msgBody += `账号:${infoData.email},用量:${used}/${total}G,${infoData.reset_day}天重置,${expirdDate}到期`
        } else {
          $.msgBody += `\n账号:${infoData.email},未购买订阅`
        }
      } else {
        throw new Error(`获取账号信息失败，请检查账号登录是否过期`)
      }
      
      // 获取签到结果
      const checkInResponse = await new Promise((resolve) => {
        $.get(checkinOptions, (error, resp, data) => {
          resolve(resp)
        })
      })
      if (checkInResponse && checkInResponse.status == 200) {
        const checkInbody = JSON.parse(checkInResponse.body)
        if (!!checkInbody.total) {
          $.msgBody += `\n签到:成功 🎉, ${checkInbody.message}，可用${checkInbody.total}G`
        } else {
          $.log(checkInbody.message)
          $.msgBody += `\n签到:${checkInbody?.message || checkInbody || ''}`
        }
      } else {
        throw new Error(`获取签到信息失败，请检查账号登录是否过期`)
      }

      if (barkKey) {
        await BarkNotify($, barkKey, $.name, $.msgBody)
      }
      $.Messages.push($.msgBody)
      $.msgBody = ''
    } catch (error) {
      // 捕获异常并处理
      $.logErr('发生错误:', error.message)
      // 可以根据错误类型或消息来决定如何处理
      // 例如，可以设置一个默认的消息体或者退出循环等
      $.msgBody = `\n签到结果: 异常 ⚠️\n+ 说明: ${error.message}`
      if (barkKey) {
        await BarkNotify($, barkKey, $.name, $.msgBody)
      }
      $.Messages.push($.msgBody)
      continue // 如果你想在捕获异常后继续执行循环，可以使用continue
    }
  }
}

async function GetCookie(oldCookie) {
  const req = JSON.stringify($request)
  const newCookieValue = $request.headers['Authorization'] || $request.headers['authorization']
  $.log(`检测到飞兔云Cookie: ${newCookieValue}`)

  if (!newCookieValue) {
    $.Messages.push($.name, ``, `获取飞兔云Cookie失败，关键值缺失 ⚠️`)
  } else {
    oldCookie = oldCookie.filter((v) => v != newCookieValue)
    if (oldCookie.length > 0) {
      for (let eachCK of oldCookie) {
        // 检查旧cookies
        $.log(`检查飞兔云旧Cookie: ${eachCK}`)
        const getInfoOptions = {
          url: 'https://api-cdn.feitu.im/ft/gateway/cn/user/getSubscribe',
          headers: {
            Authorization: eachCK,
            'User-Agent':
              'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/124.0.6367.88 Mobile/15E148 Safari/604.1',
          },
        }
        // 获取订阅信息
        const getInfoResponse = await new Promise((resolve) => {
          $.get(getInfoOptions, (error, resp, data) => {
            resolve(resp)
          })
        })
        if (getInfoResponse.status != 200 && getInfoResponse.error && !getInfoResponse.body) {
          $.logErr(`校验飞兔云旧Cookie失败!${eachCK}\n${error}`)
          $.msgBody += `校验飞兔云旧Cookie失败!\n${error}`
          oldCookie = oldCookie.filter((v) => v != eachCK)
        } else {
          $.log(`校验飞兔云旧Cookie成功: ${eachCK}`)
          // $.msgBody += '校验飞兔云旧Cookie成功'
        }

        $.Messages.push($.msgBody)
      }
    }
    $.log(`添加新飞兔云Cookie: ${newCookieValue}`)
    oldCookie.push(newCookieValue)
    const setCookies = $.setdata(JSON.stringify(oldCookie), `feitu_Cookies`)

    if (oldCookie.length > 0) {
      $.Messages.push(`更新飞兔云Cookie${setCookies ? `成功 🎉，现有${oldCookie.length} 个` : `失败 ⚠️`}`)
    } else {
      $.Messages.push(`获取飞兔云Cookie${setCookies ? `成功 🎉，现有${oldCookie.length} 个` : `失败 ⚠️`}`)
    }
    $.log(`获取Cookie结束`)
  }
}
function formatTimestamp(timestampInSeconds) {
  var date = new Date(timestampInSeconds * 1000);
  var year = date.getUTCFullYear(); // 使用UTC函数避免时区问题
  var month = date.getUTCMonth() + 1; // 月份是从1开始的
  var day = date.getUTCDate();
  var formattedDate = year + "-" + month.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0');
  return formattedDate;
}
//Bark APP notify
async function BarkNotify(c, k, t, b) { for (let i = 0; i < 3; i++) { console.log(`🔷Bark notify >> Start push (${i + 1})`); const s = await new Promise((n) => { c.post({ url: 'https://api.day.app/push', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: t, body: b, device_key: k, ext_params: { group: t } }) }, (e, r, d) => r && r.status == 200 ? n(1) : n(d || e)) }); if (s === 1) { console.log('✅Push success!'); break } else { console.log(`❌Push failed! >> ${s.message || s}`) } } };

// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }