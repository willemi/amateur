import '../css/projectAdd.scss';

const util = require("./common/util.js")

function bindEvents(){
    var $doc = $(document);
    $doc.on("click", ".dropdown-menu li", function(){
		var $this = $(this)
		var $text = $this.text(),
			$button = $this.parent().prev();
		$button.html($text +'<span class="caret"></span>');
	})
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		// 获取已激活的标签页的名称
		var activeTab = $(e.target).text(); 
		// 获取前一个激活的标签页的名称
		var previousTab = $(e.relatedTarget).text(); 
		$(".active-tab span").html(activeTab);
		$(".previous-tab span").html(previousTab);
    });
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
	
	
	util.timepicker("datetimepicker1");
	util.timepicker("datetimepicker2");
	util.timepicker("datetimepicker3");
	util.timepicker("datetimepicker4");
	util.timepicker("datetimepicker5");

	util.timepicker("datetimeStart", "datetimeEnd");	
    //pages
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
	util.pageinator("pageLimit-Indexes", "10", "url", tplData1);
	function tplData1(data){
		console.log(data)
	}
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
}
function tatbInit($id, $main){
	return true;
}



function init(){
	bindEvents();
}
init();