import '../css/ipAdd.scss';

const util = require("./common/util.js")
const easyUpload = require("./common/easyUpload.js")

function bindEvents(){
	var $doc = $(document);
	//合同信息
	$doc.on("change", "#right-news", function(){
		var $this = $(this);
		var $div = $this.parents(".btn-group"),
			$button = $div.next("button"),
			$btnOperation = $div.nextAll(".btn-operation");
		var val = $this.val();
		if(val == 0){
			//是
			$button.removeAttr("disabled");
			$btnOperation.hide();
		}else{
			$button.attr("disabled", "disabled");
			$btnOperation.show();
		}
	})
	//下一步\提交
	var $step = $(".step li");
	$doc.on("click", ".next-step", function(){
		var $this = $(this);
		var $main = $this.parents(".main"),
			$nextMain = $main.next(".main"),
			$id = $main.data("id");

		if(tatbInit($id, $main)){
			$step.eq($id).addClass("active").siblings().removeClass("active");
			$main.hide();
			$nextMain.show();
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
	function tplData(data){
		console.log(data)
	}
	function tplData1(data){
		console.log(data)
	}
	function tplData2(data){
		console.log(data)
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
	
}
function tatbInit($id, $main){
	return true;
}

function init(){
	bindEvents();
}
init();