let foodImages = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://imgs.gvm.com.tw/upload/gallery/20191101/69156_01.jpg",
    "https://tw.savorjapan.com/gg/content_image/t0268_001.jpg"
];

$(function(){ //$ = window.onload
    $("input").on("click",function(){ //$ = getElementByTagName on = addEventListen
        //alert("Hi");
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text()); //$ = getElementByTagName | text = innerHTML
        $("img").attr("src",foodImages[randomChildNumber]);
    });

    //indexHTML

    // $("input").on("click",function(){
    //     $("")



});

// window.onload = function(){

// };