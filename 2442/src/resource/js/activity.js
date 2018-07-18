import '../css/activity.scss';

import '../css/swiper.min.css';
const Swiper = require('../js/common/swiper.min');

const util = require('./common/util');
var swiper = new Swiper('.swiper-container',{
	autoplay:3000,
	speed:1000,
	autoplayDisableOnInteraction : false,
	loop:true,
	centeredSlides : true,
	slidesPerView:2,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	onInit:function(swiper){
		swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
	},
	breakpoints: { 
		668: {
			slidesPerView: 1,
		}
	}
});
function bindEnds(){

}
function init(){
	bindEnds();
}
init()