/*
 bitwarden 解锁高级会员
*/
// 2024年05月10日 03:58:43
// https://vault.bitwarden.com/api/sync
/*
==============================

[rewrite_local]
https:\/\/vault\.bitwarden\.com\/api\/sync url script-response-body https://raw.githubusercontent.com/zw-95/QxScript/master/QuantumultX/File/Bitwarden.js

[mitm]
hostname = vault.bitwarden.com
==============================
*/

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
console.log('开始')
console.log(obj.profile)
if (url.includes("/api/sync")) {
  console.log('匹配到url')
  console.log(url)
  if (obj.profile?.premium!= undefined && obj.profile?.premium != null) {
    console.log('匹配到高级用户信息')
    console.log(obj.profile.premium)
    obj.profile.premium = true;
  }
}
console.log('结束')
$done({ body: JSON.stringify(obj) });