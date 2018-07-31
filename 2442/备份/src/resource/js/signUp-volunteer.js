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
			if($check.prop("checked")){
				nextBtn($this, $step);
			}else{
				$preError.html("请阅读官方比赛规则！");
				return
			}
		}
		if($this.hasClass("btn-03-go")){
			let $nameVal = $("#name").val(),
				$sexVal = $("#sex").val(),
				$birthdayVal = $("#birthday").val(),
				$countryVal = $("#country").val(),
				$typeVal = $("#type").val(),
				$numberVal = $("#number").val(),
				$phoneVal = $("#phone").val(),
				$sizeVal = $("#size").val(),
				$mailboxVal = $("#mailbox").val(),
				$addressVal = $("#address").val(),
				$urgentVal = $("#urgent").val(),
				$relationshipVal = $("#relationship").val(),
				$telephoneVal = $("#telephone").val(),
				$anaphylaxisVal = $("#anaphylaxis").val(),
				$illnessVal = $("#illness").val(),
				$bloodVal = $("#blood").val(),
				$sfzgzyz = $("input[name='radio']:checked").val(),
				$jszyzjl = $("#jszyzjl").val(),
				$bmzyzgw = showArr("checkbox1");
			let data = {
				username: $nameVal,
				xb: $sexVal,
				shengri: $birthdayVal,
				gjdq: $countryVal,
				zjlx: $typeVal,
				zjhm: $numberVal,
				phone: $phoneVal,
				sycm: $sizeVal,
				email: $mailboxVal,
				adderss: $addressVal,
				jjlxr: $urgentVal,
				lxrgx: $relationshipVal,
				lxrphone: $telephoneVal,
				gmy: $anaphylaxisVal,
				jwbs: $illnessVal,
				xylx: $bloodVal,
				sfzgzyz: $sfzgzyz,
				jszyzjl: $jszyzjl,
				bmzyzgw: $bmzyzgw
			}
			$.ajax({
				type: "GET",
				url: "http://47.105.47.69:8080/run2442/pro1/regZyzxxb",
				data: data,
				dataType: "jsonp",
				jsonp: "callback",
				cache: false,
				success: function(res) {
					util.showMsg(res[0].Message)
					setTimeout(function(){
						nextBtn($this, $step);
					},2000)
				},
				error: function(){
					util.showMsg("失败！")
				}
			});
		}
		if($this.hasClass("btn-03")){
			if($check.prop("checked")){
				let num = 0, nub = 0;
				let $radioVal = $("input[name='radio']:checked").val(),
					$checkbox1Val = showArr("checkbox1");
				if(util.isEmpty($radioVal)){
					$preError.html("请认真填写！");
					return
				}else{					
					$(".radio-p").html($radioVal);					
				}
				if( util.isEmpty($checkbox1Val)){
					$preError.html("请认真填写！");
					return
				}else{					
					$(".checkbox-p").html($checkbox1Val);
				}
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
				if(num == nub && num > 0){
					$('.value').hide();
					$(".input .span-hide").hide();
					$(".input p").addClass("p-show");
					let $preP = $this.prev("span");
					$this.addClass("btn-03-go");
					$this.html("下一步")
					$preP.addClass("btn-03-pre");
					$preP.html("修改")
				}
				
				
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
		if($this.hasClass("btn-03-pre")){
			$('.value').show();
			$(".input .span-hide").show();
			$(".input p").removeClass("p-show");
			let $preN = $this.next("span");
			$this.removeClass("btn-03-pre");
			$this.html("返回")
			$preN.removeClass("btn-03-go");
			$preN.html("确认报名")
		}else{
			preBtn($this, $step);
		}
		
	})
	$main.on("click", "input", function(){
		$error.html('')
	})
	$main.on("change", ".payment p", function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
}
function showArr(name){
	let obj = document.getElementsByName(name) || "";
	let check_val = '';
	for(let k in obj){
		if(obj[k].checked)
		check_val = check_val + obj[k].value + ",";
	}
	return check_val.slice(0,-1);
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