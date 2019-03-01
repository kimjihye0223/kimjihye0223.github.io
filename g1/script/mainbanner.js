$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2400);
    function nextAni() {
        $(".banSd").not(":animated").animate({"margin-left":"-375px"}, 500, function(){
            $(".banSd li").eq(0).appendTo($(".banSd"));
            $(".banSd").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".banSd li").eq(5).prependTo($(".banSd"));
        $(".banSd").css("margin-left", "375px");
        $(".banSd").not(":animated").animate({"margin-left":"0px"}, 500);
    }
    $(".nBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2400);
    });
    $(".pBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 2400);
    });
    $(".popOpenBtn").click(function(){
       $(".popBox").fadeIn(); 
    });
    $(".closeBtn").click(function(){
       $(".popBox").fadeOut(); 
    });
});