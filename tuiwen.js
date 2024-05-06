/*
[rewrite_local]

^http:\/\/ai\.y56\.cc\/index\.php\/ai\/apiv2\/user\/index url script-response-body https://raw.githubusercontent.com/Hmiwy/tuiwen/main/tuiwen.js

[mitm]
hostname = ai.y56.cc 


{
  "msg" : "success",
  "data" : {
    "iospay" : false,
    "isaudit" : false,
    "viptime" : "",
    "id" : 1055,
    "nickname" : "T_200611",
    "pic" : "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
    "cion" : "0",
    "daycion" : 0,
    "vip" : "0",
    "fid" : "0",
    "ispaper" : true
  },
  "code" : 1
}
*/
var chxm1023 = JSON.parse($response.body);
chxm1023={
  ...chxm1023,
  "data" :{
    "iospay" : true,
    "viptime" : "2099-12-12",
    "cion" : "99999"
     "vip" : "1",
  "daycion" : 99999,
  }
}
