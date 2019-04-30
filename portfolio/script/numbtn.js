$(function(){
    var v_hei = $(".viewbox").height();
        $(".numBtnFrame li").click(function(){
            var frm = parseInt($(this).attr("data-val"));
        $(".generbox").not(":animated").animate({"margin-top" : frm*v_hei+"px" }, 1200);
        $(".generbox").eq(frm).appendTo($(".collection"));
        $(".collection").css("margint-top", "0px");
        $(".numBtnFrame li").eq(frm).appendTo($(".numBtnFrame"));
        $(".numBtnFrame li button").removeClass("on");
        $(".numBtnFrame li[data-val]").eq(frm).addClass("on");
        });
        $(".generbox").each(function(index){
            $(this).attr("data-page",v_hei*index);
        });
});