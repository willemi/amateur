import '../css/goSignUp.scss';
const util = require('./common/util');

let $error = $(".error");

function bindEnds(){
	let $main = $(".main");
	$main.on("click", ".btn-cj-02", function(){
		let $c_name = $("#c_name").val(),
			$c_telphone = $("#c_telphone").val(),
			$c_address = $("#c_address").val(),
			$c_weichat = $("#c_weichat").val(),
			$group_name = $("#group_name").val(),
			$group_local = $("#group_local").val(),
			$group_num = $("#group_num").val(),
			$group_intr = $("#group_intr").val(),
			$group_slogan = $("#group_slogan").val();
		if(util.isEmpty($c_name) || util.isEmpty($c_telphone) || util.isEmpty($c_address) || util.isEmpty($c_weichat) || util.isEmpty($group_name) || util.isEmpty($group_local) || util.isEmpty($group_num) || util.isEmpty($group_intr) || util.isEmpty($group_slogan)){
			$error.html("请认真填写!")
		}else{
			let data = {
				c_name: $c_name,
				c_telphone: $c_telphone,
				c_address: $c_address,
				c_weichat: $c_weichat,
				group_name: $group_name,
				group_local: $group_local,
				group_num: $group_num,
				group_intr: $group_intr,
				group_slogan: $group_slogan
			}
			$.ajax({
				type: "post",
				url: "http://47.105.47.69:8080/run2442/pro1/regCaptain",
				data: data,
				dataType: "jsonp",
				jsonp: "callback",
				cache: false,
				success: function(res) {
					// if(res[0].Message == "OK"){
						
					// }
					util.showMsg(res[0].Message)
				},
				error: function(){
					util.showMsg("失败！")
				}
			});
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