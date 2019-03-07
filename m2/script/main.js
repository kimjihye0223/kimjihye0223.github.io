    $(document).ready(function(){
        var wd = parseInt($(".vsFrm").width());
        function nextAni(){
            $(".slideFrm").not(":animated").animate({"margin-left":-wd+"px"}, 600, function(){
                $(".slideFrm li").removeClass("on");
                $(".slideFrm li").eq(0).appendTo($(".slideFrm "));
                $(".slideFrm").css("margin-left", "0px");
                $(".slideFrm li").eq(0).addClass("on");
                $(".btFrm li").eq(0).appendTo($(".btFrm"));
                $(".btFrm li label").removeClass("on");
                $(".btFrm li").eq(0).find("label").addClass("on");
            });
        }
        var intv = setInterval(function(){
            nextAni();
        }, 3200); 
        
        var loadingToSplash = setTimeout(function(){
            loadSplash();
        }, 1000);
        
        function loadSplash(){
            $("#splash").animate({"opacity":"0", "left": "-101%"}, 600, function(){
                $("#splach").fadeOut();
            });
        }
    });    