import '../css/goSignUp.scss';
const util = require('./common/util');

let $error = $(".error");
function bindEnds(){
	let $main = $(".main");
	$main.on("click", ".btn-click span", function(){
		let $this = $(this);
		let $check = $this.parent("div.btn-click").prevAll(".checkbox").find("input");
		let $preError = $this.parent("div.btn-click").prev(".error");
		if($check.prop("checked")){

		}else{
			$preError.html("请阅读官方比赛规则！");
			return
		}
		if($this.hasClass("btn-03")){
			let num = 0, nub = 0;;
			$('.value').each(function() {
				let me = $(this);
				let $p = me.next("p");
				let $val = me.val();
				nub++;
				if(util.isEmpty($val)){
					$preError.html("请认真填写！");
					return
				}else{
					num++;
					$p.html($val);
				}
			})
			if(num == nub){
				$('.value').hide();
				$(".input p").addClass("p-show");
			}
		}
	})
	$main.on("click", "input", function(){
		$error.html('')
	})
}
function init(){
	bindEnds();
}
init()