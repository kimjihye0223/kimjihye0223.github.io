$(document).ready(function(){
    $(".tabBox li").click(function(){
        var idx =$(this).index();
        $(".tabBox li button").removeClass("on");
        $(this).find("button").addClass("on");
        $(".tabBox .tabItem").removeClass("on");
        $(".tabBox .tabItem").eq(idx).addClass("on");
    });
});