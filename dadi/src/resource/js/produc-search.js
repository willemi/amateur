import '../css/produc-search.scss';

const util = require("./common/util.js")

const echarts = require('echarts');

function bindEvents(){
    var $doc = $(document);
    $doc.on("click", ".dropdown-menu li", function(){
		var $this = $(this)
		var $text = $this.text(),
			$button = $this.parent().prev();
		$button.html($text +'<span class="caret"></span>');
	})
    //pages
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
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
	        data: ['产品授权','产品转让']
	    },
	    series : [
	        {
	            name: '名称',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'产品授权'},
	                {value:234, name:'产品转让'}
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
	        data: ['产品授权','产品转让']
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
	                {value:335, name:'产品授权'},
	                {value:234, name:'产品转让'}
	            ],
	        }
	    ]
	};
	if (option1 && typeof option1 === "object") {
	    myChart1.setOption(option1, true);
	}
}
function init(){
	bindEvents();
}
init();