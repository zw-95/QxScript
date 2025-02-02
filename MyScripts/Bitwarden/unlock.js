/*
 bitwarden 解锁高级会员
*/
// 2024年05月10日 03:58:43
// https://vault.bitwarden.com/api/sync
/*
==============================

[rewrite_local]
https:\/\/vault\.bitwarden\.com\/api\/sync url script-response-body https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/Bitwarden/unlock.js
https:\/\/api\.bitwarden\.com\/sync url script-response-body https://raw.githubusercontent.com/zw-95/QxScript/master/MyScripts/Bitwarden/unlock.js

[mitm]
hostname = vault.bitwarden.com, api.bitwarden.com
==============================
*/

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
if (url.includes("/sync")) {
  if (obj.profile?.premium!= undefined && obj.profile?.premium != null) {
    obj.profile.premium = true;
  }
}
console.log('bitwarden已解锁')
$done({ body: JSON.stringify(obj) });