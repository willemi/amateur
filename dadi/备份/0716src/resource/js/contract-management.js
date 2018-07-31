import '../css/contract.scss';

const util = require("./common/util.js")

function bindEvents(){
    var $doc = $(document);
	util.timepicker("modal-right-start-timea");
	util.timepicker("modal-right-start-timeb");
	util.timepicker("modal-right-start-timec");
}



function init(){
	bindEvents();
}
init();