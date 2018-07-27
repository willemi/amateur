import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

let util = {};
util.isEmpty = (str) => {
	str = $.trim(str);
	return (str === '' || typeof(str) === 'undefined' || str === null || str === 'null') ? true : false;
}
if (window.console) {
	let log = window.console.log;
	window.console.log = process.env.NODE_ENV == 'production' ? () => {} : log
}
util.GetQueryString = (name) => {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}

function bindEvents(){
	var $doc = $(document);
	let $fixed = $(".fixed");
	$doc.on("click", ".go-top", function(){
		$("html, body").animate({
			"scrollTop": 0
		},500)
	})
	$(window).on("scroll load", function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 100){
			$fixed.show();
		}else{
			$fixed.hide()
		}
	});
}

util.init = () => {
	bindEvents();
}
util.init();
module.exports = util