import '../css/registered.scss';

const util = require('./common/util');

let action = util.GetQueryString("action")
if(action == "login"){
	$(".login").show()
}else{
	$(".registered").show()
}
function bindEnds(){
}
function init(){
	bindEnds();
}
init()