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

if (url.includes("/api/sync")) {
  console.log(obj.profile)
  if (obj.profile?.premium!= undefined || obj.profile?.premium != null) {
    obj.profile?.premium = true;
  }
}
$done({ body: JSON.stringify(obj) });