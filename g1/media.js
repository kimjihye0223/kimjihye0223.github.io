//navigator.appCodeName : 웹브라우저 코드이름
//navigator.appName : 웹브라우저 이름
//navigator.appVersion : 웹브라우저 버전
//navigator.cookieEnabled : 웹브라우저 쿠키 사용 가능 유무
//navigator.language : 웹브라우저 언어
//navigator.onLine : 사용자 온라인 상태 여부
//navigator.platform : 플랫폼
//navigator.userAgent : 브라우저 구분값(웹브라우저 이름 전체)

//데스크탑을 통한 사이트 접속 체크
//var filter = "win16|win32|win64|mac";
//if(navigator.platform){
//    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
//        window.location.href = "mobile.html";
//    } else {
//        window.location.href = "index.html";
//    }
//}

//모바일을 통한 사이트 접속 체크
//function mobile() {
//    var ck=false;
//    var mobileArr = new Array("iPhone", "iPod", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "SonyEricsson");
//    for(var txt in mobileArr){
//        if(navigator.userAgent.match(mobileArr[txt]) != null){
//            ck=true;
//        }
//    }
//    return ck;
//}
//if(mobile()){
//    window.location.href = "mobile.html";
//} else {
//    window.location.href = "index.html";
//}

//모바일을 통한 사이트 접속 체크2
//var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windowsce|palm/i.test(navigator.userAgent.toLowerCase()));
//if (mobile) {
//    window.location.href = "mobile.html";
//} else {
//    window.location.href = "index.html";
//}

//브라우저의 접속 종류 체크
//var browser = navigator.userAgent.toLowerCase();
//if(-1 != browser.indexOf("chrome")){
//    alert("chrome");
//}
//if(-1 != browser.indexOf("msie")){
//    alert("msie");
//}
//if(-1 != browser.indexOf("opera")){
//    alert("opera");
//}