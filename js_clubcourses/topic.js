var topic = [
    "停課-尚未開學",
    "停課-國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];
var startDate = new Date(); //先得到一個當下的日期時間物件

function setMonthAndDate(startMonth, startDay){

//日期時間物件有內建方法
startDate.setMonth(startMonth-1,startDay);
//忽略時/分/秒
startDate.setHours(0);
startDate.setMinutes(0);
startDate.setSeconds(0);
};



//手動設定月份與日期
// setMonthAndDay(6,6); //活動的日期 