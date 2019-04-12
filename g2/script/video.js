var tag = document.createElement('script');
tag.src = "https://www.youtube.com/ifame_api";
var firstSciptTag = document.getElementsByTagName('script')[0];
firstSciptTag.parentNode.insertBefore(tag, firstSciptTag);

var youtubeOnReady =false;
var youtubePromise =new Promise(function(resolve, reject){
    var checkOnReady = function(){
        setTimeout(function(){
            if(youtubeOnReady){
                resolve();
            } else {
                checkOnReady();
            }
        }, 500);
    };
    checkOnReady();
});

var typekitPromise = new Promise(function(resolve, reject) { Typekit.load({ async: true, active: function() { resolve(); } }); });
var jQueryPromise = new Promise(function(resolve, reject) { $(function(){ resolve(); }); });
var $publicOptions = {
	duration: 500,
	easing: "(0, .7, 0.34, 1)",
	queue: "",
	loop: false,
	delay: false
};
var positionMove = false, clickState = true;

Promise.all([typekitPromise, jQueryPromise, youtubePromise]).then(function(values){
	init();
});

function onYouTubeIframeAPIReady(){
	youtubePlayer = new YT.Player('youtubeVideo', {
		height: '532',
		width: '944',
		videoId: '4ARDccns-Bc',
		playerVars: {
			rel: 0,
			loop: 1,
			showinfo: 0,
			autohide: 1,
			modestbranding: 0,
			vq: 'hd1080'
		},
		events: {
			onReady: function(){
				youtubeOnReady = true;
			}
		}
	});
}