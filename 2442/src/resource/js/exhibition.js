import '../css/exhibition.scss'

const banqh = require('../js/common/pic_tab');

const util = require('./common/util');
$('#demo1').banqh({
	box:"#demo1",//总框架
	pic:"#ban_pic1",//大图框架
	pnum:"#ban_num1",//小图框架
	prev:"#prev1",//大图左箭头
	next:"#next1",//大图右箭头
	autoplay:false,//是否自动播放
	interTime:5000,//图片自动切换间隔
	delayTime:400,//切换一张图片时间
	order:0,//当前显示的图片（从0开始）
	picdire:true,//大图滚动方向（true为水平方向滚动）
	mindire:true,//小图滚动方向（true为水平方向滚动）
	min_picnum:11//小图显示数量
})
function workslistData(){

}
function bindEnds(){
	util.pageinator("pageLimit", 1, 10, workslistData);
}


function init(){
    bindEnds()
}
init()