import '../css/goSignUp.scss';
const util = require('./common/util');

let $error = $(".error");
// function optionMid(){
// 	//mid
// 	var cookieMid = utils.Cookie.get('user_mid');
// 	var userMid;
// 	if(window.mid){
// 		userMid = window.mid
// 	}else{
// 		if(cookieMid){
// 			userMid = cookieMid
// 		}else{
// 			userMid = hex_md5(Date.now() + RndNum(5));
// 			utils.Cookie.set('user_mid', userMid, {
// 				expires: 1000 * 60 * 60 * 24 * 365
// 			});
// 		}
// 	}
// 	return userMid
// }

let formData = new FormData();


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
		if($this.hasClass("btn-03-go")){
			let $nameVal = $("#name").val(),
				$achievementVal = $("#achievement").val(),
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
				$commodityVal = showArr("commodity");
			let data = {
				username: $nameVal,
				zhcj1km: $achievementVal,
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
				xylx: $bloodVal
				//111: $commodityVal
			}
			$.ajax({
				type: "GET",
				url: "http://47.105.47.69:8080/run2442/pro1/regGrxxb",
				data: data,
				dataType: "jsonp",
				jsonp: "callback",
				cache: false,
				success: function(res) {
					util.showMsg(res[0].Message)
					if(res.Message == "OK"){
						setTimeout(function(){
							nextBtn($this, $step);
						},2000)
					}
				},
				error: function(){
					util.showMsg("失败！")
				}
			});
		}
		if($this.hasClass("btn-03")){
			if($check.prop("checked")){
				let num = 0, nub = 0;
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
		let $zjptname = $("#zjptname").val(),
			$zlld = $("#zlld").val(),
			$zlkh = $("#zlkh").val(),
			$tzname = $("#tzname").val(),
			$lxemail = $("#lxemail").val(),
			$lxphone = $("#lxphone").val(),
			$ptzp = $("#ptzp").val(),
			$ptjs = $("#ptjs").val(),
			$password = $("#password").val();

		formData.append("zjptname", $zjptname);
		formData.append("zlld", $zlld);
		formData.append("zlkh", $zlkh);
		formData.append("tzname", $tzname);
		formData.append("lxemail", $lxemail);
		formData.append("lxphone", $lxphone);
		formData.append("ptzp", $ptzp);
		formData.append("ptjs", $ptjs);
		formData.append("password", $password);
		// var xhr = new XMLHttpRequest();
		// xhr.open("post","http://47.105.47.69:8080/run2442/pro1/regDwxxb");
		// xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		// xhr.send(formData);
		// let data = {
		// 	zjptname: $zjptname,
		// 	zlld: $zlld,
		// 	zlkh: $zlkh,
		// 	tzname: $tzname,
		// 	lxemail: $lxemail,
		// 	lxphone: $lxphone,
		// 	ptzp: $ptzp,
		// 	ptjs: $ptjs,
		// 	password: $password
		// }
		$.ajax({
			type: "post",
			url: "http://47.105.47.69:8080/run2442/pro1/regDwxxb",
			data: formData,
			dataType: "json",
			cache: false,
			contentType: false, // 必须 不设置内容类型
			processData: false, // 必须 不处理数据
			success: function(res) {
				if(res[0].Message == "OK"){
					$(".zdName").text($zjptname);
					//$(".zdId").text();
					$yamFixedCg.show();
					$(".btn-01").show();
					//util.showMsg(res[0].Message)
				}else{
					util.showMsg("创建失败！")
				}
			},
			error: function(){
				util.showMsg("失败！")
			}
		});		
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