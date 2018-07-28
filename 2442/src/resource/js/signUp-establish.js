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
	$main.on("change", ".payment p", function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	let $yamFixed = $(".yam-fixed");
	let $fixed = $(".fixed-div");
	let $yamFixedCg = $(".yam-fixed-cg");
	$main.on("click", ".btn-cj-01", function(){
		$(".step-01-01").hide();
		$(".step-01-02").show();
	})
	$main.on("click", ".btn-cj-02", function(){
		$yamFixedCg.show();
	})
	$main.on("click", ".a-close", function(){
		$fixed.hide();
		$yamFixed.find("input").val('')
	})

	//上传图片
	var arr = [];
	$(".file").on("change", ".filepath", function() {
		var $this = $(this);
		var $img = $this.siblings('.img');
		var thisValue = $this.val();   
		var fileV = this.files[0];
		var imgFize = (fileV.size / 1024 / 1024).toFixed(2);
		if(imgFize > 5){
			alert("图片尺寸不能超过5mb")
			return false;
		}
		var index = thisValue.lastIndexOf(".");  
		var str = thisValue.substring(index + 1, thisValue.length);
		str = str.toLowerCase();
		if(str != 'png' && str != 'jpg' && str != 'jpeg' && str != 'gif'){
			return false;
		} 
		var srcs = getObjectURL(fileV); //获取路径
		$img.attr('src', srcs);
	})
}

function getObjectURL(file) {
	var url = null;
	if (window.createObjectURL != undefined) {
		url = window.createObjectURL(file)
	} else if (window.URL != undefined) {
		url = window.URL.createObjectURL(file)
	} else if (window.webkitURL != undefined) {
		url = window.webkitURL.createObjectURL(file)
	}
	return url
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