import '../css/trademark-management.scss';

const util = require("./common/util.js")
const easyUpload = require("./common/easyUpload.js")

const rightNewsTpl = require('../tpl/item-right-news.tpl');
const itemSearchListTpl = require('../tpl/item-search-list.tpl');
const worksListTpl = require('../tpl/item-works-list.tpl');
const obligeeListTpl = require('../tpl/item-obligee-list.tpl');

var data1 = [{
	"ly": "自制",
	"zt": "XXX",
	"nro": "这里是内容",
	"bz": "20%",
	"zy": "是",
	"wq": "有",
	"sq": "有",
	"ht": "有",
	"lx": "复制权",
	"fs": "无限制",
	"qd": "无限制",
	"dy": "无限制",
	"cs": "1",
	"yy": "中文",
	"ks": "1990-10-22",
	"js": "1990-10-22",
	"ms": "这里是描述这里是描述",
	"bz": "备注备注备注备注备注备注备注备注备注"
},{
	"ly": "自制",
	"zt": "XXX",
	"nro": "这里是内容",
	"bz": "20%",
	"zy": "是",
	"wq": "有",
	"sq": "有",
	"ht": "有",
	"lx": "复制权",
	"fs": "无限制",
	"qd": "无限制",
	"dy": "无限制",
	"cs": "1",
	"yy": "中文",
	"ks": "1990-10-22",
	"js": "1990-10-22",
	"ms": "这里是描述这里是描述",
	"bz": "备注备注备注备注备注备注备注备注备注"
}]
var data2 = [{
	"ly": "自制",
	"zt": "XXX",
	"nro": "这里是内容",
	"bz": "20%",
	"zy": "是",
	"wq": "有",
	"sq": "有",
	"ht": "有",
	"lx": "复制权",
	"fs": "无限制",
	"qd": "无限制",
	"dy": "无限制",
	"cs": "1",
	"yy": "中文",
	"ks": "1990-10-22",
	"js": "1990-10-22",
	"ms": "这里是描述这里是描述",
	"bz": "备注备注备注备注备注备注备注备注备注"
}]
var data3 = [{
	"num": "XXXXXXX189675456WSPD",
	"name": "《嗨！看电视》2018XXX采购合同",
	"qTime": "2018-03-23",
	"sTime": "2018-03-23",
	"sxTime": "2018-03-23"
},{
	"num": "XXXXXXX189675456WSPD",
	"name": "《嗨！看电视》2018XXX采购合同",
	"qTime": "2018-03-23",
	"sTime": "2018-03-23",
	"sxTime": "2018-03-23"
},{
	"num": "XXXXXXX189675456WSPD",
	"name": "《嗨！看电视》2018XXX采购合同",
	"qTime": "2018-03-23",
	"sTime": "2018-03-23",
	"sxTime": "2018-03-23"
}]
var data4 = [{
	"name": "张三",
	"type": "词作者",
	"fu": "否",
	"mony": "人民币",
	"jine": "100元"
},{
	"name": "张三",
	"type": "词作者",
	"fu": "否",
	"mony": "人民币",
	"jine": "100元"
}]

let $stepa = $(".stepa li");

function bindEvents(){
	var $doc = $(document);
	
	util.timepicker("datetimepicker");
	util.timepicker("datetimepicker1");
	util.timepicker("datetimepicker2");
	util.timepicker("datetimepicker3");
	
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}


	//选择合同
	//搜索
	$doc.on("click", ".btn-ht", function(){
		let val = $("#ht-name").val();
		if(val == 1){//搜索
			$(".htn-list").html(itemSearchListTpl(data3));
		}else if(val == 2){//创建
			$(".htn-list").html('<a class="cjht" data-toggle="modal" data-target="#modal-createContract">创建合同</a>');
		}else{
			util.showMsg('搜索字段不能为空')
		}
	})
	//选取
	$(".ipadd").on("click", ".btn-primary", function(){
		$(".right-news").html(rightNewsTpl(data1));
		let $val = $("input[name='htong']:checked").val();
		$(".htNews").val($val);
		$('#modal-choiceContracts').modal('hide');
		//util.pageinator("pageLimit", "10", "url", tplData);
	})
	//合同详情选取
	$doc.on("click", ".btn-xqu", function(){
		$('#modal-detailsContract').modal('hide');
		$(".table-01").show();
	})
	//创建合同
	// 创建合同、无权利信确认
	$doc.on("click", ".btn-cjqr", function(){
		$('#modal-createContract').modal('hide');
		$(".htn-list").html(itemSearchListTpl(data3));
	})	
	//合同下一步\提交	
	$doc.on("click", ".next-stepa", function(){
		let $this = $(this);
		nextBtn($this);
	})	
}
//下一步
function nextBtn(me){
	let $main = me.parents(".main"),
	$nextMain = $main.next(".main");
	let index = $main.index();
	$stepa.eq(++index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$nextMain.show();
}
//上一步
function preBtn(me){
	let $main = me.parents(".main"),
	$pretMain = $main.prev(".main");
	let index = $main.index();
	$stepa.eq(--index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$pretMain.show();
}
//上传
function fileUpload(){
	let url = "11111111";
	let fileRes = util.fileFun(url);
	console.log(fileRes)
}
fileUpload()
function init(){
	bindEvents();
}
init();