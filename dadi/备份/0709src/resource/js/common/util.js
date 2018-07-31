
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
util.timepicker = (start, end) => {
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



$doc.on("click", ".sid-li", function(){
	var sider = $(this).data("sider");
	util.storage.set("sider", "sid1", sider);
	util.storage.set("sider", "sid2", "");
	util.storage.set("sider", "sid3", "");
})
$doc.on("click", ".nav-li", function(){
	var sider = $(this).data("sider");
	util.storage.set("sider", "sid2", sider);
})
$doc.on("click", ".zi-li", function(){
	var sider = $(this).data("sider");
	util.storage.set("sider", "sid3", sider);
})



var sider = util.storage.get("sider");
console.log(sider)
if(util.isEmpty(sider.sid1) && util.isEmpty(sider.sid2) && util.isEmpty(sider.sid3)){
	
}else{
	var $navLi = $("#sideNav > li");
	if(util.isEmpty(sider.sid2)){
		//$navLi.eq(sider.sid1).addClass("height active")
	}else if(util.isEmpty(sider.sid3)){
		$navLi.eq(sider.sid1).addClass("height")
		$navLi.eq(sider.sid1).find("li").eq(sider.sid2).addClass("active");
	}else{
		$navLi.eq(sider.sid1).addClass("height")
		$navLi.eq(sider.sid1).find("li.be").eq(sider.sid2).addClass("height");
		$navLi.eq(sider.sid1).find("li.height").find("li").eq(sider.sid3).addClass("active");
	}
} 


module.exports = util