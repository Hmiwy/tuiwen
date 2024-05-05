/*******************************

*******************************

[rewrite_local]

^http[s]?:\/\/league-api.huazhuanapp.com\/api\/v1\/user\/permanentPoints? url script-response-body https://raw.githubusercontent.com/SNKrock/3430460/main/twzs.js

[mitm] 

hostname = league-api.huazhuanapp.com

*******************************/

/*const body = $response.body.replace(/"vipPoints":\d+/g,'"vipPoints":999999999')
.replace(/"permanentPoint":\d+/g,'"permanentPoint":999999999')
.replace(/"showVipAlert":\w+/g,'"showVipAlert":true')
.replace(/"vipDesc":".*?"/g,'"vipDesc":"会员有效期至：2999-09-09 19:19"')
.replace(/"mobile":".*?"/g,'"mobile":"139****8888(年卡会员)"')
.replace(/"coins":\d+/g,'"coins":99999999999')
.replace(/"vipDesc":".*?"/g,'"vipDesc":"会员有效期至：2099-09-09 14:38"')
.replace(/"mobile":".*?"/g,'"mobile":"139****9999(年卡会员)"')
.replace(/"coins":\d+/g,'"coins":99999999')
.replace(/"showVipAlert":\w+/g,'"showVipAlert":true')
.replace(/"vipStatus":\d/g,'"vipStatus":1')
$done({ body });
/* "vipDetailDesc" : "每日24点重置",
  "permanentPointDesc" : "永久积分长期有效，不使用不会消耗，不会重置清零",
  "price" : 10,
  "vipPoints" : 0,
  "coins" : 0,
  "permanentPoint" : 0,
  "vipPointDesc" : "会员每日赠送会员积分，每日24点重置"*/


var body = $response.body.replace(/"price":\d+/g,'"price":0') 
 .replace(/"permanentPoint":\d+/g,'"permanentPoint":9999')
  $done({ body });                                 
