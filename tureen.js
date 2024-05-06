/*******************************


[rewrite_local]
^http:\/\/api\.tuiwenzhushou\.top\/user\/ url script-response-body https://raw.githubusercontent.com/Hmiwy/tuiwen/main/tureen.js
[mitm] 
hostname = api.tuiwenzhushou.top
*******************************/
                               
/*{
  "data" : {
    "id" : 5254469,
    "app_id" : 50,
    "add_time" : 1714967952,
    "access_time" : 1714967952,
    "status" : 1,
    "open_id" : "",
    "reg_ip" : "171.106.113.65",
    "type" : 0,
    "vip_type" : 0,
    "reg_pay" : 0,
    "is_vip" : 0,
    "vip_end_time" : 0,
    "skey" : "7f89da69a7e5786f488af8396db2b70b"
  },
  "code" : 0
}
(/"vipPoints":\d+/g,'"vipPoints":999999999')
*/
var body = $response.body.replace(/"is_vip":\d+/g,'"is_vip":1')
.replace(/"vip_end_time":.*?"/g,'"vip_end_time":2099-12-12')
$done({ body });

