import '../css/propertyRightAdd.scss';

const util = require("./common/util.js")

function bindEvents(){
	var $doc = $(document);
	
	util.timepicker("datetimepicker");
	
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
}


function init(){
	bindEvents();
}
init();