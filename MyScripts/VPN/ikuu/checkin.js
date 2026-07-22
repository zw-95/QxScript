/*
iKuuu VPN 签到

说明：
打开 https://ikuuu.win/user 页面，触发请求时自动捕获 Cookie，
之后可手动执行定时任务完成每日签到，签到奖励流量。

~~~~~~~~~~~~~~~~
QX 1.0.10+ :

[rewrite_local]
# iKuuu VPN 签到 Cookie 捕获
//^https:\/\/ikuuu\.win\/user url-and-header script-request-header http://192.168.10.19:5500/MyScripts/VPN/ikuu/checkin.js

^https:\/\/ikuuu\.win\/user url-and-header script-request-header https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/VPN/ikuu/checkin.js

[task_local]
0 9 * * * https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/VPN/ikuu/checkin.js, tag=iKuuu VPN 签到, enabled=false

[mitm]
hostname = ikuuu.win
~~~~~~~~~~~~~~~~
*/

const $ = new Env(`iKuuu VPN`)
const ckName = 'ikuuu_Cookies'
let userCookie = $.getdata(ckName) || ''

const ikuHost = 'ikuuu.win'
let userIdx = 0
let userList = []
let userCount = 0

$.Messages = []
$.barkKey = $.getdata('bark_key') || '' // Bark 推送 Key，可通过 BoxJs 设置 bark_key
// 调试开关
$.is_debug = 'false'

// 脚本入口函数 main()
async function main() {
  $.log('\n================== 签到任务 ==================\n')
  let invalidCount = 0
  for (let user of userList) {
    $.log(`🔷${user.email} >> 开始签到`)

    // 签到
    let signResult = await user.checkin()
    // 查询剩余流量
    let traffic = await user.fetchTraffic()
    let trafficStr = traffic ? `，剩余流量：${traffic}` : '未获取到'

    if (signResult) {
      const emoji = signResult.ret === 1 ? '✅' : 'ℹ️'
      pushMsg(`${emoji}${user.email} >> ${signResult.msg}${trafficStr}`)
    } else {
      invalidCount++
      pushMsg(`❌${user.email} >> 请求失败，Cookie 已失效，清除`)
    }

    $.log(`🔷${user.email} >> 签到结束`)
  }

  // 清理失效 Cookie
  if (invalidCount > 0) {
    const validCookies = userList.filter(u => u.valid).map(u => u.cookie)
    if (validCookies.length > 0) {
      userCookie = validCookies.join('\n')
      $.setdata(userCookie, ckName)
      pushMsg(`🧹已清理 ${invalidCount} 个失效账号，剩余 ${validCookies.length} 个有效账号`)
    } else {
      // 全部失效，清空 Cookie
      userCookie = ''
      $.setdata(userCookie, ckName)
      pushMsg(`⚠️ 所有账号 Cookie 均已失效，请重新获取`)
    }
  }
}

class UserInfo {
  constructor(str) {
    this.index = ++userIdx
    this.cookie = str
    this.valid = true
    // 从 Cookie 中提取邮箱
    const emailMatch = str.match(/email=([^;]*)/)
    this.email = emailMatch ? decodeURIComponent(emailMatch[1]) : `账号${this.index}`
    this.headers = {
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'X-Requested-With': 'XMLHttpRequest',
      'Referer': 'https://ikuuu.win/user',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
      'Cookie': this.cookie,
    }
  }

  // 请求二次封装
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

  // 签到
  async checkin() {
    try {
      const options = {
        url: `https://${ikuHost}/user/checkin`,
        headers: this.headers,
      }
      debug(options, '签到请求')
      let res = await this.Request(options, 'post')
      debug(res, '签到结果')
      // 能解析出 ret 和 msg 即视为调用成功，不做失效处理
      if (!res || typeof res.ret === 'undefined' || typeof res.msg === 'undefined') {
        this.valid = false
      }
      return res
    } catch (e) {
      this.valid = false
      $.logErr(e)
      return null
    }
  }

  // 查询剩余流量
  async fetchTraffic() {
    try {
      const options = {
        url: `https://${ikuHost}/user`,
        headers: this.headers,
      }
      debug(options, '流量查询请求')
      let res = await this.Request(options, 'get')
      if (typeof res === 'string') {
        // 提取 originBody 变量值并 base64 解码
        const originMatch = res.match(/var originBody\s*=\s*"([^"]*)"/)
        if (originMatch) {
          const decoded = decodeURIComponent(
            atob(originMatch[1])
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          )
          debug(decoded.substring(0, 500), '解码后 HTML (前500字符)')
          // 匹配 "剩余流量" 后的 counter 值
          const trafficMatch = decoded.match(/<span class="counter">([\d.]+)<\/span>\s*GB/)
          if (trafficMatch) {
            this.traffic = trafficMatch[1] + 'GB'
            debug(this.traffic, '剩余流量')
            return this.traffic
          }
        }
      }
      return null
    } catch (e) {
      return null
    }
  }
}

