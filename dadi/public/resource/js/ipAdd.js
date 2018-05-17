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

/***/ "./src/resource/css/ipAdd.scss":
/*!*************************************!*\
  !*** ./src/resource/css/ipAdd.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/resource/css/ipAdd.scss?");

/***/ }),

/***/ "./src/resource/js/ipAdd.js":
/*!**********************************!*\
  !*** ./src/resource/js/ipAdd.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../css/ipAdd.scss */ \"./src/resource/css/ipAdd.scss\");\n\nvar util = __webpack_require__(/*! ./common/util.js */ \"./src/resource/js/common/util.js\");\nvar easyUpload = __webpack_require__(/*! ./common/easyUpload.js */ \"./src/resource/js/common/easyUpload.js\");\n\nfunction bindEvents() {\n\tvar $doc = $(document);\n\t//合同信息\n\t$doc.on(\"change\", \"#right-news\", function () {\n\t\tvar $this = $(this);\n\t\tvar $div = $this.parents(\".btn-group\"),\n\t\t    $button = $div.next(\"button\"),\n\t\t    $btnOperation = $div.nextAll(\".btn-operation\");\n\t\tvar val = $this.val();\n\t\tif (val == 0) {\n\t\t\t//是\n\t\t\t$button.removeAttr(\"disabled\");\n\t\t\t$btnOperation.hide();\n\t\t} else {\n\t\t\t$button.attr(\"disabled\", \"disabled\");\n\t\t\t$btnOperation.show();\n\t\t}\n\t});\n\t//下一步\\提交\n\tvar $step = $(\".step li\");\n\t$doc.on(\"click\", \".next-step\", function () {\n\t\tvar $this = $(this);\n\t\tvar $main = $this.parents(\".main\"),\n\t\t    $nextMain = $main.next(\".main\"),\n\t\t    $id = $main.data(\"id\");\n\n\t\tif (tatbInit($id, $main)) {\n\t\t\t$step.eq($id).addClass(\"active\").siblings().removeClass(\"active\");\n\t\t\t$main.hide();\n\t\t\t$nextMain.show();\n\t\t}\n\t});\n\t// $doc.on(\"click\", \".basics .add\", function(){\t\t\n\t// \tvar $this = $(this);\n\t// \tvar $formLen = $(\".form-3\").length;\n\t// \tvar $div = $this.parent(\"div\");\n\t// \tif($formLen < 3){\n\t// \t\t$div.after($div.clone())\n\t// \t}\t\t\n\t// })\n\t// $doc.on(\"click\", \".basics .delete\", function(){\n\t// \tvar $this = $(this);\n\t// \tvar $formLen = $(\".form-3\").length;\n\t// \tvar $div = $this.parent(\"div\");\n\t// \tif($formLen > 1){\n\t// \t\t$div.remove();\n\t// \t}\n\t// })\n\t//time\n\tutil.timepicker(\"datetimepicker1\");\n\n\tutil.timepicker(\"datetimeStart\", \"datetimeEnd\");\n\t// $('#pageLimit').bootstrapPaginator({    \n\t// \tcurrentPage: 1,//当前页码\n\t// \ttotalPages: 10,//总页码\n\t// \tsize:\"normal\",\n\t// \tbootstrapMajorVersion: 3,//bootstrap版本\n\t// \talignment:\"right\",\n\t// \tnumberOfPages:5,//一页显示几个按钮\n\t// \titemTexts: function(type, page, current){\n\t// \t\tswitch (type){ \n\t// \t\t\tcase \"first\": return \"首页\";\n\t// \t\t\tcase \"prev\": return \"上一页\";\n\t// \t\t\tcase \"next\": return \"下一页\";\n\t// \t\t\tcase \"last\": return \"末页\";\n\t// \t\t\tcase \"page\": return page;\n\t// \t\t}\n\t// \t},\n\t// \tonPageClicked: function(event, originalEvent, type, page){\n\t// \t\tconsole.log(page)\n\t// \t\t$.ajax({\n\t// \t\t\turl: '',\n\t// \t\t\ttype: 'post',\n\t// \t\t\tdata: {page: page},\n\t// \t\t\tdataType: 'json',\n\t// \t\t\tsuccess: function (data) {\n\t// \t\t\t\ttplData(data);//处理成功返回的数据\n\t// \t\t\t}\n\t// \t\t});\n\t// \t}\n\t// });\n\t//pages\t\n\tutil.pageinator(\"pageLimit1\", \"10\", \"url\", tplData);\n\tutil.pageinator(\"pageLimit\", \"10\", \"url\", tplData1);\n\tfunction tplData(data) {\n\t\tconsole.log(data);\n\t}\n\tfunction tplData1(data) {\n\t\tconsole.log(data);\n\t}\n\tfunction fileFun() {\n\t\t$('#easyContainer').easyUpload({\n\t\t\tallowFileTypes: '*.jpg;*.doc;*.pdf;*.png', //允许上传文件类型，格式';*.doc;*.pdf'\n\t\t\tallowFileSize: 100000, //允许上传文件大小(KB)\n\t\t\tselectText: '选择文件', //选择文件按钮文案\n\t\t\tmulti: true, //是否允许多文件上传\n\t\t\tmultiNum: 6, //多文件上传时允许的文件数\n\t\t\tshowNote: true, //是否展示文件上传说明\n\t\t\tnote: '提示：最多上传6个文件，支持格式为doc、pdf、jpg、png', //文件上传说明\n\t\t\tshowPreview: false, //是否显示文件预览\n\t\t\turl: '', //上传文件地址\n\t\t\tfileName: 'file', //文件filename配置参数\n\t\t\t//文件filename以外的配置参数，格式：{key1:value1,key2:value2}\n\t\t\t// formParam: {\n\t\t\t// \ttoken: $.cookie('token_cookie')//不需要验证token时可以去掉\n\t\t\t// },\n\t\t\ttimeout: 30000, //请求超时时间\n\t\t\tsuccessFunc: function successFunc(res) {\n\t\t\t\t//上传成功回调函数\n\t\t\t\tconsole.log('成功回调', res);\n\t\t\t},\n\t\t\terrorFunc: function errorFunc(res) {\n\t\t\t\t//上传失败回调函数\n\t\t\t\tconsole.log('失败回调', res);\n\t\t\t},\n\t\t\tdeleteFunc: function deleteFunc(res) {\n\t\t\t\t//删除文件回调函数\n\t\t\t\tconsole.log('删除回调', res);\n\t\t\t}\n\t\t});\n\t}\n\tfileFun();\n}\nfunction tatbInit($id, $main) {\n\treturn true;\n}\n\nfunction init() {\n\tbindEvents();\n}\ninit();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/resource/js/ipAdd.js?");

/***/ })

/******/ });