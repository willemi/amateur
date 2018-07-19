import '../css/registered.scss';

const util = require('./common/util');

let action = util.GetQueryString("action")
if(action == "login"){
	$(".login").show()
}else{
	$(".registered").show()
}
$("html, body").animate({
	"scrollTop": 600
},500)
function bindEnds(){
}
function init(){
	bindEnds();
}
init()