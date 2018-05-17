import '../css/systemAdd.scss';

const util = require("./common/util.js")

function bindEvents(){
    var $doc = $(document);
    //pages
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
}



function init(){
	bindEvents();
}
init();