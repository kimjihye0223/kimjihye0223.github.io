$(document).ready(function(){
        var hei = $(".viewbox").height();
        var cnt = $(".generbox").length - 1;
        var intv = setInterval(function(){ nextAni(); }, 10000);
        
        function nextAni(){
               $(".collection").not(":animated").animate({"margin-top":-hei+"px"}, 800, function(){
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
               $(".collection").not(":animated").animate({"margin-top":"0px"}, 800, function(){
                   $(".numBtnFrame li").eq(cnt).prependTo($(".numBtnFrame"));
                   $(".numBtnFrame li button").removeClass("on");
                   $(".numBtnFrame li").eq(0).find("button").addClass("on");
               }); 
        }
        $(".btn.top").click(function(){ //버튼 이동
            clearInterval(intv);
            prevAni();
            intv = setInterval(function(){ nextAni(); }, 5000);
        });
        $(".btn.bottom").click(function(){
            clearInterval(intv);
            nextAni();
            intv = setInterval(function(){ nextAni(); }, 5000);
        });
        $(".numBtnFrame li").click(function(){ //썸네일 버튼 이동
            clearInterval(intv);
            var act = $(this).index()-1;
            console.log(act);
            for(var i=0;i<act;i++){
                $(".collection .generbox").eq(0).appendTo($(".collection"));  
                $(".numBtnFrame li").eq(0).appendTo($(".numBtnFrame"));
            }
            nextAni();
            intv = setInterval(function(){ nextAni(); }, 5000);
        });
    });