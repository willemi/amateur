import '../css/goSignUp.scss';
const util = require('./common/util');

const itemZdListTpl = require('../tpl/item-zd-list-tpl.tpl');

let $error = $(".error");
let _iphone = util.Cookie.get('_iphone');

let $zdId;

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
			if($check.prop("checked")){//展示队长信息
				$.ajax({
					type: "GET",
					url: "http://47.105.47.69:8080/run2442/pro1/getGrxxb",
					data: {
						dwxxbid: $dwxxbidVal
					},
					dataType: "jsonp",
					jsonp: "callback",
					cache: false,
					success: function(res) {
						if(res.Message == "OK" && res.data.length != 0){
							$(".htn-list").html(itemZdListTpl(res.data));

							nextBtn($this, $step);
						}else{
							
						}
					},
					error: function(){
						util.showMsg("失败！")
					}
				});
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
		$zdId = $(this).data("id");
		$yamFixed.show();
	})
	$main.on("click", ".a-close", function(){
		$yamFixed.hide();
		$yamFixed.find("input").val('')
	})
	$main.on("change", ".payment p", function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$main.on("click", ".btn-ja", function(){
		$yqmVal = $("#yqm").val();
		if(util.isEmpty($yqmVal)){
			util.showMsg("请输入邀请码")
		}else{
			$.ajax({
				type: "GET",
				url: "http://47.105.47.69:8080/run2442/pro1/jrzd",
				data: {
					dwxxbid: $zdId,
					phone: _iphone,
					password: $yqmVal
				},
				dataType: "jsonp",
				jsonp: "callback",
				cache: false,
				success: function(res) {
					if(res.Message == "OK"){
						util.showMsg("加入成功!")
					}else{
						util.showMsg("无此邀请码!")
					}
				},
				error: function(){
					util.showMsg("失败！")
				}
			});
		}
	})
	$main.on("click", ".btn-saerch", function(){
		let $dwxxbid = $("#dwxxbid"),
			$dwxxbidVal = $dwxxbid.val();
		if(util.isEmpty($dwxxbidVal)){
			util.showMsg("请输入搜索信息")
		}else{
			$.ajax({
				type: "GET",
				url: "http://47.105.47.69:8080/run2442/pro1/getDwxxb",
				data: {
					param: $dwxxbidVal
				},
				dataType: "jsonp",
				jsonp: "callback",
				cache: false,
				success: function(res) {
					if(res.Message == "OK" && res.data.length != 0){
						$(".htn-list").html(itemZdListTpl(res.data));
					}else{
						util.showMsg("无此战队!")
					}
				},
				error: function(){
					util.showMsg("失败！")
				}
			});
		}
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