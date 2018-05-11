import '../css/ipList.scss';

const util = require("./common/util.js")

const echarts = require('echarts');
const data = require('../data/flare.json');

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
	var $treeFixed = $(".tree-fixed");
	$doc.on("click", ".btn-tree", function(){
		$treeFixed.show();
		treeFun("tree-content");
		
	})
	$treeFixed.on("click", "i", function(){
		$treeFixed.hide();
	})
	var $ipList = $(".ip-list");
	var $ipDetails = $(".ip-details");
	$doc.on("click", ".btn-query", function(){
		$ipList.hide();
		$ipDetails.show();
		treeFun("container");
	})
	$doc.on("click", ".btn-list", function(){
		$ipList.show();
		$ipDetails.hide();
	})
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
	$doc.on("click", ".dropdown-menu li", function(){
		var $this = $(this)
		var $text = $this.text(),
			$button = $this.parent().prev();
		$button.html($text +'<span class="caret"></span>');
	})
}
//echarts 树图谱
function treeFun(cont){
	var dom = document.getElementById(cont);
	var myChart = echarts.init(dom);
	var app = {},
		option = null;
	myChart.showLoading();
	//$.get('data/asset/data/flare.json', function (data) {
		myChart.hideLoading();	
		myChart.setOption(option = {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			series: [{
				type: 'tree',
				data: [data],
				top: '14%',
				bottom: '14%',
				layout: 'radial',
				symbol: 'emptyCircle',
				symbolSize: 7,
				initialTreeDepth: 3,
				animationDurationUpdate: 750
			}]
		});
		myChart.on('click', function(params){  
			console.log(params);  
		});
	//});
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
function init(){
	bindEvents();
}
init();