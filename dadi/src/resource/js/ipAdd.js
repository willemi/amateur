import '../css/ipAdd.scss';

const util = require("./common/util.js")
const easyUpload = require("./common/easyUpload.js")
const queryReferenceTpl = require('../tpl/queryReference.tpl');
const htTpl = require('../tpl/ht.tpl');
const ht1Tpl = require('../tpl/ht1.tpl');
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
let msgTimer = null;
function showMsg(msg) {
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
	//合同信息
	// $doc.on("change", "#right-news", function(){
	// 	var $this = $(this);
	// 	var $div = $this.parents(".btn-group"),
	// 		$button = $div.next("button"),
	// 		$btnOperation = $div.nextAll(".btn-operation");
	// 	var val = $this.val();
	// 	if(val == 0){
	// 		//是
	// 		$button.removeAttr("disabled");
	// 		$btnOperation.hide();
	// 	}else{
	// 		$button.attr("disabled", "disabled");
	// 		$btnOperation.show();
	// 	}
	// })
	$doc.on("click", ".hetong li", function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	$(".btn-yy").on("click", function(){
		let $val = $("input[name='news']:checked").val();
		if($val == 0){
			$('#Indexes').modal('show')
		}else{
			showMsg('选择权利来源！')
		}
	})
	let $cont1 = $(".content-01"),
		$cont2 = $(".content-02");
	$doc.on("click", ".btn-adda", function(){
		$cont1.hide();
		$cont2.show();
	})
	//全选反选
	$doc.on("click", ".batch", function(){
		if($(this).hasClass("cut")){
			$("input[name='checkbox']").removeAttr("checked");
			$(this).removeClass("cut")
		}else{
			$("input[name='checkbox']").attr("checked","true");
			$(this).addClass("cut")
		}
	})
	//批量删除
	$doc.on("click", "#delete", function(){
		batchFun($(this))
	})
	
	$doc.on("change", ".sel-ly", function(){
		var $this = $(this);
		let $val = $("input[name='news']:checked").val();
		if($val == 1){
			$(".qlnews").html(queryReferenceTpl(data2));
			//util.pageinator("pageLimit", "10", "url", tplData);
		}else{
			showMsg('选择权利来源！')
		}
	})
	$doc.on("click", ".btn-ht", function(){
		let vla = $("#ht-name").val();
		if(vla == 1){
			$(".htn").html(htTpl(data3));
		}else{
			$(".htn").html('<button type="button" class="btn btn-primary">创建合同</button>');
		}
		
		//util.pageinator("pageLimit2", "10", "url", tplData2);
	})
	$(".ipadd").on("click", ".btn-primary", function(){
		$(".qlnews").html(queryReferenceTpl(data1));
		let $val = $("input[name='htong']:checked").val();
		$(".htNews").val($val);
		$('#Indexes').modal('hide');
		//util.pageinator("pageLimit", "10", "url", tplData);
	})
	//下一步\提交
	var $step = $(".step li");
	$doc.on("click", ".next-step", function(){
		var $this = $(this);
		var $main = $this.parents(".main"),
			$nextMain = $main.next(".main");
		let index = $main.index();
		if(tatbInit($main)){
			$step.eq(++index).addClass("active").siblings().removeClass("active");
			$main.hide();
			$nextMain.show();
		}
	})
	$doc.on("click", ".btn-xqu", function(){
		$('#gengk-look').modal('hide');
		$(".table-01").show();
	})
	$doc.on("click", ".pre-step", function(){
		var $this = $(this);
		var $main = $this.parents(".main"),
			$pretMain = $main.prev(".main");
		let index = $main.index();
		if(tatbInit($main)){
			$step.eq(--index).addClass("active").siblings().removeClass("active");
			$main.hide();
			$pretMain.show();
		}
	})
	let $selectDiv = $('.select-div');
	$selectDiv.on("click", "li", function(){
		$(".ht1").html(ht1Tpl(data4));
		$selectDiv.hide();
	})
	
	$("#zpname").keyup(function(e){
		var $this = $(this);
		//如果输入空格自动删除
		this.value=$this.val().replace(' ','');
		console.log(this.value)
		//列表框显示
		$selectDiv.show();
		if(e.keyCode == 38) {
			//up
			console.log('up');
		}else if(e.keyCode == 40) {
			//down
			console.log('down');		
		}else if(e.keyCode == 13) {
			//enter
			console.log('enter');
			$selectDiv.hide();
		}else {
			//other
			console.log('other');
		}
	})
	// $doc.on("click", ".basics .add", function(){		
	// 	var $this = $(this);
	// 	var $formLen = $(".form-3").length;
	// 	var $div = $this.parent("div");
	// 	if($formLen < 3){
	// 		$div.after($div.clone())
	// 	}		
	// })
	// $doc.on("click", ".basics .delete", function(){
	// 	var $this = $(this);
	// 	var $formLen = $(".form-3").length;
	// 	var $div = $this.parent("div");
	// 	if($formLen > 1){
	// 		$div.remove();
	// 	}
	// })
	//time
	util.timepicker("datetimepicker");
	util.timepicker("datetimepicker1");

	util.timepicker("datetimeStart", "datetimeEnd");	
	// $('#pageLimit').bootstrapPaginator({    
	// 	currentPage: 1,//当前页码
	// 	totalPages: 10,//总页码
	// 	size:"normal",
	// 	bootstrapMajorVersion: 3,//bootstrap版本
	// 	alignment:"right",
	// 	numberOfPages:5,//一页显示几个按钮
	// 	itemTexts: function(type, page, current){
	// 		switch (type){ 
	// 			case "first": return "首页";
	// 			case "prev": return "上一页";
	// 			case "next": return "下一页";
	// 			case "last": return "末页";
	// 			case "page": return page;
	// 		}
	// 	},
	// 	onPageClicked: function(event, originalEvent, type, page){
	// 		console.log(page)
	// 		$.ajax({
	// 			url: '',
	// 			type: 'post',
	// 			data: {page: page},
	// 			dataType: 'json',
	// 			success: function (data) {
	// 				tplData(data);//处理成功返回的数据
	// 			}
	// 		});
	// 	}
	// });
	//pages	
	util.pageinator("pageLimit", "10", "url", tplData);
	util.pageinator("pageLimit1", "10", "url", tplData1);
	util.pageinator("pageLimit2", "10", "url", tplData2);
	util.pageinator("pageLimit3", "10", "url", tplData3);
	
	
}
function tplData(data){
	console.log(data)
}
function tplData1(data){
	console.log(data)
}
function tplData2(data){
	console.log(data)
}
function tplData3(data){
	console.log(data)
}
function fuzzySearch(e){
	console.log(e)
}
function fileFun(){
	$('#easyContainer').easyUpload({
		allowFileTypes: '*.jpg;*.doc;*.pdf;*.png',//允许上传文件类型，格式';*.doc;*.pdf'
		allowFileSize: 100000,//允许上传文件大小(KB)
		selectText: '选择文件',//选择文件按钮文案
		multi: true,//是否允许多文件上传
		multiNum: 6,//多文件上传时允许的文件数
		showNote: true,//是否展示文件上传说明
		note: '提示：最多上传6个文件，支持格式为doc、pdf、jpg、png',//文件上传说明
		showPreview: false,//是否显示文件预览
		url: '',//上传文件地址
		fileName: 'file',//文件filename配置参数
		//文件filename以外的配置参数，格式：{key1:value1,key2:value2}
		// formParam: {
		// 	token: $.cookie('token_cookie')//不需要验证token时可以去掉
		// },
		timeout: 30000,//请求超时时间
		successFunc: function(res) {//上传成功回调函数
			console.log('成功回调', res);
		},
		errorFunc: function(res) {//上传失败回调函数
			console.log('失败回调', res);
		},
		deleteFunc: function(res) {//删除文件回调函数
			console.log('删除回调', res);
		}
	});
	
}
fileFun()

function tatbInit($main){
	return true;
}
//批量操作加权
function batchFun(me){
	var getAll = getAllids();
	var getAllS = getAll.split("|"),
		id = getAllS[0];
	//var dstext = $(this).attr("data-text");
	if(id == ""){
		showMsg('选择要删除目录！')
	}else{
		//confirmData(id)
		showMsg("删除成功！ id="+ id)
	}
}
//批量选取id
function getAllids(){
	var checkbox = $(".checkbox");
	var id = "", num = "";
	for ( var i = 0; i < checkbox.length; i++) {
		var $this = checkbox[i];
		if($this.checked){
			num = num + $this.value + ",";
			id = id + $this.id + ",";
		}
	}
	return id.slice(0,-1) +"|"+ num.slice(0,-1);
}
function init(){
	bindEvents();
}
init();