// 获取 Cookie（多账号：追加模式，按 uid 去重）
async function getCookie() {
  if ($request && $request.method != 'OPTIONS') {
    const cookieVal = $request.headers['Cookie'] || $request.headers['cookie']
    if (cookieVal) {
      // 提取当前 uid 用于去重
      const uidMatch = cookieVal.match(/uid=([^;]*)/)
      const newUid = uidMatch ? uidMatch[1] : null

      // 如果已有旧 Cookie，按 uid 去重后追加
      const oldCookies = userCookie ? userCookie.split('\n').filter(c => c.trim()) : []
      if (newUid) {
        // 移除同 uid 的旧记录，用新 Cookie 替换
        const filtered = oldCookies.filter(c => {
          const m = c.match(/uid=([^;]*)/)
          return !m || m[1] !== newUid
        })
        filtered.push(cookieVal)
        userCookie = filtered.join('\n')
      } else {
        // 无法提取 uid 时直接追加
        if (oldCookies.includes(cookieVal)) {
          userCookie = oldCookies.join('\n')
        } else {
          oldCookies.push(cookieVal)
          userCookie = oldCookies.join('\n')
        }
      }

      $.setdata(userCookie, ckName)
      $.log(`Cookie: ${cookieVal}`)
      pushMsg(`获取 Cookie 成功 🎉`)
      return true
    } else {
      pushMsg(`获取 Cookie 失败 ❌`)
      return false
    }
  }
}

// 主程序执行入口
!(async () => {
  if (typeof $request != 'undefined') {
    // 重写模式：捕获 Cookie
    await getCookie()
    return
  }

  // 任务模式：检查环境，执行签到
  if (!(await checkEnv())) {
    throw new Error(`❌未检测到 Cookie，请先打开 ikuuu.win 用户页面捕获 Cookie`)
  }

  if (userList.length > 0) {
    await main()
  }
})()
  .catch((e) => {
    const errorMessage = e.message || $.toStr(e) || e
    pushMsg(`Error: ${errorMessage}`)
    $.log(`Error: ${errorMessage}`)
  })
  .finally(async () => {
    if ($.Messages.length > 0) {
      if ($.barkKey) {
        // 已填写 Bark Key，推送 Bark 通知（重试3次）
        await BarkNotify($, $.barkKey, '日常签到', $.Messages.join('\n'))
      }
      await $.msg($.name, ``, $.Messages.join('\n')) // QX 系统通知
    }
    $.done()
  })

