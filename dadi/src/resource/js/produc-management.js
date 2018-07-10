import '../css/produc-management.scss';

const util = require("./common/util.js")
const easyUpload = require("./common/easyUpload.js")
var htmla = '<tr>'+
			'<th class="th" scope="row"><input type="checkbox" name="">XXXXXXX189675456WSPD</th>'+
			'			<td>《嗨！看电视》2018XXX采购合同</td>'+
			'			<td>2018-03-23</td>'+
			'			<td>2018-03-23</td>'+
			'			<td>2018-03-23</td>'+
			'			<td>     '+                           
			'				<button type="button" class="btn btn-default"  data-toggle="modal" data-target="#modal-detailsContract1">查看</button>'+
			'			</td>'+
			'			</tr>';

let $stepa = $(".stepa li");
let $step = $(".step li");

function bindEvents(){
    var $doc = $(document);
    $doc.on("click", ".dropdown-menu li", function(){
		var $this = $(this)
		var $text = $this.text(),
			$button = $this.parent().prev();
		$button.html($text +'<span class="caret"></span>');
	})
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		// 获取已激活的标签页的名称
		var activeTab = $(e.target).text(); 
		// 获取前一个激活的标签页的名称
		var previousTab = $(e.relatedTarget).text(); 
		$(".active-tab span").html(activeTab);
		$(".previous-tab span").html(previousTab);
    });
    //合同信息
	$doc.on("change", "#right-news", function(){
		var $this = $(this);
		var $div = $this.parents(".btn-group"),
			$button = $div.next("button"),
			$btnOperation = $div.nextAll(".btn-operation");
		var val = $this.val();
		if(val == 0){
			//是
			$button.removeAttr("disabled");
			$btnOperation.hide();
		}else{
			$button.attr("disabled", "disabled");
			$btnOperation.show();
		}
	})
	
	util.timepicker("modal-right-start-time");
	util.timepicker("modal-right-dj-time");
	util.timepicker("datetimepicker2");
	util.timepicker("datetimepicker3");
	util.timepicker("datetimepicker4");
	util.timepicker("datetimepicker5");

	util.timepickerSection("datetimeStart", "datetimeEnd");	
    //pages
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
	util.pageinator("pageLimit1", "10", "url", tplData2);
	function tplData2(data){
		console.log(data)
	}
	util.pageinator("pageLimit-Indexes", "10", "url", tplData1);
	function tplData1(data){
		console.log(data)
	}

	//新增
	let $cont1 = $(".content-01"),
		$cont2 = $(".content-02");
	$doc.on("click", ".btn-adda", function(){
		$cont1.hide();
		$cont2.show();
	})
	//创建合同
	$doc.on("click",  ".btn-cjqr", function(){
		$('#modal-createContract1').modal('hide');
		$(".ht-1").html(htmla);
	})
	//下一步\提交
	$doc.on("click", ".next-stepa", function(){
		var $this = $(this);
		nextBtn($this);
	})
	$doc.on("click", ".pre-stepa", function(){
		let $this = $(this);
		preBtn($this);
	})

	$doc.on("click", ".next-step", function(){
		var $this = $(this);
		nextBtn($this);
	})
	$doc.on("click", ".pre-step", function(){
		var $this = $(this);
		preBtn($this);
	})

	//引用原始库作品
	$doc.on("click", ".btn-index", function(){
		$('#modal-referenceWorks').modal('hide');
		$(".tr-hide").show();
		$(".bnt-yy").removeClass("btn-default").addClass("btn-primary").attr("data-toggle", "modal").attr("data-target", "#modal-newly-added2")

	})
	//搜索
	$doc.on("click", ".btn-s", function(){
		let vla = $("#ht-name").val();
		if(vla == 1){
			$(".ht-1").show();
		}else{
			$(".ht-1").html('<a class="cjht" data-toggle="modal" data-target="#modal-createContract1">创建合同</a>').show();
		}
		
		//util.pageinator("pageLimit2", "10", "url", tplData2);
	})
	//创建产品信息
	$doc.on("click", ".modal-right-info-btn", function(){
		$('#modal-newly-added2').modal('hide');
		$(".nes-table").show();
	})
	$doc.on("click", ".btn-scql", function(){
		$(".xzql-list").show();
		$(".btn-news").addClass("modal-right-info-btn")
	})
	
}
//上传
function fileUpload(){
	let url = "11111111";
	let fileRes = util.fileFun(url);
	console.log(fileRes)
}
fileUpload()
//下一步
function nextBtn(me){
	let $main = me.parents(".main"),
	$nextMain = $main.next(".main");
	let index = $main.index();
	$stepa.eq(++index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$nextMain.show();
}
//上一步
function preBtn(me){
	let $main = me.parents(".main"),
	$pretMain = $main.prev(".main");
	let index = $main.index();
	$stepa.eq(--index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$pretMain.show();
}
function tatbInit($id, $main){
	return true;
}



function init(){
	bindEvents();
}
init();