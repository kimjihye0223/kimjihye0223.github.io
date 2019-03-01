$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".slidevs1").not(":animated").animate({"margin-left":"-760px"}, 800, function(){
            $(".slidevs1 li").eq(0).appendTo($(".slidevs1"));
            $(".slidevs1").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".slidevs1 li").eq(2).prependTo($(".slidevs1"));
        $(".slidevs1").css("margin-left", "-760px");
        $(".slidevs1").not(":animated").animate({"margin-left":"0px"}, 800);
    }
    $(".nextFr").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".prevFr").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".popOpenBtn").click(function(){
       $(".popBox").fadeIn(); 
    });
    $(".closeBtn").click(function(){
       $(".popBox").fadeOut(); 
    });
});