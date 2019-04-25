$(document).ready(function(){
        var hei = $(".viewboxm").height();
        var cnt = $(".generboxm").length - 1;
        var intv = setInterval(function(){ nextAni(); }, 10000);
        
        function nextAni(){
               $(".collectionm").not(":animated").animate({"margin-top":-hei+"px"}, 800, function(){
                   $(".generboxm").eq(0).appendTo($(".collectionm"));
                   $(".collectionm").css("margin-top", "0px");
                   $(".numBtnFramem li").eq(0).appendTo($(".numBtnFramem"));
                   $(".numBtnFramem li button").removeClass("on");
                   $(".numBtnFramem li").eq(0).find("button").addClass("on");
               }); 
        }
        function prevAni(){
               $(".generboxm").eq(cnt).prependTo($(".collectionm"));
               $(".collectionm").css("margin-top", -hei+"px");
               $(".collectionm").not(":animated").animate({"margin-top":"0px"}, 800, function(){
                   $(".numBtnFramem li").eq(cnt).prependTo($(".numBtnFrame"));
                   $(".numBtnFramem li button").removeClass("on");
                   $(".numBtnFramem li").eq(0).find("button").addClass("on");
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