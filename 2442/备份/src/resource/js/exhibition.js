import '../css/exhibition.scss'

import '../css/swiper.css';
const Swiper = require('../js/common/swiper.min');

const util = require('./common/util');

var mySwiper = new Swiper('.swiper-container', {
    // autoplay: true,//可选选项，自动滑动
    pagination: '.s-pagination',
    paginationClickable:true,
    // 自定义分页器，必须的type类型
    paginationBulletRender: function (swiper, index, className) {
        return '<li class="' + className + '"><img src="resource/img/70_100.jpg"><p>某某跑团某某跑团某某跑团</p></li>'
    },
    nextButton: '.s-btn-next',
    prevButton: '.s-btn-pre'
})