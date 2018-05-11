import '../css/ipAdd.scss';

const util = require("./common/util.js")

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
	util.timepicker("datetimepicker1");
	util.timepicker("datetimepicker2");

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
	util.pageinator("pageLimit1", "10", "url", tplData);
	util.pageinator("pageLimit", "10", "url", tplData1);
	function tplData(data){
		console.log(data)
	}
	function tplData1(data){
		console.log(data)
	}
	
}
function tatbInit($id, $main){
	return true;
}

function init(){
	bindEvents();
}
init();