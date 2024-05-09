/*
 bitwarden 解锁高级会员
*/
// 2024年05月10日 03:58:43
// https://vault.bitwarden.com/api/sync

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/api/sync")) {
  if (obj.profile?.premium!= undefined || obj.profile?.premium != null) {
    obj.profile?.premium = true;
  }
}
$done({ body: JSON.stringify(obj) });