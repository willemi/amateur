import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

let util = {};
util.isEmpty = (str) => {
	str = $.trim(str);
	return (str === '' || typeof(str) === 'undefined' || str === null || str === 'null') ? true : false;
}
if (window.console) {
	let log = window.console.log;
	window.console.log = process.env.NODE_ENV == 'production' ? () => {} : log
}
util.GetQueryString = (name) => {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
util.regArr = {
	phone: /^1([38][0-9]{9}|(4[57]|5[0-35-9])[0-9]{8})$/,
	emial: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
	password: /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/
}
util.time = (element) => {//验证码倒计时
	var second = 60;
	element.addClass("btngrey");
	element.text(second+"s");
	let timeInterval = setInterval(function(){
		second--;
		element.text(second+'s');
		if(second <= 0){
			timeFlag = true;
			element.removeClass("btngrey");
			element.text('获取验证码');
			clearInterval(timeInterval);
		}
	}, 1000);
}
function bindEvents(){
	var $doc = $(document);
	let $fixed = $(".fixed");
	$doc.on("click", ".go-top", function(){
		$("html, body").animate({
			"scrollTop": 0
		},500)
	})
	$(window).on("scroll load", function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 100){
			$fixed.show();
		}else{
			$fixed.hide()
		}
	});
}

util.init = () => {
	bindEvents();
}
util.init();
module.exports = util