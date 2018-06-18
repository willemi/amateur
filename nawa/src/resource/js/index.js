import '../css/index.scss';

const util = require('./common/util');
let $section1 = $(".section1");
function bindEnds(){
	let $doc = $(document);
	setTimeout(function(){
		$("header").hide();
		$section1.animate({
			"height": 0
		},1500)
	},5000)
	var s = document.getElementsByClassName("waper");
	document.addEventListener && document.addEventListener("scroll", function(a) {
		fixModule(s)
	}),
	document.addEventListener && document.addEventListener("DOMMouseScroll", function(a) {
		fixModule(s)
	}, !1);
	$doc.on("click", ".playBtn", function(){
		let $this = $(this),
			$video = $this.next("video").get(0);

		if($video.paused){
			$this.hide();
			$video.play();
		}
	})
}
//background
function fixModule(t) {
	for (var a = $(window).scrollTop(), s = document.documentElement.clientHeight, e = 0; e < t.length - 1; e++) {
		var i = t[e].offsetTop - 50;
		if (a + s >= i && a + s < i + s + 640) {
			var n = 160 / (i + s + 640)
			  , r = n * (a + s - i);
			$(t[e]).css("background-position", "center " + (80 - r) + "px")
		}
	}
}
function init(){
	let windowH = $(window).height();
	$section1.height(windowH);
	setTimeout(function(){
		$(".totalTit").addClass("active");
	},500)
	bindEnds();
}
init()