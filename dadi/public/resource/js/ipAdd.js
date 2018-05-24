/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ipAdd": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "resource/js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/resource/js/ipAdd.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/resource/js/ipAdd.js":
/*!**********************************!*\
  !*** ./src/resource/js/ipAdd.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../css/ipAdd.scss */ \"./src/resource/css/ipAdd.scss\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar util = __webpack_require__(/*! ./common/util.js */ \"./src/resource/js/common/util.js\");\nvar easyUpload = __webpack_require__(/*! ./common/easyUpload.js */ \"./src/resource/js/common/easyUpload.js\");\nvar queryReferenceTpl = __webpack_require__(/*! ../tpl/queryReference.tpl */ \"./src/resource/tpl/queryReference.tpl\");\nvar htTpl = __webpack_require__(/*! ../tpl/ht.tpl */ \"./src/resource/tpl/ht.tpl\");\nvar data1 = [_defineProperty({\n\t\"ly\": \"自制\",\n\t\"zt\": \"XXX\",\n\t\"nro\": \"这里是内容\",\n\t\"bz\": \"20%\",\n\t\"zy\": \"是\",\n\t\"wq\": \"有\",\n\t\"sq\": \"有\",\n\t\"ht\": \"有\",\n\t\"lx\": \"复制权\",\n\t\"fs\": \"无限制\",\n\t\"qd\": \"无限制\",\n\t\"dy\": \"无限制\",\n\t\"cs\": \"1\",\n\t\"yy\": \"中文\",\n\t\"ks\": \"1990-10-22\",\n\t\"js\": \"1990-10-22\",\n\t\"ms\": \"这里是描述这里是描述\"\n}, \"bz\", \"备注备注备注备注备注备注备注备注备注\"), _defineProperty({\n\t\"ly\": \"自制\",\n\t\"zt\": \"XXX\",\n\t\"nro\": \"这里是内容\",\n\t\"bz\": \"20%\",\n\t\"zy\": \"是\",\n\t\"wq\": \"有\",\n\t\"sq\": \"有\",\n\t\"ht\": \"有\",\n\t\"lx\": \"复制权\",\n\t\"fs\": \"无限制\",\n\t\"qd\": \"无限制\",\n\t\"dy\": \"无限制\",\n\t\"cs\": \"1\",\n\t\"yy\": \"中文\",\n\t\"ks\": \"1990-10-22\",\n\t\"js\": \"1990-10-22\",\n\t\"ms\": \"这里是描述这里是描述\"\n}, \"bz\", \"备注备注备注备注备注备注备注备注备注\")];\nvar data2 = [_defineProperty({\n\t\"ly\": \"自制\",\n\t\"zt\": \"XXX\",\n\t\"nro\": \"这里是内容\",\n\t\"bz\": \"20%\",\n\t\"zy\": \"是\",\n\t\"wq\": \"有\",\n\t\"sq\": \"有\",\n\t\"ht\": \"有\",\n\t\"lx\": \"复制权\",\n\t\"fs\": \"无限制\",\n\t\"qd\": \"无限制\",\n\t\"dy\": \"无限制\",\n\t\"cs\": \"1\",\n\t\"yy\": \"中文\",\n\t\"ks\": \"1990-10-22\",\n\t\"js\": \"1990-10-22\",\n\t\"ms\": \"这里是描述这里是描述\"\n}, \"bz\", \"备注备注备注备注备注备注备注备注备注\")];\nvar data3 = [{\n\t\"num\": \"XXXXXXX189675456WSPD\",\n\t\"name\": \"《嗨！看电视》2018XXX采购合同\",\n\t\"qTime\": \"2018-03-23\",\n\t\"sTime\": \"2018-03-23\",\n\t\"sxTime\": \"2018-03-23\"\n}, {\n\t\"num\": \"XXXXXXX189675456WSPD\",\n\t\"name\": \"《嗨！看电视》2018XXX采购合同\",\n\t\"qTime\": \"2018-03-23\",\n\t\"sTime\": \"2018-03-23\",\n\t\"sxTime\": \"2018-03-23\"\n}, {\n\t\"num\": \"XXXXXXX189675456WSPD\",\n\t\"name\": \"《嗨！看电视》2018XXX采购合同\",\n\t\"qTime\": \"2018-03-23\",\n\t\"sTime\": \"2018-03-23\",\n\t\"sxTime\": \"2018-03-23\"\n}];\nvar msgTimer = null;\nfunction showMsg(msg) {\n\tvar $tip = $('.messages');\n\t$tip.html(msg).show();\n\tclearTimeout(msgTimer);\n\tmsgTimer = setTimeout(function () {\n\t\t$tip.hide();\n\t\tclearTimeout(msgTimer);\n\t}, 2e3);\n}\nfunction bindEvents() {\n\tvar $doc = $(document);\n\t//合同信息\n\t// $doc.on(\"change\", \"#right-news\", function(){\n\t// \tvar $this = $(this);\n\t// \tvar $div = $this.parents(\".btn-group\"),\n\t// \t\t$button = $div.next(\"button\"),\n\t// \t\t$btnOperation = $div.nextAll(\".btn-operation\");\n\t// \tvar val = $this.val();\n\t// \tif(val == 0){\n\t// \t\t//是\n\t// \t\t$button.removeAttr(\"disabled\");\n\t// \t\t$btnOperation.hide();\n\t// \t}else{\n\t// \t\t$button.attr(\"disabled\", \"disabled\");\n\t// \t\t$btnOperation.show();\n\t// \t}\n\t// })\n\t$doc.on(\"click\", \".hetong li\", function () {\n\t\t$(this).addClass(\"active\").siblings().removeClass(\"active\");\n\t});\n\n\t$(\".btn-yy\").on(\"click\", function () {\n\t\tvar $val = $(\"input[name='news']:checked\").val();\n\t\tif ($val == 0) {\n\t\t\t$('#Indexes').modal('show');\n\t\t} else {\n\t\t\tshowMsg('选择权利来源！');\n\t\t}\n\t});\n\t//全选反选\n\t$doc.on(\"click\", \".batch\", function () {\n\t\tif ($(this).hasClass(\"cut\")) {\n\t\t\t$(\"input[name='checkbox']\").removeAttr(\"checked\");\n\t\t\t$(this).removeClass(\"cut\");\n\t\t} else {\n\t\t\t$(\"input[name='checkbox']\").attr(\"checked\", \"true\");\n\t\t\t$(this).addClass(\"cut\");\n\t\t}\n\t});\n\t//批量删除\n\t$doc.on(\"click\", \"#delete\", function () {\n\t\tbatchFun($(this));\n\t});\n\n\t$doc.on(\"change\", \".sel-ly\", function () {\n\t\tvar $this = $(this);\n\t\tvar $val = $(\"input[name='news']:checked\").val();\n\t\tif ($val == 1) {\n\t\t\t$(\".qlnews\").html(queryReferenceTpl(data2));\n\t\t\tutil.pageinator(\"pageLimit\", \"10\", \"url\", tplData);\n\t\t} else {\n\t\t\tshowMsg('选择权利来源！');\n\t\t}\n\t});\n\t$doc.on(\"click\", \".btn-ht\", function () {\n\t\t$(\".htn\").html(htTpl(data3));\n\t\tutil.pageinator(\"pageLimit2\", \"10\", \"url\", tplData2);\n\t});\n\t$(\".ipadd\").on(\"click\", \".btn-primary\", function () {\n\t\t$(\".qlnews\").html(queryReferenceTpl(data1));\n\t\tvar $val = $(\"input[name='htong']:checked\").val();\n\t\t$(\".htNews\").val($val);\n\t\t$('#Indexes').modal('hide');\n\t\tutil.pageinator(\"pageLimit\", \"10\", \"url\", tplData);\n\t});\n\t//下一步\\提交\n\tvar $step = $(\".step li\");\n\t$doc.on(\"click\", \".next-step\", function () {\n\t\tvar $this = $(this);\n\t\tvar $main = $this.parents(\".main\"),\n\t\t    $nextMain = $main.next(\".main\"),\n\t\t    $id = $main.data(\"id\");\n\n\t\tif (tatbInit($id, $main)) {\n\t\t\t$step.eq($id).addClass(\"active\").siblings().removeClass(\"active\");\n\t\t\t$main.hide();\n\t\t\t$nextMain.show();\n\t\t}\n\t});\n\t// $doc.on(\"click\", \".basics .add\", function(){\t\t\n\t// \tvar $this = $(this);\n\t// \tvar $formLen = $(\".form-3\").length;\n\t// \tvar $div = $this.parent(\"div\");\n\t// \tif($formLen < 3){\n\t// \t\t$div.after($div.clone())\n\t// \t}\t\t\n\t// })\n\t// $doc.on(\"click\", \".basics .delete\", function(){\n\t// \tvar $this = $(this);\n\t// \tvar $formLen = $(\".form-3\").length;\n\t// \tvar $div = $this.parent(\"div\");\n\t// \tif($formLen > 1){\n\t// \t\t$div.remove();\n\t// \t}\n\t// })\n\t//time\n\tutil.timepicker(\"datetimepicker\");\n\tutil.timepicker(\"datetimepicker1\");\n\n\tutil.timepicker(\"datetimeStart\", \"datetimeEnd\");\n\t// $('#pageLimit').bootstrapPaginator({    \n\t// \tcurrentPage: 1,//当前页码\n\t// \ttotalPages: 10,//总页码\n\t// \tsize:\"normal\",\n\t// \tbootstrapMajorVersion: 3,//bootstrap版本\n\t// \talignment:\"right\",\n\t// \tnumberOfPages:5,//一页显示几个按钮\n\t// \titemTexts: function(type, page, current){\n\t// \t\tswitch (type){ \n\t// \t\t\tcase \"first\": return \"首页\";\n\t// \t\t\tcase \"prev\": return \"上一页\";\n\t// \t\t\tcase \"next\": return \"下一页\";\n\t// \t\t\tcase \"last\": return \"末页\";\n\t// \t\t\tcase \"page\": return page;\n\t// \t\t}\n\t// \t},\n\t// \tonPageClicked: function(event, originalEvent, type, page){\n\t// \t\tconsole.log(page)\n\t// \t\t$.ajax({\n\t// \t\t\turl: '',\n\t// \t\t\ttype: 'post',\n\t// \t\t\tdata: {page: page},\n\t// \t\t\tdataType: 'json',\n\t// \t\t\tsuccess: function (data) {\n\t// \t\t\t\ttplData(data);//处理成功返回的数据\n\t// \t\t\t}\n\t// \t\t});\n\t// \t}\n\t// });\n\t//pages\t\n\n\tutil.pageinator(\"pageLimit1\", \"10\", \"url\", tplData1);\n\tfunction tplData(data) {\n\t\tconsole.log(data);\n\t}\n\tfunction tplData1(data) {\n\t\tconsole.log(data);\n\t}\n\tfunction tplData2(data) {\n\t\tconsole.log(data);\n\t}\n\tfunction fileFun() {\n\t\t$('#easyContainer').easyUpload({\n\t\t\tallowFileTypes: '*.jpg;*.doc;*.pdf;*.png', //允许上传文件类型，格式';*.doc;*.pdf'\n\t\t\tallowFileSize: 100000, //允许上传文件大小(KB)\n\t\t\tselectText: '选择文件', //选择文件按钮文案\n\t\t\tmulti: true, //是否允许多文件上传\n\t\t\tmultiNum: 6, //多文件上传时允许的文件数\n\t\t\tshowNote: true, //是否展示文件上传说明\n\t\t\tnote: '提示：最多上传6个文件，支持格式为doc、pdf、jpg、png', //文件上传说明\n\t\t\tshowPreview: false, //是否显示文件预览\n\t\t\turl: '', //上传文件地址\n\t\t\tfileName: 'file', //文件filename配置参数\n\t\t\t//文件filename以外的配置参数，格式：{key1:value1,key2:value2}\n\t\t\t// formParam: {\n\t\t\t// \ttoken: $.cookie('token_cookie')//不需要验证token时可以去掉\n\t\t\t// },\n\t\t\ttimeout: 30000, //请求超时时间\n\t\t\tsuccessFunc: function successFunc(res) {\n\t\t\t\t//上传成功回调函数\n\t\t\t\tconsole.log('成功回调', res);\n\t\t\t},\n\t\t\terrorFunc: function errorFunc(res) {\n\t\t\t\t//上传失败回调函数\n\t\t\t\tconsole.log('失败回调', res);\n\t\t\t},\n\t\t\tdeleteFunc: function deleteFunc(res) {\n\t\t\t\t//删除文件回调函数\n\t\t\t\tconsole.log('删除回调', res);\n\t\t\t}\n\t\t});\n\t}\n\tfileFun();\n}\nfunction tatbInit($id, $main) {\n\treturn true;\n}\n//批量操作加权\nfunction batchFun(me) {\n\tvar getAll = getAllids();\n\tvar getAllS = getAll.split(\"|\"),\n\t    id = getAllS[0];\n\t//var dstext = $(this).attr(\"data-text\");\n\tif (id == \"\") {\n\t\tshowMsg('选择要删除目录！');\n\t} else {\n\t\t//confirmData(id)\n\t\tshowMsg(\"删除成功！ id=\" + id);\n\t}\n}\n//批量选取id\nfunction getAllids() {\n\tvar checkbox = $(\".checkbox\");\n\tvar id = \"\",\n\t    num = \"\";\n\tfor (var i = 0; i < checkbox.length; i++) {\n\t\tvar $this = checkbox[i];\n\t\tif ($this.checked) {\n\t\t\tnum = num + $this.value + \",\";\n\t\t\tid = id + $this.id + \",\";\n\t\t}\n\t}\n\treturn id.slice(0, -1) + \"|\" + num.slice(0, -1);\n}\nfunction init() {\n\tbindEvents();\n}\ninit();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/resource/js/ipAdd.js?");

/***/ })

/******/ });