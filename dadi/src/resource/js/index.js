import '../css/index.scss';

const util = require("./common/util.js")

const echarts = require('echarts');

function initEcharts(){
	var dom = document.getElementById("container");
	var myChart = echarts.init(dom);
	var app = {},
		option = null;
	option = {
	    // title : {
	    //     text: '某站点用户访问来源',
	    //     subtext: '纯属虚构',
	    //     x:'center'
	    // },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        bottom: 'bottom',
	        icon: 'circle',
	        data: ['音乐','影视','动漫','美术','文字','戏剧']
	    },
	    series : [
	        {
	            name: '名称',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'音乐'},
	                {value:310, name:'影视'},
	                {value:234, name:'动漫'},
	                {value:135, name:'美术'},
	                {value:135, name:'文字'},
	                {value:1548, name:'戏剧'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}

	var dom1 = document.getElementById("container1");
	var myChart1 = echarts.init(dom1);
	var app1 = {},
	option1 = null;
	app1.title = '环形图';

	option1 = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'horizontal',
	        y: 'bottom',
	        icon: 'circle',
	        data:['音乐','影视','动漫','美术','文字','戏剧']
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['40%', '60%'],
	            center: ['50%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
					{value:335, name:'音乐'},
	                {value:310, name:'影视'},
	                {value:234, name:'动漫'},
	                {value:135, name:'美术'},
	                {value:135, name:'文字'},
	                {value:1548, name:'戏剧'}
	            ]
	        }
	    ]
	};
	if (option1 && typeof option1 === "object") {
	    myChart1.setOption(option1, true);
	}
}

function bindEvents(){
    var $doc = $(document);
    // $doc.on("click", "#sideNav > li", function(e){
    //     var $this = $(this);
    //     $this.addClass("active").siblings().removeClass("active");
    // })
}






























function init(){
	initEcharts();
    bindEvents();
}
init();