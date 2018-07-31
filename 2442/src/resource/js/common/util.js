import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const bootstrapPaginator = require("./bootstrap-paginator.js");

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
util.pageinator = (cont, page, totalP, tplData) => {
	var $cont = $("#"+ cont);
	$cont.bootstrapPaginator({    
		currentPage: page,//当前页码
		totalPages: totalP,//总页码
		size:"normal",
		bootstrapMajorVersion: 3,//bootstrap版本
		alignment:"right",
		numberOfPages:5,//一页显示几个按钮
		itemTexts: function(type, page, current){
			switch (type){ 
				case "first": return "首页";
				case "prev": return "上一页";
				case "next": return "下一页";
				case "last": return "末页";
				case "page": return page;
			}
		},
		onPageClicked: function(event, originalEvent, type, page){
			tplData(page)
		}
	});
}
util.regArr = {
	phone: /^1([38][0-9]{9}|(4[57]|5[0-35-9])[0-9]{8})$/,
	emial: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
	password: /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/
}
util.Cookie = {
	get: function(key) {
		try {
			var doc = document,
			a, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
			if (a = doc.cookie.match(reg)) {
				return unescape(a[2]);
			} else {
				return "";
			}
		} catch (e) {
		return "";
		}
	},
	set: function(key, val, options) {
		options = options || {};
		var expires = options.expires;
		var doc = document;
		if (typeof(expires) === "number") {
			expires = new Date();
			expires.setTime(expires.getTime() + options.expires);
		}

		try {
			doc.cookie =
			key + "=" + escape(val) + (expires ? ";expires=" + expires.toGMTString() : "") + (options.path ? ";path=" + options.path : "") + (options.domain ? "; domain=" + options.domain : "");
		} catch (e) {}
	}
};

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
//提示弹框
let msgTimer = null;
util.showMsg = (msg) => {
	let $tip = $('.messages');
	$tip.html(msg).show();
	clearTimeout(msgTimer);
	msgTimer = setTimeout(() => {
		$tip.hide();
		clearTimeout(msgTimer);
	},2e3)
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