import '../css/goSignUp.scss';
const util = require('./common/util');

let $error = $(".error");
function bindEnds(){
	let $main = $(".main");

	let $step = $(".step li");
	$main.on("click", ".next-step", function(){
		let $this = $(this);
		let $check = $this.parent("div.btn-click").prevAll(".checkbox").find("input");
		let $preError = $this.parent("div.btn-click").prev(".error");
		
		if($this.hasClass("btn-01")){
			nextBtn($this, $step);
		}
		if($this.hasClass("btn-02")){
			if($check.prop("checked")){
				nextBtn($this, $step);
			}else{
				$preError.html("请阅读官方比赛规则！");
				return
			}
		}
		if($this.hasClass("btn-03")){
			if($check.prop("checked")){
				nextBtn($this, $step);
			}else{
				$preError.html("请阅读用户服务条款！");
				return
			}
		}
		if($this.hasClass("btn-04")){
			nextBtn($this, $step);
		}
	})
	$main.on("click", ".pre-step", function(){
		let $this = $(this);		
		preBtn($this, $step);
		
	})
	let $yamFixed = $(".yam-fixed");
	$main.on("click", ".btn-go", function(){
		$yamFixed.show();
	})
	$main.on("click", ".a-close", function(){
		$yamFixed.hide();
		$yamFixed.find("input").val('')
	})
	$main.on("change", ".payment p", function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
}


//下一步
function nextBtn(me, $li){
	let $main = me.parents(".step-cont"),
	$nextMain = $main.next(".step-cont");
	let index = $main.index();
	$li.eq(++index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$nextMain.show();
}
//上一步
function preBtn(me, $li){
	let $main = me.parents(".step-cont"),
	$pretMain = $main.prev(".step-cont");
	let index = $main.index();
	$li.eq(--index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$pretMain.show();
}



function init(){
	bindEnds();
}
init()