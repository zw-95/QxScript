/*
 贴吧 去广告
*/
// 2024年05月10日 03:58:43
/*
==============================

[rewrite_local]
^https:\/\/tiebac\.baidu\.com\/* url script-response-body https://raw.githubusercontent.com/zw-95/QxScript/master/BaiduTieba/removeAd.js
^https:\/\/pim\.baidu\.com\/rest\/3\.0\/im\/get_user_info url script-response-body ttps://raw.githubusercontent.com/zw-95/QxScript/master/BaiduTieba/removeAd.js
// ^https:\/\/tiebac\.baidu\.com\/* url script-response-body http://192.168.10.19:5500/BaiduTieba/removeAd.js
// ^https:\/\/pim\.baidu\.com\/rest\/3\.0\/im\/get_user_info url script-response-body http://192.168.10.19:5500/BaiduTieba/removeAd.js

[mitm]
hostname = tiebac.baidu.com, pim.baidu.com
==============================
*/

const url = $request.url;
const $ = new Env('贴吧去广告');
let rsp_body = $response.body;
if (!$response.body) $done({});
let data = JSON.parse($response.body);
const staticPng = 'https://s2.loli.net/2024/05/12/FVgi5EdqKtyz9Gf.png';
// 去除 进吧-贴吧精选
if (url.includes("/c/f/forum/getRecommendForumData")) {
  if (data.recommend_forum_info) {
    data.recommend_forum_info = [];
  }
}
// 去除消息列表左侧频道列表
if (url.includes("/c/f/chat/commonChannel")) {
  if (data.data) {
    data.data.channel_list = [];
    data.data.ex_fun_list[0].img.dark=staticPng;
    data.data.ex_fun_list[0].img.normal=staticPng; 
  }
}
// 去除消息列表AI列表
if (url.includes("/c/u/chat/getChatSubscriptionList")) {
  if (data.data) {
    data.data.aichat_entrance_info.bot_list = [];
    data.data.aichat_entrance_info.entrance_text = '';
    data.data.aichat_entrance_info.guide_text = '';
    data.data.aichat_entrance_info.guide_img = staticPng;
  }
}
function deleteKeysWithPrefix(obj, prefix) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key.startsWith(prefix)) {
      delete obj[key];
    }
  }
}
// 
if (url.includes("/c/s/sync")){
  if(data.advertisement_config){
    data.advertisement_config.advertisement_limit_a = "0"
    data.advertisement_config.advertisement_limit_bc = "0"
    data.duxiaoman_url.cash_loan = ""
    data.duxiaoman_url.finance = ""
    data.duxiaoman_url.baifubao = ""
    data.duxiaoman_url.cash_pay = ""
  }
  if(data.ad_adsense){
    data.ad_adsense.lp_video_not_autoplay = "1"
    data.ad_adsense.ad_video_not_autoplay = "1"
    data.ad_adsense.ad_collect_switch = "0"
  }
  if(data.ad_origin_config_switch){
    data.ad_origin_config_switch = '0'
  }
  if(data.wl_config){
    data.wl_config = {}
    // deleteKeysWithPrefix(myObject, 'index_tab_');
    // data.wl_config.is_auto_play_forumheadvideo = '0'
    // data.wl_config.pure_mode = '1'
  }
  if(data.search_guide){
    data.search_guide.frs.is_show = '0'
  }
  if(data.namoaixud_url){
    data.namoaixud_url.cash_loan = ''
    data.namoaixud_url.finance = ''
    data.namoaixud_url.baifubao = ''
    data.namoaixud_url.cash_pay = ''
  }
  if(data.ad_num_competition_frs){
    data.ad_num_competition_frs = '0'
  }
  if(data.config){
    data.config.img_chunk_upload_enable = '0'
    data.config.upload_compress_rate_pic = '1'
    data.config.upload_compress_rate_src_pic = '1'
    data.config.is_auto_play_forumheadvideo = '0'
  }
  if(data.screen_fill_data_result){
    data.screen_fill_data_result.screen_fill_advertisement_plj_switch = '0'
    data.screen_fill_data_result.screen_fill_advertisement_plj_cpc_switch = '0'
    data.screen_fill_data_result.screen_fill_ad_plg_hot_exposure_interval = '0'
    data.screen_fill_data_result.screen_fill_ad_bear_exposure_max_times = '0'
    data.screen_fill_data_result.screen_fill_ad_bear_exposure_max_times = '0'
    data.screen_fill_data_result.screen_fill_advertisement_bear_switch = '0'
    data.screen_fill_data_result.screen_fill_advertisement_first_switch = '0'
  }
  if(data.ad_num_competition_personalize){
    data.ad_num_competition_personalize = '0'
  }
  if(data.home_screen_ad){
    data.home_screen_ad.is_vip_client = '1'
  }
}

