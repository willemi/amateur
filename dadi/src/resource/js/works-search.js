import '../css/works-search.scss';

const util = require("./common/util.js")

const echarts = require('echarts');

const tabelTpl = require('../tpl/item.tpl');

let $tabelCont = $(".tabel-cont");
//默认表
let data1 =[{
	"title": "叫我一次好吗",
	"type": "电影",
	"sub": "大地之作有点公司",
	"source": "采购",
	"status": "出版发行",
	"s": 1
},{
	"title": "叫我一次好吗1",
	"type": "电影1",
	"sub": "大地之作有点公司1",
	"source": "采购1",
	"status": "出版发行1",
	"s": 1
}]
//默认数据
function initDaya(){
	let data = data1;
	renderData(data)
}
function renderData(data) {
	$tabelCont.html(tabelTpl(data))
}

function bindEvents(){
	var $doc = $(document);
	// $doc.on("click", "#sideNav > li", function(e){
	//     var $this = $(this);
	//     $this.addClass("active").siblings().removeClass("active");
	// })
	//全选反选
	// $doc.on("click", ".batch", function(){
	// 	if($(this).hasClass("cut")){
	// 		$("input[name='checkbox']").removeAttr("checked");
	// 		$(this).removeClass("cut")
	// 	}else{
	// 		$("input[name='checkbox']").attr("checked","true");
	// 		$(this).addClass("cut")
	// 	}
	// })
	//pages
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
	//model
	// $('#delete').on('show.bs.modal', function (e) {
	// 	// 执行一些动作...
	// 	var button = $(e.relatedTarget);
	// 	console.log(button.data("id"))
	// });
	// $('#delete').on('hide.bs.modal', function () {
	// 	// 执行一些动作...
	// });	
	let chart = true;
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		// 获取已激活的标签页的名称
		let activeTab = $(e.target).text(); 
		if(activeTab == "数据图" && chart){
			chart = false;
			initEcharts()
		}
		//e.target // 激活的标签页
		//e.relatedTarget // 前一个激活的标签页
	  })


	$doc.on("click", ".dropdown-menu li", function(){
		var $this = $(this)
		var $text = $this.text(),
			$button = $this.parent().prev();
		$button.html($text +'<span class="caret"></span>');
	})
}

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
	        data: ['音乐','影视动漫','美术','文字','戏剧']
	    },
	    series : [
	        {
	            name: '名称',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'音乐'},
	                {value:234, name:'影视动漫'},
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
	        data:['音乐','影视动漫','美术','文字','戏剧']
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
	                {value:234, name:'影视动漫'},
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
function init(){
	initDaya()	
	bindEvents();
}
init();