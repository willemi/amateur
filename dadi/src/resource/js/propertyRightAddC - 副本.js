import '../css/propertyRightAddC.scss';

const util = require("./common/util.js")

function bindEvents(){
	var $doc = $(document);
	
	util.timepicker("datetimepicker");
	util.timepicker("datetimepicker2");
	util.timepicker("datetimepicker3");
	
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
}


function init(){
	bindEvents();
}
init();