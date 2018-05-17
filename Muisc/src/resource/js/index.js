import '../css/index.scss';

const md5 = require('md5');
const itemTpl = require('../tpl/item.tpl');

let $loading = $('.loading');
let $noData = $('.no-data');
let page = 1;
let $contBox = $(".cont-box");
function getData() {	
	$noData.hide();
	if (page > 1) {
		$loading.fadeIn();
	}
	var stamp = new Date().getTime();
	$.ajax({
		url: 'http://kuai.360.cn/pb/mins',
		data: {
			t: stamp,
			sign: md5(stamp +' hikafeo.!$ '),
			page: page
		},
		dataType: 'jsonp',
		jsonp: 'cb',
		cache: false,
		timeout: 10000
	}).done(function(res) {
		//console.log(res)
		if (res && res.code == 0 && res.data.length > 0) {
			var moreArr = [];
			for (var j = 0; j < res.data.length; j++) {
				var tempData = res.data[j];
				if (tempData.img_ch && tempData.img_ch != "") {
					tempData.imgUrl = cutImg(tempData.img_ch, '750_422')
				} else {
					tempData.imgUrl = tempData.v_thumb_url
				}
				moreArr.push(tempData)
			}
			var html = itemTpl(moreArr);
			$contBox.append(html);
			page++
		} else {
			$noData.fadeIn();
			page--
		}
	}).fail(function() {
		$noData.fadeIn();
	}).always(function() {
		setTimeout(function() {
			requesting = false;
		}, 500);
		$loading.stop(true, true).hide();
	});
}

var prevSC, requesting;
function onScroll(e) {
	var visualTop = $(window).scrollTop() + $(window).height();
	var isDown = false;
	if (prevSC == undefined) {
		prevSC = visualTop;
	}
	if (visualTop > prevSC) {
		isDown = true;
	}
	if (e.type == 'mousewheel') {
		isDown = e.originalEvent.wheelDelta < 0;
	}
	prevSC = visualTop;
	if (!requesting && isDown && visualTop > $(document).height() - 200) {
		requesting = true;
		getData();
	}
}
	
//图床
function cutImg(url, size) {
	size = size || '750_422';
	var n = 'video/' + size + '_';
	return url ? url.replace(/(p\d*)\.(ssl\.)?(qhimg(s4)?)\.com\/(\w{2,}\/\d*_\d*_\d*\/)*/ig, "$1.$2$3.com/" + n + "/") : ""
}

function bindEvents(){
	var $doc = $(document);
	$(window).on('scroll', onScroll);	
	$doc.on('mousewheel', onScroll);		
}
function stat(filename){
	console.log(filename)
	return new Image().src = 'http://dd.browser.360.cn/static/a/' + filename + (filename.indexOf('?') > -1 ? '&' : '?') + +new Date() + Math.random().toString().replace('0.', '').substr(0, 10)
}	

function init() {
	bindEvents();	
	getData();
}
init();