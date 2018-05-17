import '../css/contractAdd.scss';

const util = require("./common/util.js")

function bindEvents(){
    var $doc = $(document);
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
	util.timepicker("datetimepicker");
	util.timepicker("datetimepicker1");
	util.timepicker("datetimepicker2");
	util.timepicker("datetimepicker3");
	util.timepicker("datetimepicker4");

	util.timepicker("datetimeStart", "datetimeEnd");	
	
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
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