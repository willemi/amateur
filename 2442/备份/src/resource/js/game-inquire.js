import '../css/game-content.scss';

import '../css/swiper.min.css';
const Swiper = require('../js/common/swiper.min');

var $excellent = $(".excellent"),
	obj = $excellent.find("ul");
var $btnl = $(".btn-pre"),
	$btnr = $(".btn-next");
	
const util = require('./common/util');
var swiper = new Swiper('.swiper-container',{
	//autoplay:3000,
	speed:1000,
	autoplayDisableOnInteraction : false,
	loop:true,
	centeredSlides : true,
	slidesPerView:2,
	prevButton:'.s-button-prev',
	nextButton:'.s-button-next',
	onInit:function(swiper){
		swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
	}
});
function bindEnds(){
	//播放\暂停
	let $video = $(".video");
	$video.on('click', '.button', function() {
		let videos = document.getElementsByTagName('video');
		for (let i = 0; i < videos.length; i ++) {
			let video = videos[i];
			if (!video.paused) {
				videoPause(video);
				break;
			}
		}
	})
	$video.on('click', '.control', function() {
		var $this = $(this);
		var $videoUi = $this.parent(".video-ui"),
			$video = $videoUi.nextAll("video").get(0);	
		if($video.paused) {
			let videos = document.getElementsByTagName('video');
			for (let i = 0; i < videos.length; i ++) {
				let video = videos[i];
				if (!video.paused) {
					videoPause(video);
					break;
				}
			}
			$video.play();			
		}else {
			$video.pause();
		}
		return false;
	});
	//静音
	$video.on('click', '.muted', function() {
		var $this = $(this);
		var $videoUi = $this.parents(".video-ui"),
			$video = $videoUi.nextAll("video").get(0),
			$volume = $videoUi.find(".volume");
		var volume = $video.volume * 100;
		if($video.muted){
			$this.removeClass("pause");
		}else{
			$this.addClass("pause");
		}
		$video.muted = !$video.muted;
		return false;
	});
	$video.on("click", ".playBtn", function(){
		let $this = $(this);
		let videoN = $this.nextAll("video"),
			$load = $this.nextAll("p");
		$this.hide();
		let videoGet = videoN.get(0);

		let videos = document.getElementsByTagName('video');
		for (let i = 0; i < videos.length; i ++) {
			let video = videos[i];
			if (!video.paused) {
				videoPause(video);
				break;
			}
		}

		videoGet.onwaiting = function(){
			$load.show();
			//console.log("onwaiting")
		}
		videoGet.oncanplaythrough = function(){
			$load.hide();
			//console.log("onplaying")
		}
		videoGet.play().catch(function (e) {
			//console.log(e);
		});	
	})
}
//video监听
window.onVideoPause = function(e) {	
	e.previousElementSibling.firstChild.nextElementSibling.className = "control paused"
}
window.onVideoEnded = function(e){
}
window.onVideoPlay = function(e) {
	e.previousElementSibling.firstChild.nextElementSibling.className = "control play";
	console.log(e.previousElementSibling.firstChild.nextElementSibling)
	initVideo(e)
}
//视频事件
function initVideo($video){
	if($video.className == "show"){return}
	$video.addEventListener('loadedmetadata', function() {
		var $this = $(this),
			$thisGet = $this.get(0),
			$videoUi = $this.prevAll(".video-ui"),
			$playTime = $videoUi.find(".play-time");
		var time = sec_to_time(Math.ceil($thisGet.duration));
		$playTime.text(time)
	});
	$video.addEventListener('timeupdate', function() {
		var $this = $(this),
			$thisGet = $this.get(0);
		var $videoUi = $this.prevAll(".video-ui"),
			$control = $videoUi.find(".control"),
			$timeBar = $videoUi.find(".timeBar"),
			$progressBar = $videoUi.find(".progressBar"),
			$playTime = $videoUi.find(".play-time");
		var currentPos = $thisGet.currentTime, //Get currenttime
			maxduration = $thisGet.duration, //Get video duration
			percentage = 100 * currentPos / maxduration; //in %
		$timeBar.css('width', percentage +'%');
		var a = maxduration - currentPos;
		$playTime.text(sec_to_time(Math.ceil(a)))
		if(percentage == 100){
			$control.addClass("paused");
		}
		progress($this, $thisGet, $progressBar, $timeBar);
	});	
	$video.className = "show"
}
//update Progress Bar control
var updatebar = function(x, $thisGet, $progressBar, $timeBar) {
	//if($this.attr("src") !== ""){
		var maxduration = $thisGet.duration; //Video duraiton
		var position = x - $progressBar.offset().left; //Click pos
		var percentage = 100 * position / $progressBar.width();
		//Check within range
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
		//Update progress bar and video currenttime
		$timeBar.css('width', percentage+'%');			
		$thisGet.currentTime = maxduration * percentage / 100;
	//}			
};
//视频进度
function progress($this, $thisGet, $progressBar, $timeBar){	
	var timeDrag = false;   /* Drag status */
	$progressBar.mousedown(function(e) {
		timeDrag = true;
		updatebar(e.pageX, $thisGet, $progressBar, $timeBar);
	});
	$(document).mouseup(function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX, $thisGet, $progressBar, $timeBar);
		}
	});
	$(document).mousemove(function(e) {
		if(timeDrag) {
			updatebar(e.pageX, $thisGet, $progressBar, $timeBar);
		}
	});	
}
function stopCount(){
	clearTimeout(window.timed)
}
//暂停处理
function videoPause(video) {
	if (!video) return;
	video.nextElementSibling.style.display = 'none';
	video.pause();
}
//元素位置
function objFun(video){
	let height = video.clientHeight,
		top = video.getBoundingClientRect().top;
	return {"height": height, "top": top}
}
//时间格式
function sec_to_time(sec) {
	var time = '';
	if(sec > -1){
		var hour = Math.floor(sec/3600),
			min = Math.floor(sec/60) % 60,
			sec = sec % 60;
		// if(hour < 10) {
		// 	time = '0'+ hour + ":";
		// } else {
		// 	time = hour + ":";
		// }

		if(min < 10){time += "0";}
			time += min + ":";
		if(sec < 10){time += "0";}
			time += sec;
	}
	return time;
}

function morePic() {
	obj.css({ width: obj.find("li").length * (340 + 20) + "px" });
}
var numwidth = (340 + 20) * 1;
$btnl.on("click", function() {
	if (!(obj.is(":animated"))) {
		var lefts = parseInt(obj.css("left").slice(0, -2));
		if (lefts < 0) {
			obj.animate({ left: lefts + numwidth }, 500);
		}
	}
})
$btnr.on("click", function() {
	var objcds = -((Math.ceil(obj.find("li").length / 3) - 2) * numwidth);
	if (!(obj.is(":animated"))) {
		var lefts = parseInt(obj.css("left").slice(0, -2));
		if (lefts >= objcds) {
			obj.animate({ left: lefts - numwidth }, 500);			
		}
	}
})




function init(){
	morePic()
	bindEnds();
}
init()