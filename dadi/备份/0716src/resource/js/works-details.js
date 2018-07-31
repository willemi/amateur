import '../css/works-details.scss';

const util = require("./common/util.js")

const echarts = require('echarts');
const data = require('../data/flare.json');

let $tabelCont = $(".tabel-cont");

function bindEvents(){
	var $doc = $(document);
	//树形图谱
	var $treeFixed = $(".tree-fixed");
	$doc.on("click", ".btn-tree", function(){
		$treeFixed.show();
		treeFun("tree-content")		
	})
	$treeFixed.on("click", "i", function(){
		$treeFixed.hide();
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
	treeFun("container");
	bindEvents();
}
init();