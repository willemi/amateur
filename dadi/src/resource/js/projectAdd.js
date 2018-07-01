import '../css/projectAdd.scss';

const util = require("./common/util.js")
const easyUpload = require("./common/easyUpload.js")
var htmla = '<tr>'+
			'<th class="th" scope="row"><input type="checkbox" name="">XXXXXXX189675456WSPD</th>'+
			'			<td>《嗨！看电视》2018XXX采购合同</td>'+
			'			<td>2018-03-23</td>'+
			'			<td>2018-03-23</td>'+
			'			<td>2018-03-23</td>'+
			'			<td>     '+                           
			'				<button type="button" class="btn btn-default"  data-toggle="modal" data-target="#gengk-look">查看</button>'+
			'			</td>'+
			'			</tr>';

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
	
	
	util.timepicker("datetimepicker1");
	util.timepicker("datetimepicker2");
	util.timepicker("datetimepicker3");
	util.timepicker("datetimepicker4");
	util.timepicker("datetimepicker5");

	util.timepicker("datetimeStart", "datetimeEnd");	
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
	let $cont1 = $(".content-01"),
		$cont2 = $(".content-02");
	$doc.on("click", ".btn-adda", function(){
		$cont1.hide();
		$cont2.show();
	})
	$doc.on("click",  ".btn-cjqr", function(){
		$('#ht-tk').modal('hide');
		$(".ht-1").html(htmla);
	})
	//下一步\提交
	var $stepa = $(".stepa li");
	$doc.on("click", ".next-stepa", function(){
		var $this = $(this);
		var $main = $this.parents(".main"),
			$nextMain = $main.next(".main");
		let index = $main.index();
		if(tatbInit($main)){
			$stepa.eq(++index).addClass("active").siblings().removeClass("active");
			$main.hide();
			$nextMain.show();
		}
	})
	var $step = $(".step li");
	$doc.on("click", ".next-step", function(){
		var $this = $(this);
		var $main = $this.parents(".main"),
			$nextMain = $main.next(".main");
		let index = $main.index();
		if(tatbInit($main)){
			$step.eq(++index).addClass("active").siblings().removeClass("active");
			$main.hide();
			$nextMain.show();
		}
	})
	$doc.on("click", ".btn-index", function(){
		$('#Indexes').modal('hide');
		$(".tr-hide").show();
		$(".bnt-yy").removeClass("btn-default").addClass("btn-primary").attr("data-toggle", "modal").attr("data-target", "#newly-added")

	})
	$doc.on("click", ".btn-s", function(){
		let vla = $("#ht-name").val();
		if(vla == 1){
			$(".ht-1").show();
		}else{
			$(".ht-1").html('<a class="cjht" data-toggle="modal" data-target="#ht-tk">创建合同</a>').show();
		}
		
		//util.pageinator("pageLimit2", "10", "url", tplData2);
	})
	$doc.on("click", ".btn-news", function(){
		$('#newly-added').modal('hide');
		$(".nes-table").show();
	})
	$doc.on("click", ".pre-step", function(){
		var $this = $(this);
		var $main = $this.parents(".main"),
			$pretMain = $main.prev(".main");
		let index = $main.index();
		if(tatbInit($main)){
			$step.eq(--index).addClass("active").siblings().removeClass("active");
			$main.hide();
			$pretMain.show();
		}
	})
}
function fileFun(){
	$('#easyContainer').easyUpload({
		allowFileTypes: '*.jpg;*.doc;*.pdf;*.png',//允许上传文件类型，格式';*.doc;*.pdf'
		allowFileSize: 100000,//允许上传文件大小(KB)
		selectText: '选择文件',//选择文件按钮文案
		multi: true,//是否允许多文件上传
		multiNum: 6,//多文件上传时允许的文件数
		showNote: true,//是否展示文件上传说明
		note: '提示：最多上传6个文件，支持格式为doc、pdf、jpg、png',//文件上传说明
		showPreview: false,//是否显示文件预览
		url: '',//上传文件地址
		fileName: 'file',//文件filename配置参数
		//文件filename以外的配置参数，格式：{key1:value1,key2:value2}
		// formParam: {
		// 	token: $.cookie('token_cookie')//不需要验证token时可以去掉
		// },
		timeout: 30000,//请求超时时间
		successFunc: function(res) {//上传成功回调函数
			console.log('成功回调', res);
		},
		errorFunc: function(res) {//上传失败回调函数
			console.log('失败回调', res);
		},
		deleteFunc: function(res) {//删除文件回调函数
			console.log('删除回调', res);
		}
	});
}
fileFun()
function tatbInit($id, $main){
	return true;
}



function init(){
	bindEvents();
}
init();