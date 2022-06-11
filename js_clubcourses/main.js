$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    //1 sec = 1000 ms
    //計算一天的秒數
    let millisecsPerDay = 24*60*60*1000;
    var topicCount = topic.length;
    for(var x=0; x<topicCount; x++){
        let eventDate = new Date(startDate.getTime()+7*x*millisecsPerDay);
        $("#courseTable").append(
            `<tr><td>${x+1}</td><td>${eventDate.getMonth()+1}/${eventDate.getDate()}</td><td>${topic[x]}</td></tr>`

        );
    }
    let newDate = $("#myDate").val();
    $("#myDate").on("change",function(){
        
        

        console.log(newDate);

        setMonthAndDate = setMonthAndDate.attr("date",newDate.getMonth(),newDate.getDate());


    });
});