// 检查变量
async function checkEnv() {
  if (userCookie) {
    let e = '@'
    for (let o of ['@', '&', '\n']) {
      if (userCookie.indexOf(o) > -1) {
        e = o
        break
      }
    }
    for (let n of userCookie.split(e)) {
      if (n && n.trim()) {
        userList.push(new UserInfo(n.trim()))
      }
    }
    userCount = userList.length
  } else {
    console.log('未找到 Cookie')
    return
  }
  return console.log(`共找到 ${userCount} 个账号`), true
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
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = 'GET') {
      t = 'string' == typeof t ? { url: t } : t
      let s = this.get
      return (
        'POST' === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s)
          })
        })
      )
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, 'POST')
    }
  }
  return new (class {
    constructor(t, e) {
      ;(this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = 'box.dat'),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = '\n'),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log('', `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return 'undefined' != typeof module && !!module.exports
    }
    isQuanX() {
      return 'undefined' != typeof $task
    }
    isSurge() {
      return 'undefined' != typeof $httpClient && 'undefined' == typeof $loon
    }
    isLoon() {
      return 'undefined' != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e
      const i = this.getdata(t)
      if (i)
        try {
          s = JSON.parse(this.getdata(t))
        } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise((e) => {
        this.get({ url: t }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise((s) => {
        let i = this.getdata('@chavy_boxjs_userCfgs.httpapi')
        i = i ? i.replace(/\n/g, '').trim() : i
        let r = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
        ;(r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r)
        const [o, h] = i.split('@'),
          a = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: 'cron', timeout: r },
            headers: { 'X-Key': o, Accept: '*/*' },
          }
        this.post(a, (t, e, i) => s(i))
      }).catch((t) => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}
      {
        ;(this.fs = this.fs ? this.fs : require('fs')), (this.path = this.path ? this.path : require('path'))
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e)
        if (!s && !i) return {}
        {
          const i = s ? t : e
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        ;(this.fs = this.fs ? this.fs : require('fs')), (this.path = this.path ? this.path : require('path'))
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data)
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, '.$1').split('.')
      let r = t
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) => (Object(t[s]) === t[s] ? t[s] : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {})),
              t
            )[e[e.length - 1]] = s),
          t)
    }
    getdata(t) {
      let e = this.getval(t)
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : ''
        if (r)
          try {
            const t = JSON.parse(r)
            e = t ? this.lodash_get(t, i, '') : e
          } catch (t) {
            e = ''
          }
      }
      return e
    }
    setdata(t, e) {
      let s = !1
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ('null' === o ? null : o || '{}') : '{}'
        try {
          const e = JSON.parse(h)
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i))
        } catch (e) {
          const o = {}
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i))
        }
      } else s = this.setval(t, e)
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()), (this.data[e] = t), this.writedata(), !0)
        : (this.data && this.data[e]) || null
    }
    initGotEnv(t) {
      ;(this.got = this.got ? this.got : require('got')),
        (this.cktough = this.cktough ? this.cktough : require('tough-cookie')),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers['Content-Type'], delete t.headers['Content-Length']),
        this.isSurge() || this.isLoon()
          ? (this.isSurge() &&
              this.isNeedRewrite &&
              ((t.headers = t.headers || {}), Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
            $httpClient.get(t, (t, s, i) => {
              !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i)
            }))
          : this.isQuanX()
          ? (this.isNeedRewrite && ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
            $task.fetch(t).then(
              (t) => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
              },
              (t) => e(t)
            ))
          : this.isNode() &&
            (this.initGotEnv(t),
            this.got(t)
              .on('redirect', (t, e) => {
                try {
                  if (t.headers['set-cookie']) {
                    const s = t.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                    this.ckjar.setCookieSync(s, null), (e.cookieJar = this.ckjar)
                  }
                } catch (t) {
                  this.logErr(t)
                }
              })
              .then(
                (t) => {
                  const { statusCode: s, statusCode: i, headers: r, body: o } = t
                  e(null, { status: s, statusCode: i, headers: r, body: o }, o)
                },
                (t) => {
                  const { message: s, response: i } = t
                  e(s, i, i && i.body)
                }
              ))
    }
    post(t, e = () => {}) {
      if (
        (t.body &&
          t.headers &&
          !t.headers['Content-Type'] &&
          (t.headers['Content-Type'] = 'application/x-www-form-urlencoded'),
        t.headers && delete t.headers['Content-Length'],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}), Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
          $httpClient.post(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i)
          })
      else if (this.isQuanX())
        (t.method = 'POST'),
          this.isNeedRewrite && ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t
              e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            },
            (t) => e(t)
          )
      else if (this.isNode()) {
        this.initGotEnv(t)
        const { url: s, ...i } = t
        this.got.post(s, i).then(
          (t) => {
            const { statusCode: s, statusCode: i, headers: r, body: o } = t
            e(null, { status: s, statusCode: i, headers: r, body: o }, o)
          },
          (t) => {
            const { message: s, response: i } = t
            e(s, i, i && i.body)
          }
        )
      }
    }
    time(t) {
      let e = {
        'M+': new Date().getMonth() + 1,
        'd+': new Date().getDate(),
        'H+': new Date().getHours(),
        'm+': new Date().getMinutes(),
        's+': new Date().getSeconds(),
        'q+': Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds(),
      }
      ;/(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + '').substr(4 - RegExp.$1.length)))
      for (let s in e)
        new RegExp('(' + s + ')').test(t) &&
          (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ('00' + e[s]).substr(('' + e[s]).length)))
      return t
    }
    msg(e = t, s = '', i = '', r) {
      const o = (t) => {
        if (!t) return t
        if ('string' == typeof t)
          return this.isLoon() ? t : this.isQuanX() ? { 'open-url': t } : this.isSurge() ? { url: t } : void 0
        if ('object' == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t['open-url'],
              s = t.mediaUrl || t['media-url']
            return { openUrl: e, mediaUrl: s }
          }
          if (this.isQuanX()) {
            let e = t['open-url'] || t.url || t.openUrl,
              s = t['media-url'] || t.mediaUrl
            return { 'open-url': e, 'media-url': s }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t['open-url']
            return { url: e }
          }
        }
      }
      this.isMute ||
        (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)))
      let h = ['', '==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3==============']
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join('\n')), (this.logs = this.logs.concat(h))
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon()
      s
        ? this.log('', `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack)
        : this.log('', `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise((e) => setTimeout(e, t))
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3
      this.log('', `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  })(t, e)
}
