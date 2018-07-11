
import '../../css/bootstrap-datetimepicker.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './sidebar-menu';
import '../../css/sidebar-menu.css';
import '../../css/font-awesome.css';
$.sidebarMenu($('.sidebar-menu'))

const datetimepicker = require("./bootstrap-datetimepicker.min.js");
const moment = require('./bootstrap-datetimepicker.zh-CN.js');
const bootstrapPaginator = require("./bootstrap-paginator.js");
const easyUpload = require("./easyUpload.js")

let util = {};

if (window.console) {
	let log = window.console.log;
	window.console.log = process.env.NODE_ENV == 'production' ? () => {} : log
}
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
Date.prototype.Format = function(fmt) {
	fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
	if (this == 'Invalid Date') return '';
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};

util.isEmpty = (str) => {
	return (str === '' || typeof(str) === 'undefined' || str === null) ? true : false;
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
//times
util.options = {
	format: 'yyyy-mm-dd',
	minView:'month',
	language: 'zh-CN',
	autoclose:true,
	startDate:new Date()
};
util.timepicker = (cont) => {
	$("#"+ cont).datetimepicker(util.options);
}
//start-end
util.timepickerSection = (start, end) => {
	var $start = $("#"+ start),
		$end = $("#"+ end);
		$start.datetimepicker(util.options).on("click",function(){
			$start.datetimepicker("setEndDate",$end.val())
    });
    $end.datetimepicker(util.options).on("click",function(){
        $end.datetimepicker("setStartDate",$start.val())
	});
}
//pages
util.pageinator = (cont, totalP, url, tplData) => {
	var $cont = $("#"+ cont);
	$cont.bootstrapPaginator({    
		currentPage: 1,//当前页码
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
			console.log(page)
			// $.ajax({
			// 	url: '',
			// 	type: 'post',
			// 	data: {page: page},
			// 	dataType: 'json',
			// 	success: function (data) {
			// 		tplData(data);//处理成功返回的数据
			// 	}
			// });
		}
	});
}
//localStorage
util.storage = {
	get(key) {
		try {
			return JSON.parse(localStorage[key] || '{}');
		} catch (e) {
			return {};
		}
	},
	set(key, subkey, val) {
		var data = this.get(key);
		data[subkey] = val;
		this.setData(key, data);
	},
	setData(key, data) {
		localStorage[key] = JSON.stringify(data);
	}
};
util.fileFun = (url) => {
	let res;
	$("#easyContainer").easyUpload({
		allowFileTypes: '*.jpg;*.doc;*.pdf;*.png',//允许上传文件类型，格式';*.doc;*.pdf'
		allowFileSize: 100000,//允许上传文件大小(KB)
		selectText: '选择文件',//选择文件按钮文案
		multi: true,//是否允许多文件上传
		multiNum: 6,//多文件上传时允许的文件数
		showNote: true,//是否展示文件上传说明
		note: '提示：最多上传6个文件，支持格式为doc、pdf、jpg、png',//文件上传说明
		showPreview: false,//是否显示文件预览
		url: url,//上传文件地址
		fileName: 'file',//文件filename配置参数
		//文件filename以外的配置参数，格式：{key1:value1,key2:value2}
		// formParam: {
		// 	token: $.cookie('token_cookie')//不需要验证token时可以去掉
		// },
		timeout: 30000,//请求超时时间
		successFunc: function(res) {//上传成功回调函数
			console.log('成功回调', res);
			res = res;
		},
		errorFunc: function(res) {//上传失败回调函数
			console.log('失败回调', res);
			res = res;
		},
		deleteFunc: function(res) {//删除文件回调函数
			console.log('删除回调', res);
			res = res;
		}
	});	
	return res;
}
//sidbar
var $doc = $(document);
$doc.on("click", ".sid-li", function(e){
	var $this = $(this).parent("li");
    $this.addClass("active").siblings().removeClass("active height");
})
$doc.on("click", ".muen > li", function(e){
	var $this = $(this);
	$this.parents(".hassub").removeClass("active").addClass("height");
    $this.addClass("active").siblings().removeClass("active");
})
util.checkB = (me, name) =>{
	if(me.hasClass("cut")){
		$("input[name='"+ name +"']").removeAttr("checked");
		me.removeClass("cut")
	}else{
		$("input[name='"+ name +"']").attr("checked","true");
		me.addClass("cut")
	}
}
module.exports = util