// 去除 我的-广告
if (url.includes("/c/u/user/profile") || url.includes("/c/f/sidebar/home")) {
  if(data.finance_tab){
    data.finance_tab.tabs=[]
  }
  if (data.recom_swan_list) {
    data.recom_swan_list = [];
  }
  if(data.vip_banner){
    // data.vip_banner = {};
    data.vip_banner = {background_night : "https://tieba-ares.cdn.bcebos.com/mis/2024-2/1708670435493/9ae0d8aea63e.png", background_day : "https://tieba-ares.cdn.bcebos.com/mis/2024-2/1708670434983/380bece48d36.png"}

    // data.vip_banner.ios_banner_emoji=staticPng
    // data.vip_banner.ios_banner_background=staticPng
    // data.vip_banner.sub_title_list=[]
    // data.vip_banner.banner_pic=staticPng
    // data.vip_banner.vip_icon=staticPng
    // data.vip_banner.theme_color_info.sub_title_theme.day.common_color = "#00147B00"
    // data.vip_banner.theme_color_info.sub_title_theme.dark.common_color = "#00147B00"
    // data.vip_banner.theme_color_info.sub_title_theme.night.common_color = "#00147B00"
    // data.vip_banner.theme_color_info.title_theme.day.common_color = "#00147B00"
    // data.vip_banner.theme_color_info.title_theme.dark.common_color = "#00147B00"
    // data.vip_banner.theme_color_info.title_theme.night.common_color = "#00147B00"
  }
  if(data.duxiaoman){
    data.duxiaoman.is_end = 1
  }
  if(data.namoaixud){
    data.namoaixud.is_end = 1
  }
  if(data.namoaixud_entry){
    data.namoaixud_entry={}
    // data.namoaixud_entry.encourage_desc = ''
    // data.namoaixud_entry.goto_button_url = ''
    // data.namoaixud_entry.amount = ''
    // data.namoaixud_entry.amount_msg = ''
    // data.namoaixud_entry.encourage_icon_dark = staticPng
    // data.namoaixud_entry.tip = ''
    // data.namoaixud_entry.activity_link_addr = ''
    // data.namoaixud_entry.activity_desc = ''
    // data.namoaixud_entry.encourage_icon = staticPng
    // data.namoaixud_entry.goto_button_name = ''
  }
  if(data.user){
    data.user.user_show_info.feed_head.main_data[1].icon.width=0
    data.user.user_show_info.feed_head.main_data[1].icon.height=0
    data.user.consume_info.title=''
    data.user.consume_info.content=''
  }
  if(data.banner){
    data.banner = []
    // data.banner[0].img_url = staticPng
    // data.banner[0].ahead_url = staticPng
  }
  if(data.recom_naws_list){
    data.recom_naws_list = []
  }
  if(data.custom_grid){
    data.custom_grid = []
  }
}

// 尝试修改类似VIP的参数
if(url.includes("/rest/3.0/im/get_user_info")){
  if(data.user_list){
    data.user_list[0].vip = '1'
  }
}

$done({ body: JSON.stringify(data) });


// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
