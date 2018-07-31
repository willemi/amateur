import '../css/propertyRightAdd.scss';

const util = require("./common/util.js")
const easyUpload = require("./common/easyUpload.js")

function bindEvents(){
	var $doc = $(document);
	
	util.timepicker("datetimepicker");
	util.timepicker("datetimepicker1");
	util.timepicker("datetimepicker2");
	util.timepicker("datetimepicker3");
	util.timepicker("datetimepicker4");
	util.timepicker("datetimepicker5");
	util.timepicker("datetimepicker6");
	util.timepicker("datetimepicker7");
	util.timepicker("datetimepicker8");
	util.timepicker("datetimepicker9");
	
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
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
function init(){
	bindEvents();
}
init();