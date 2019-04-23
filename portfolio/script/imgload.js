$(document).ready(function(){
        var hei = $(".viewbox").height();
        var cnt = $(".generbox").length - 1;
        var intv = setInterval(function(){ nextAni(); }, 10000);
        
        function nextAni(){
               $(".collection").not(":animated").animate({"margin-top":-hei+"px"}, 3000, function(){
                   $(".generbox").eq(0).appendTo($(".collection"));
                   $(".collection").css("margin-top", "0px");
                   $(".numBtnFrame li").eq(0).appendTo($(".numBtnFrame"));
                   $(".numBtnFrame li button").removeClass("on");
                   $(".numBtnFrame li").eq(0).find("button").addClass("on");
               }); 
        }
        function prevAni(){
               $(".generbox").eq(cnt).prependTo($(".collection"));
               $(".collection").css("margin-top", -hei+"px");
               $(".collection").not(":animated").animate({"margin-top":"0px"}, 1000, function(){
                   $(".numBtnFrame li").eq(cnt).prependTo($(".numBtnFrame"));
                   $(".numBtnFrame li button").removeClass("on");
                   $(".numBtnFrame li").eq(0).find("button").addClass("on");
               }); 
        }
        $(".btn.top").click(function(){
            clearInterval(intv);
            prevAni();
            intv = setInterval(function(){ nextAni(); }, 5000);
        });
        $(".btn.bottom").click(function(){
            clearInterval(intv);
            nextAni();
            intv = setInterval(function(){ nextAni(); }, 5000);
        });
    });