import '../css/registered.scss';

const util = require('./common/util');

let action = util.GetQueryString("action")
if(action == "login"){
	$(".login").show()
}else{
	$(".registered").show()
}
$("html, body").animate({
	"scrollTop": 600
},500)

let $mobile = $("#mobile"),
	$yzm = $("#yzm"),
	$yzmBtn = $(".yzm"),
	$emial = $("#emial"),
	$password = $("#password"),
	$cfPassword = $("#cfPassword"),
	$signName = $("#signName"),
	$signPasswd = $("#signPasswd");
window.timeFlag = true;
function bindEnds(){
	let $main = $(".main");
	$("#registered").on("click", ".buttom", function(){
		let $error = $(this).prev("P");
		let $mobileVal = $mobile.val(),
			$yzmVal = $yzm.val(),
			$emialVal = $emial.val(),
			$passwordVal = $password.val(),
			$cfPasswordVal = $cfPassword.val();
		if(util.isEmpty($mobileVal) || !util.regArr.phone.test($mobileVal)){
			$error.html("手机号错误");
			return;
		}
		if(util.isEmpty($yzmVal)){
			$error.html("验证码错误");
			return;
		}
		if(util.isEmpty($emialVal) || !util.regArr.emial.test($emialVal)){
			$error.html("邮箱错误");
			return;
		}
		if(util.isEmpty($passwordVal)){
			$error.html("请输入密码");
			return;
		}
		if(util.isEmpty($cfPasswordVal)){
			$error.html("请再次输入密码");
			return;
		}
		if($passwordVal != $cfPasswordVal){
			$error.html("两次密码不一致")
			return
		}
		$.ajax({
			type: "post",
			url: "http://47.105.47.69:8080/run2442/pro1/reg",
			data: {
				phone: $mobileVal,
				yzm: $yzmVal,
				email: $emialVal,
				password: $passwordVal
			},
			dataType: "jsonp",
			jsonp: "callback",
			cache: false,
			success: function(res) {
				console.log(res)
				// if(res[0].message == "验证码错误"){
					
				// }
				$error.html(res[0].message)
			}
		});
	})
	$("#login").on("click", ".buttom", function(){
		let $error = $(this).prev("P");
		let $signNameVal = $signName.val(),
			$signPasswdVal = $signPasswd.val();
		if(util.isEmpty($signNameVal) || util.isEmpty($signPasswdVal)){
			$error.html("账号或者密码为空");
			return;
		}
		let data = {}
		if(!util.regArr.emial.test($signNameVal)){
			data = {
				phone: $signNameVal,
				password: $signPasswdVal
			}
		}else{
			data = {
				email: $signNameVal,
				password: $signPasswdVal
			}
		}
		$.ajax({
			type: "post",
			url: "http://47.105.47.69:8080/run2442/pro1/login",
			data: data,
			dataType: "jsonp",
			jsonp: "callback",
			cache: false,
			success: function(res) {
				console.log(res)
			}
		});		
	})
	$main.on("click", ".yzm", function(){
		let $error = $(this).parent("div").nextAll(".error");
		let $mobileVal = $mobile.val(),
			$yzmVal = $yzm.val();
		if(timeFlag){
			if(util.isEmpty($mobileVal) || !util.regArr.phone.test($mobileVal)){
				$error.html("手机号错误");
				return;
			}
			$.ajax({
				type: "post",
				url: "http://47.105.47.69:8080/run2442/pro1/yzm",
				data: {
					phone: $mobileVal
				},
				dataType: "jsonp",
				jsonp: "callback",
				cache: false,
				success: function(res) {
					console.log(res)
					if(res[0].message == "发送成功"){
						util.time($yzmBtn);
						timeFlag = false
					}
					$error.html(res[0].message);
				}
			});
		}
		
	})
	$main.on("click", "input", function(){
		$(".error").html('')
	})
}

function init(){
	bindEnds();
}
init()