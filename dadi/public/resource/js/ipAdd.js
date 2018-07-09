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
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../css/ipAdd.scss */ \"./src/resource/css/ipAdd.scss\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar util = __webpack_require__(/*! ./common/util.js */ \"./src/resource/js/common/util.js\");\n\nvar rightNewsTpl = __webpack_require__(/*! ../tpl/item-right-news.tpl */ \"./src/resource/tpl/item-right-news.tpl\");\nvar htTpl = __webpack_require__(/*! ../tpl/ht.tpl */ \"./src/resource/tpl/ht.tpl\");\nvar worksListTpl = __webpack_require__(/*! ../tpl/item-works-list.tpl */ \"./src/resource/tpl/item-works-list.tpl\");\nvar obligeeListTpl = __webpack_require__(/*! ../tpl/item-obligee-list.tpl */ \"./src/resource/tpl/item-obligee-list.tpl\");\nvar data1 = [_defineProperty({\n\t\"ly\": \"自制\",\n\t\"zt\": \"XXX\",\n\t\"nro\": \"这里是内容\",\n\t\"bz\": \"20%\",\n\t\"zy\": \"是\",\n\t\"wq\": \"有\",\n\t\"sq\": \"有\",\n\t\"ht\": \"有\",\n\t\"lx\": \"复制权\",\n\t\"fs\": \"无限制\",\n\t\"qd\": \"无限制\",\n\t\"dy\": \"无限制\",\n\t\"cs\": \"1\",\n\t\"yy\": \"中文\",\n\t\"ks\": \"1990-10-22\",\n\t\"js\": \"1990-10-22\",\n\t\"ms\": \"这里是描述这里是描述\"\n}, 'bz', \"备注备注备注备注备注备注备注备注备注\"), _defineProperty({\n\t\"ly\": \"自制\",\n\t\"zt\": \"XXX\",\n\t\"nro\": \"这里是内容\",\n\t\"bz\": \"20%\",\n\t\"zy\": \"是\",\n\t\"wq\": \"有\",\n\t\"sq\": \"有\",\n\t\"ht\": \"有\",\n\t\"lx\": \"复制权\",\n\t\"fs\": \"无限制\",\n\t\"qd\": \"无限制\",\n\t\"dy\": \"无限制\",\n\t\"cs\": \"1\",\n\t\"yy\": \"中文\",\n\t\"ks\": \"1990-10-22\",\n\t\"js\": \"1990-10-22\",\n\t\"ms\": \"这里是描述这里是描述\"\n}, 'bz', \"备注备注备注备注备注备注备注备注备注\")];\nvar data2 = [_defineProperty({\n\t\"ly\": \"自制\",\n\t\"zt\": \"XXX\",\n\t\"nro\": \"这里是内容\",\n\t\"bz\": \"20%\",\n\t\"zy\": \"是\",\n\t\"wq\": \"有\",\n\t\"sq\": \"有\",\n\t\"ht\": \"有\",\n\t\"lx\": \"复制权\",\n\t\"fs\": \"无限制\",\n\t\"qd\": \"无限制\",\n\t\"dy\": \"无限制\",\n\t\"cs\": \"1\",\n\t\"yy\": \"中文\",\n\t\"ks\": \"1990-10-22\",\n\t\"js\": \"1990-10-22\",\n\t\"ms\": \"这里是描述这里是描述\"\n}, 'bz', \"备注备注备注备注备注备注备注备注备注\")];\nvar data3 = [{\n\t\"num\": \"XXXXXXX189675456WSPD\",\n\t\"name\": \"《嗨！看电视》2018XXX采购合同\",\n\t\"qTime\": \"2018-03-23\",\n\t\"sTime\": \"2018-03-23\",\n\t\"sxTime\": \"2018-03-23\"\n}, {\n\t\"num\": \"XXXXXXX189675456WSPD\",\n\t\"name\": \"《嗨！看电视》2018XXX采购合同\",\n\t\"qTime\": \"2018-03-23\",\n\t\"sTime\": \"2018-03-23\",\n\t\"sxTime\": \"2018-03-23\"\n}, {\n\t\"num\": \"XXXXXXX189675456WSPD\",\n\t\"name\": \"《嗨！看电视》2018XXX采购合同\",\n\t\"qTime\": \"2018-03-23\",\n\t\"sTime\": \"2018-03-23\",\n\t\"sxTime\": \"2018-03-23\"\n}];\nvar data4 = [{\n\t\"name\": \"张三\",\n\t\"type\": \"词作者\",\n\t\"fu\": \"否\",\n\t\"mony\": \"人民币\",\n\t\"jine\": \"100元\"\n}, {\n\t\"name\": \"张三\",\n\t\"type\": \"词作者\",\n\t\"fu\": \"否\",\n\t\"mony\": \"人民币\",\n\t\"jine\": \"100元\"\n}];\n\n//默认展示列表\nfunction workslist() {\n\tvar listData = [{\n\t\t\"id\": 0,\n\t\t\"zt\": 0,\n\t\t\"name\": \"孔子\",\n\t\t\"type\": \"电影\",\n\t\t\"fu\": \"大地之作有点公司\",\n\t\t\"mony\": \"采购\",\n\t\t\"jine\": \"出版发行\"\n\t}, {\n\t\t\"id\": 1,\n\t\t\"zt\": 1,\n\t\t\"name\": \"孔子\",\n\t\t\"type\": \"电影\",\n\t\t\"fu\": \"大地之作有点公司\",\n\t\t\"mony\": \"采购\",\n\t\t\"jine\": \"出版发行\"\n\t}];\n\t$(\"#works-list\").html(worksListTpl(listData));\n}\n\nfunction bindEvents() {\n\tvar $doc = $(document);\n\t//合同信息\n\t// $doc.on(\"change\", \"#right-news\", function(){\n\t// \tvar $this = $(this);\n\t// \tvar $div = $this.parents(\".btn-group\"),\n\t// \t\t$button = $div.next(\"button\"),\n\t// \t\t$btnOperation = $div.nextAll(\".btn-operation\");\n\t// \tvar val = $this.val();\n\t// \tif(val == 0){\n\t// \t\t//是\n\t// \t\t$button.removeAttr(\"disabled\");\n\t// \t\t$btnOperation.hide();\n\t// \t}else{\n\t// \t\t$button.attr(\"disabled\", \"disabled\");\n\t// \t\t$btnOperation.show();\n\t// \t}\n\t// })\n\t// $doc.on(\"click\", \".hetong li\", function(){\n\t// \t$(this).addClass(\"active\").siblings().removeClass(\"active\")\n\t// })\n\t//列表操作\n\t//列表删除\n\t$doc.on(\"click\", \".worksList-dele\", function () {\n\t\tvar $this = $(this),\n\t\t    id = $this.parent(\"td\").attr(\"id\");\n\t\t$.ajax({\n\t\t\ttype: \"POST\",\n\t\t\turl: \"\",\n\t\t\tdata: {\n\t\t\t\tid: id\n\t\t\t},\n\t\t\tdataType: \"json\",\n\t\t\tcache: false,\n\t\t\tsuccess: function success(res) {\n\t\t\t\tif (res && res.errno == 0) {}\n\t\t\t},\n\t\t\terror: function error() {}\n\t\t});\n\t});\n\t//权利变更\n\tvar $modalPObligee = $(\"#modal-p-obligee\"),\n\t    $modalPAuthorizedPerson = $(\"#modal-p-authorized-person\"),\n\t    $modalNAuthorizingPerson = $(\"#modal-n-authorizing-person\"),\n\t    $modalNAuthorizedPerson = $(\"#modal-n-authorized-person\"),\n\t    $modalBAuthorization = $(\"#modal-b-authorization\");\n\t$('#dit-bg').on('show.bs.modal', function () {\n\t\t// 执行一些动作...\n\t\t$modalPObligee.val(\"11111\");\n\t\t$modalPAuthorizedPerson.val(\"22222\");\n\t});\n\t$doc.on(\"click\", \"#modal-b-authorization\", function () {\n\t\tvar val1 = $modalNAuthorizingPerson.val(),\n\t\t    val2 = $modalNAuthorizedPerson.val();\n\t\tif (util.isEmpty(val1) || util.isEmpty(val2)) {\n\t\t\tutil.showMsg('不能为空');\n\t\t}\n\t\t$.ajax({\n\t\t\ttype: \"POST\",\n\t\t\turl: \"\",\n\t\t\tdata: {\n\t\t\t\tid: id,\n\t\t\t\tval1: val1,\n\t\t\t\tcal2: val2\n\t\t\t},\n\t\t\tdataType: \"json\",\n\t\t\tcache: false,\n\t\t\tsuccess: function success(res) {\n\t\t\t\tif (res && res.errno == 0) {\n\n\t\t\t\t\t$('#modal-detailsContract').modal('hide');\n\t\t\t\t}\n\t\t\t},\n\t\t\terror: function error(_error) {\n\t\t\t\tutil.showMsg(_error);\n\t\t\t}\n\t\t});\n\t});\n\n\t//新增作品\n\tvar $cont1 = $(\".content-01\"),\n\t    $cont2 = $(\".content-02\");\n\t$doc.on(\"click\", \".btn-adda\", function () {\n\t\t$cont1.hide();\n\t\t$cont2.show();\n\t});\n\t//梗概权利许可全选反选\n\t$doc.on(\"click\", \".batch\", function () {\n\t\tutil.checkB($(this), \"checkbox\");\n\t\t// if($(this).hasClass(\"cut\")){\n\t\t// \t$(\"input[name='checkbox']\").removeAttr(\"checked\");\n\t\t// \t$(this).removeClass(\"cut\")\n\t\t// }else{\n\t\t// \t$(\"input[name='checkbox']\").attr(\"checked\",\"true\");\n\t\t// \t$(this).addClass(\"cut\")\n\t\t// }\n\t});\n\n\t//梗概权利许可批量删除\n\t$doc.on(\"click\", \"#delete\", function () {\n\t\tbatchFun($(this));\n\t});\n\t//作品权利信息\n\t//查询引用\n\t$(\"#query-reference\").on(\"click\", function () {\n\t\tvar $val = $(\"input[name='news']:checked\").val();\n\t\tif ($val == 0) {\n\t\t\t$('#modal-choiceContracts').modal('show');\n\t\t} else {\n\t\t\tutil.showMsg('选择权利来源！');\n\t\t}\n\t});\n\t//来源于权利\n\t$doc.on(\"change\", \".sel-ly\", function () {\n\t\tvar $this = $(this);\n\t\tvar $val = $(\"input[name='news']:checked\").val();\n\t\tif ($val == 1) {\n\t\t\t$(\".right-news\").html(rightNewsTpl(data2));\n\t\t\t//util.pageinator(\"pageLimit\", \"10\", \"url\", tplData);\n\t\t} else {\n\t\t\tutil.showMsg('选择权利来源！');\n\t\t}\n\t});\n\t//选择合同\n\t//搜索\n\t$doc.on(\"click\", \".btn-ht\", function () {\n\t\tvar vla = $(\"#ht-name\").val();\n\t\tif (vla == 1) {\n\t\t\t$(\".htn-list\").html(htTpl(data3));\n\t\t} else if (val == 2) {\n\t\t\t$(\".htn-list\").html('<a class=\"cjht\" data-toggle=\"modal\" data-target=\"#modal-createContract\">创建合同</a>');\n\t\t} else {\n\t\t\tutil.showMsg('不能为空');\n\t\t}\n\n\t\t// if(util.isEmpty(val())){\n\t\t// \tutil.showMsg('不能为空')\n\t\t// }else{\n\t\t// \t$.ajax({\n\t\t// \t\ttype: \"GET\",\n\t\t// \t\turl: \"\",\n\t\t// \t\tdata: {\n\t\t// \t\t\tname: \"name\"\n\t\t// \t\t},\n\t\t// \t\tdataType: \"json\",\n\t\t// \t\tcache: false,\n\t\t// \t\tsuccess: function(res) {\n\t\t// \t\t\tif(res && res.errno ==0){\n\t\t// \t\t\t\t$(\".htn-list\").html(htTpl(data3));\n\t\t// \t\t\t}else{\n\t\t// \t\t\t\t$(\".htn-list\").html('<a class=\"cjht\" data-toggle=\"modal\" data-target=\"#modal-createContract\">创建合同</a>');\n\t\t// \t\t\t}\n\t\t// \t\t},\n\t\t// \t\terror: function(error){\n\t\t// \t\t\tutil.showMsg(error)\n\t\t// \t\t}\n\t\t// \t});\t\t\n\t\t// }\n\n\t\t//util.pageinator(\"pageLimit2\", \"10\", \"url\", tplData2);\n\t});\n\t//选取\n\t$(\".ipadd\").on(\"click\", \".btn-primary\", function () {\n\t\t$(\".right-news\").html(rightNewsTpl(data1));\n\t\tvar $val = $(\"input[name='htong']:checked\").val();\n\t\t$(\".htNews\").val($val);\n\t\t$('#modal-choiceContracts').modal('hide');\n\t\t//util.pageinator(\"pageLimit\", \"10\", \"url\", tplData);\n\t});\n\t//合同详情选取\n\t$doc.on(\"click\", \".btn-xqu\", function () {\n\t\t$('#modal-detailsContract').modal('hide');\n\t\t$(\".table-01\").show();\n\t});\n\t//创建合同\n\t// 创建合同、无权利信确认\n\t$doc.on(\"click\", \".btn-cjqr\", function () {\n\t\t$('#modal-createContract').modal('hide');\n\t\t$(\".htn-list\").html(htTpl(data3));\n\t});\n\t//合同下一步\\提交\n\tvar $stepa = $(\".stepa li\");\n\t$doc.on(\"click\", \".next-stepa\", function () {\n\t\tvar $this = $(this);\n\t\tif ($this.hasClass(\"next-step-01\")) {\n\t\t\t//第一步\n\t\t\tvar $contractNumVal = $(\"#contract-num\").val(),\n\t\t\t    $contractSubVal = $(\"#contract-sub\").val(),\n\t\t\t    $contractNameVal = $(\"#contract-name\").val(),\n\t\t\t    $contractMoneyVal = $(\"#contract-money\").val(),\n\t\t\t    $contractSigningTimeVal = $(\"#contract-signing-time input\").val(),\n\t\t\t    $contractYakeTimeVal = $(\"#contract-take-time input\").val(),\n\t\t\t    $contractInvalidTimeVal = $(\"#contract-invalid-time input\").val(),\n\t\t\t    $contractYesTimeVal = $(\"#contract-yes-time input\").val(),\n\t\t\t    $contractPaymentPlanVal = $(\"#contract-payment-plan\").val(),\n\t\t\t    $contractPaymentMethodVal = $(\"#contract-payment-method\").val(),\n\t\t\t    $contractNotesVal = $(\"#contract-notes\").val(),\n\t\t\t    $contractPartyPistHtml = $(\".contract-party-list\").html();\n\t\t\tif (util.isEmpty($contractNumVal) || util.isEmpty($contractSubVal) || util.isEmpty($contractNameVal) || util.isEmpty($contractMoneyVal) || util.isEmpty($contractSigningTimeVal) || util.isEmpty($contractYakeTimeVal) || util.isEmpty($contractInvalidTimeVal) || util.isEmpty($contractYesTimeVal) || util.isEmpty($contractPaymentPlanVal) || util.isEmpty($contractPaymentMethodVal) || util.isEmpty($contractNotesVal) || util.isEmpty($contractPartyPistHtml)) {\n\t\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\t\treturn;\n\t\t\t} else {}\n\t\t} else if ($this.hasClass(\"next-step-02\")) {\n\t\t\t//第二步\n\t\t\tvar $qlnewsListHtml = $(\".qlnews-list\").html();\n\t\t\tif (util.isEmpty($qlnewsListHtml)) {\n\t\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\t\treturn;\n\t\t\t} else {}\n\t\t} else {\n\t\t\t//提交\n\t\t\tvar $contractAppendicesListtHtml = $(\"#contract-appendices-list\").html();\n\t\t\tif (util.isEmpty($contractAppendicesListtHtml)) {\n\t\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\t\treturn;\n\t\t\t} else {}\n\t\t}\n\n\t\tnextBtn($this);\n\t});\n\t//合同签约方\n\t$doc.on(\"click\", \".modal-contract-btn\", function () {\n\t\tvar $modalContractPartyVal = $(\"#modal-contract-party\").val(),\n\t\t    $modalContractNameVal = $(\"#modal-contract-name\").val(),\n\t\t    $modalContractIphoneVal = $(\"#modal-contract-iphone\").val(),\n\t\t    $modalContractPepoVal = $(\"#modal-contract-pepo\").val(),\n\t\t    $modalContractDizVal = $(\"#modal-contract-diz\").val();\n\t\tif (util.isEmpty($modalContractPartyVal) || util.isEmpty($modalContractNameVal) || util.isEmpty($modalContractIphoneVal) || util.isEmpty($modalContractPepoVal) || util.isEmpty($modalContractDizVal)) {\n\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\treturn;\n\t\t} else {\n\n\t\t\t$('#modal-signatoryInformation').modal('hide');\n\t\t}\n\t});\n\t//权利信息新增\n\t$doc.on(\"click\", \".modal-right-info-btn\", function () {\n\t\tvar $modalRightInfoNumbVal = $(\"#modal-right-info-numb\").val(),\n\t\t    $modalRightInfoNameVal = $(\"#modal-right-info-name\").val(),\n\t\t    $modalRightInfoTypeVal = $(\"#modal-right-info-type\").val(),\n\t\t    $modalRightStartTimeVal = $(\"#modal-right-start-time input\").val(),\n\t\t    $modalRightInfoCpzVal = $(\"#modal-right-info-cpz\").val(),\n\t\t    $modalRightInfoCpmVal = $(\"#modal-right-info-cpm\").val(),\n\t\t    $modalRightInfoJigouVal = $(\"#modal-right-info-jigou\").val(),\n\t\t    $modalRghtDjTimeVal = $(\"#modal-right-dj-time input\").val(),\n\t\t    $modalRightInfoSetVal = $(\"#modal-right-info-set\").val(),\n\t\t    $modalRightInfoUntilVal = $(\"#modal-right-info-until\").val(),\n\t\t    $modalRightInfoSVal = $(\"#modal-right-info-s\").val(),\n\t\t    $modalRightInfoSqrVal = $(\"#modal-right-info-sqr\").val(),\n\t\t    $modalRightInfoSqpVal = $(\"#modal-right-info-sqp\").val(),\n\t\t    $modalRightInfoSqmVal = $(\"#modal-right-info-sqm\").val(),\n\t\t    $modalRightInfoQldescVal = $(\"#modal-right-info-qldesc\").val(),\n\t\t    $modalRightInfoProVal = $(\"#modal-right-info-pro\").val(),\n\t\t    $modalRightInfoMonVal = $(\"#modal-right-info-mon\").val(),\n\t\t    $datetimeStartVal = $(\"#datetimeStart\").val(),\n\t\t    $datetimeEndVal = $(\"#datetimeEnd\").val(),\n\t\t    $modalRightInfoDescVal = $(\"#modal-right-info-desc\").val(),\n\t\t    $modalRightInfoRemarksVal = $(\"#modal-right-info-remarks\").val(),\n\t\t    $modalRightInfoFVal = $(\"#modal-right-info-f\").val();\n\t\tvar $limitVal = $(\"input[name='limit']:checked\").val(),\n\t\t    $limit1Val = $(\"input[name='limit1']:checked\").val(),\n\t\t    $limit3Val = $(\"input[name='limit3']:checked\").val(),\n\t\t    $limit4Val = $(\"input[name='limit4']:checked\").val(),\n\t\t    mode0 = show(\"mode0\"),\n\t\t    region = show(\"region\"),\n\t\t    language = show(\"language\"),\n\t\t    mode = show(\"mode\");\n\t\tif (util.isEmpty($modalRightInfoNumbVal) || util.isEmpty($modalRightInfoNameVal) || util.isEmpty($modalRightInfoTypeVal) || util.isEmpty($modalRightStartTimeVal) || util.isEmpty($modalRightInfoCpzVal) || util.isEmpty($modalRightInfoCpmVal) || util.isEmpty($modalRightInfoJigouVal) || util.isEmpty($modalRghtDjTimeVal) || util.isEmpty($modalRightInfoSetVal) || util.isEmpty($modalRightInfoUntilVal) || util.isEmpty($modalRightInfoSVal) || util.isEmpty($modalRightInfoSqrVal) || util.isEmpty($modalRightInfoSqpVal) || util.isEmpty($modalRightInfoSqmVal) || util.isEmpty($modalRightInfoQldescVal) || util.isEmpty($modalRightInfoProVal) || util.isEmpty($modalRightInfoMonVal) || util.isEmpty($datetimeStartVal) || util.isEmpty($datetimeEndVal) || util.isEmpty($modalRightInfoDescVal) || util.isEmpty($modalRightInfoRemarksVal) || util.isEmpty($modalRightInfoFVal) || util.isEmpty($limitVal) || util.isEmpty($limit1Val) || util.isEmpty($limit3Val) || util.isEmpty($limit4Val) || util.isEmpty($mode0) || util.isEmpty($region) || util.isEmpty($language) || util.isEmpty($mode)) {\n\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\treturn;\n\t\t} else {\n\n\t\t\t$('#modal-newly-added1').modal('hide');\n\t\t}\n\t});\n\t$doc.on(\"click\", \".pre-stepa\", function () {\n\t\tvar $this = $(this);\n\t\tpreBtn($this);\n\t});\n\t// $doc.on(\"click\", \".ip-click\", function(){\n\t// \tlocation.href = \"ipdetails.html\"\n\t// })\n\n\t//作品下一步\\提交\n\tvar $step = $(\".step li\");\n\t$doc.on(\"click\", \".next-step\", function () {\n\t\tvar $this = $(this);\n\t\tif ($this.hasClass(\"next-step-01\")) {\n\t\t\t//第一步\n\t\t\tvar $workIdVal = $(\"#work-id\").val(),\n\t\t\t    $workNameVal = $(\"#work-name\").val(),\n\t\t\t    $workTypeVal = $(\"#work-type\").val(),\n\t\t\t    $themeTypeVal = $(\"#theme-type\").val(),\n\t\t\t    $lenghtTimeVal = $(\"#lenght-time\").val(),\n\t\t\t    $publicTimeVal = $(\"#public-time input\").val(),\n\t\t\t    $creationTimeVal = $(\"#creation-time input\").val(),\n\t\t\t    $albumVal = $(\"#album\").val(),\n\t\t\t    $originalScriptVal = $(\"#original-script\").val(),\n\t\t\t    $versionDescriptionVal = $(\"#version-description\").val(),\n\t\t\t    $worksDescVal = $(\"#works-desc\").val(),\n\t\t\t    $obligeeListHtml = $(\".obligee-list\").html();\n\t\t\tif (util.isEmpty($workIdVal) || util.isEmpty($workNameVal) || util.isEmpty($workTypeVal) || util.isEmpty($themeTypeVal) || util.isEmpty($lenghtTimeVal) || util.isEmpty($publicTimeVal) || util.isEmpty($creationTimeVal) || util.isEmpty($albumVal) || util.isEmpty($originalScriptVal) || util.isEmpty($versionDescriptionVal) || util.isEmpty($worksDescVal) || util.isEmpty($obligeeListHtml)) {\n\t\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\t\treturn;\n\t\t\t} else {}\n\t\t} else if ($this.hasClass(\"next-step-02\")) {\n\t\t\t//第二步\n\t\t\tvar $rightNewsHtml = $(\".right-news\").html();\n\t\t\tif (util.isEmpty($rightNewsHtml)) {\n\t\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\t\treturn;\n\t\t\t} else {}\n\t\t} else {\n\t\t\t//提交\n\t\t\tvar $enclosureListHtml = $(\"#enclosure-list\").html();\n\t\t\tif (util.isEmpty($enclosureListHtml)) {\n\t\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\t\treturn;\n\t\t\t} else {}\n\t\t}\n\n\t\tnextBtn($this);\n\t});\n\t$doc.on(\"click\", \".pre-step\", function () {\n\t\tvar $this = $(this);\n\t\tpreBtn($this);\n\t});\n\n\t//作品名称模糊搜索\n\tvar $selectDiv = $('.select-div');\n\t$(\"#work-name\").keyup(function (e) {\n\t\tvar $this = $(this);\n\t\t//如果输入空格自动删除\n\t\tthis.value = $this.val().replace(' ', '');\n\t\tconsole.log(this.value);\n\t\t//列表框显示\n\t\t$selectDiv.show();\n\t\tif (e.keyCode == 38) {\n\t\t\t//up\n\t\t\tconsole.log('up');\n\t\t} else if (e.keyCode == 40) {\n\t\t\t//down\n\t\t\tconsole.log('down');\n\t\t} else if (e.keyCode == 13) {\n\t\t\t//enter\n\t\t\tconsole.log('enter');\n\t\t\t$selectDiv.hide();\n\t\t} else {\n\t\t\t//other\n\t\t\tconsole.log('other');\n\t\t}\n\t});\n\t//权利人列表选取\t\n\t$selectDiv.on(\"click\", \"li\", function () {\n\t\t$(\".obligee-list\").html(obligeeListTpl(data4));\n\t\t$selectDiv.hide();\n\t});\n\tvar qlListJson = [];\n\t//权利人列表新增\n\tvar $modalObligeeName = $(\"#modal-obligee-name\"),\n\t    $modalObligeeType = $(\"#modal-obligee-type\"),\n\t    $modalObligeeRemuneration = $(\"#modal-obligee-remuneration\"),\n\t    $modalObligeeCurrency = $(\"#modal-obligee-currency\"),\n\t    $modalObligeeMoney = $(\"#modal-obligee-money\"),\n\t    $btnListQr = $(\".btn-List-qr\");\n\t//弹框提交\n\t$doc.on(\"click\", \".btn-List-qr\", function () {\n\t\tvar $modalObligeeNameVal = $modalObligeeName.val(),\n\t\t    $modalObligeeTypeVal = $modalObligeeType.val(),\n\t\t    $modalObligeeRemunerationVal = $modalObligeeRemuneration.val(),\n\t\t    $modalObligeeCurrencyVal = $modalObligeeCurrency.val(),\n\t\t    $modalObligeeMoneyVal = $modalObligeeMoney.val();\n\t\tif (util.isEmpty($modalObligeeNameVal) || util.isEmpty($modalObligeeTypeVal) || util.isEmpty($modalObligeeRemunerationVal) || util.isEmpty($modalObligeeCurrencyVal) || util.isEmpty($modalObligeeMoneyVal)) {\n\t\t\tutil.showMsg(\"不能为空！\");\n\t\t\treturn;\n\t\t} else {\n\t\t\tvar $id = $(this).attr(\"id\");\n\t\t\tvar qlListData = {\n\t\t\t\tname: $modalObligeeNameVal,\n\t\t\t\ttype: $modalObligeeTypeVal,\n\t\t\t\tremuneration: $modalObligeeRemunerationVal,\n\t\t\t\tcurrency: $modalObligeeCurrencyVal,\n\t\t\t\tmoney: $modalObligeeMoneyVal\n\t\t\t};\n\t\t\tif (qlListJson.length > 0) {\n\t\t\t\t//有数据判断是修改还是增加\n\t\t\t\tfor (var i = 0; i < qlListJson.length; i++) {\n\t\t\t\t\tvar json = qlListJson[i];\n\t\t\t\t\tif (json && json.id == $id) {\n\t\t\t\t\t\t//修改\n\t\t\t\t\t\t$.extend(json, qlListData);\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t//增加\n\t\t\t\t\t\tqlListData.id = Math.round(new Date().getTime() / 1000);\n\t\t\t\t\t\tqlListJson.push(qlListData);\n\t\t\t\t\t\t//qlListJson[qlListData.id] = qlListData;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t//增加\n\t\t\t\tqlListData.id = Math.round(new Date().getTime() / 1000);\n\t\t\t\tqlListJson.push(qlListData);\n\t\t\t\t//qlListJson[qlListData.id] = qlListData;\n\t\t\t}\n\n\t\t\t$(\".obligee-list\").html(obligeeListTpl(qlListJson));\n\t\t\t$('#modal-qbligeeAdd').modal('hide');\n\t\t}\n\t});\n\t//修改\n\t$doc.on(\"click\", \".btn-obligee-list-edit\", function () {\n\t\tvar id = $(this).parents(\"tr\").attr(\"id\");\n\t\tfor (var i = 0; i < qlListJson.length; i++) {\n\t\t\tvar json = qlListJson[i];\n\t\t\tif (json.id == id) {\n\t\t\t\t$btnListQr.attr(\"id\", json.id);\n\t\t\t\t$modalObligeeName.val(json.name);\n\t\t\t\t$modalObligeeType.val(json.type);\n\t\t\t\t$modalObligeeRemuneration.val(json.remuneration);\n\t\t\t\t$modalObligeeCurrency.val(json.currency);\n\t\t\t\t$modalObligeeMoney.val(json.money);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t});\n\t// $doc.on(\"click\", \".obligee-checkbox-btn\", function(){\n\t// \tutil.checkB($(this), \"obligee-checkbox\")\n\t// })\n\t//删除\n\t$doc.on(\"click\", \".btn-obligee-list-dele\", function () {\n\t\tvar idArr = show(\"obligee-checkbox\");\n\t\tvar len = idArr.length;\n\t\tif (len <= 0) {\n\t\t\treturn;\n\t\t};\n\t\tfor (var _i = 0; _i < len; _i++) {\n\t\t\tvar _id = idArr[_i];\n\t\t\tif (_id != 0) {\n\t\t\t\tfor (var _i = 0; _i < qlListJson.length; _i++) {\n\t\t\t\t\tvar json = qlListJson[_i];\n\t\t\t\t\tif (json && json.id == _id) {\n\t\t\t\t\t\tqlListJson.splice(_i, 1); //删除下标为i的元素\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t$(\".obligee-list\").html(obligeeListTpl(qlListJson));\n\t});\n\t// $doc.on(\"click\", \".basics .add\", function(){\t\t\n\t// \tvar $this = $(this);\n\t// \tvar $formLen = $(\".form-3\").length;\n\t// \tvar $div = $this.parent(\"div\");\n\t// \tif($formLen < 3){\n\t// \t\t$div.after($div.clone())\n\t// \t}\t\t\n\t// })\n\t// $doc.on(\"click\", \".basics .delete\", function(){\n\t// \tvar $this = $(this);\n\t// \tvar $formLen = $(\".form-3\").length;\n\t// \tvar $div = $this.parent(\"div\");\n\t// \tif($formLen > 1){\n\t// \t\t$div.remove();\n\t// \t}\n\t// })\n\t//time\n\tutil.timepicker(\"public-time\");\n\tutil.timepicker(\"creation-time\");\n\tutil.timepicker(\"contract-signing-time\");\n\tutil.timepicker(\"contract-take-time\");\n\tutil.timepicker(\"contract-invalid-time\");\n\tutil.timepicker(\"contract-yes-time\");\n\tutil.timepicker(\"modal-right-start-time\");\n\tutil.timepicker(\"modal-right-dj-time\");\n\n\tutil.timepickerSection(\"datetimeStart\", \"datetimeEnd\");\n\t// $('#pageLimit').bootstrapPaginator({    \n\t// \tcurrentPage: 1,//当前页码\n\t// \ttotalPages: 10,//总页码\n\t// \tsize:\"normal\",\n\t// \tbootstrapMajorVersion: 3,//bootstrap版本\n\t// \talignment:\"right\",\n\t// \tnumberOfPages:5,//一页显示几个按钮\n\t// \titemTexts: function(type, page, current){\n\t// \t\tswitch (type){ \n\t// \t\t\tcase \"first\": return \"首页\";\n\t// \t\t\tcase \"prev\": return \"上一页\";\n\t// \t\t\tcase \"next\": return \"下一页\";\n\t// \t\t\tcase \"last\": return \"末页\";\n\t// \t\t\tcase \"page\": return page;\n\t// \t\t}\n\t// \t},\n\t// \tonPageClicked: function(event, originalEvent, type, page){\n\t// \t\tconsole.log(page)\n\t// \t\t$.ajax({\n\t// \t\t\turl: '',\n\t// \t\t\ttype: 'post',\n\t// \t\t\tdata: {page: page},\n\t// \t\t\tdataType: 'json',\n\t// \t\t\tsuccess: function (data) {\n\t// \t\t\t\ttplData(data);//处理成功返回的数据\n\t// \t\t\t}\n\t// \t\t});\n\t// \t}\n\t// });\n\t//pages\t\n\tutil.pageinator(\"pageLimit\", \"10\", \"url\", tplData);\n\tutil.pageinator(\"pageLimit1\", \"10\", \"url\", tplData1);\n\tutil.pageinator(\"pageLimit2\", \"10\", \"url\", tplData2);\n\tutil.pageinator(\"pageLimit3\", \"10\", \"url\", tplData3);\n\tutil.pageinator(\"pageLimit4\", \"10\", \"url\", tplData);\n\tutil.pageinator(\"pageLimit5\", \"10\", \"url\", tplData);\n\tutil.pageinator(\"pageLimit6\", \"10\", \"url\", tplData);\n}\n//下一步\nfunction nextBtn(me) {\n\tvar $main = me.parents(\".main\"),\n\t    $nextMain = $main.next(\".main\");\n\tvar index = $main.index();\n\t$stepa.eq(++index).addClass(\"active\").siblings().removeClass(\"active\");\n\t$main.hide();\n\t$nextMain.show();\n}\n//上一步\nfunction preBtn(me) {\n\tvar $main = me.parents(\".main\"),\n\t    $pretMain = $main.prev(\".main\");\n\tvar index = $main.index();\n\t$stepa.eq(--index).addClass(\"active\").siblings().removeClass(\"active\");\n\t$main.hide();\n\t$pretMain.show();\n}\nfunction tplData(data) {\n\tconsole.log(data);\n}\nfunction tplData1(data) {\n\tconsole.log(data);\n}\nfunction tplData2(data) {\n\tconsole.log(data);\n}\nfunction tplData3(data) {\n\tconsole.log(data);\n}\nfunction fuzzySearch(e) {\n\tconsole.log(e);\n}\n//上传\nfunction fileUpload() {\n\tvar url = \"11111111\";\n\tvar fileRes = util.fileFun(url);\n\tconsole.log(fileRes);\n}\nfileUpload();\nwindow.formatState = function (state) {\n\tstate = parseInt(state);\n\tswitch (state) {\n\t\tcase 0:\n\t\t\treturn '待审核';\n\t\tcase 1:\n\t\t\treturn '已通过';\n\t\tcase 2:\n\t\t\treturn '未通过';\n\t}\n};\n//批量删除\nfunction batchFun(me) {\n\tvar getAll = getAllids();\n\tvar getAllS = getAll.split(\"|\"),\n\t    id = getAllS[0];\n\t//var dstext = $(this).attr(\"data-text\");\n\tif (id == \"\") {\n\t\tutil.showMsg('选择要删除目录！');\n\t} else {\n\t\t//confirmData(id)\n\t\tutil.showMsg(\"删除成功！ id=\" + id);\n\t}\n}\n//批量选取id\nfunction getAllids() {\n\tvar checkbox = $(\".checkbox\");\n\tvar id = \"\",\n\t    num = \"\";\n\tfor (var i = 0; i < checkbox.length; i++) {\n\t\tvar $this = checkbox[i];\n\t\tif ($this.checked) {\n\t\t\tnum = num + $this.value + \",\";\n\t\t\tid = id + $this.id + \",\";\n\t\t}\n\t}\n\treturn id.slice(0, -1) + \"|\" + num.slice(0, -1);\n}\nfunction show(name) {\n\tvar obj = document.getElementsByName(name) || \"\";\n\tvar check_val = [];\n\tfor (var k in obj) {\n\t\tif (obj[k].checked) check_val.push(obj[k].value);\n\t}\n\treturn check_val;\n}\nfunction init() {\n\tworkslist();\n\tbindEvents();\n}\ninit();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/resource/js/ipAdd.js?");

/***/ }),

/***/ "./src/resource/tpl/item-obligee-list.tpl":
/*!************************************************!*\
  !*** ./src/resource/tpl/item-obligee-list.tpl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(it\n/*``*/) {\nvar encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {\n\t\tvar encodeHTMLRules = { \"&\": \"&#38;\", \"<\": \"&#60;\", \">\": \"&#62;\", '\"': \"&#34;\", \"'\": \"&#39;\", \"/\": \"&#47;\" },\n\t\t\tmatchHTML = doNotSkipEncoded ? /[&<>\"'\\/]/g : /&(?!#?\\w+;)|<|>|\"|'|\\//g;\n\t\treturn function(code) {\n\t\t\treturn code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : \"\";\n\t\t};\n\t}());var out='';var arr1=it;if(arr1){var m,n=-1,l1=arr1.length-1;while(n<l1){m=arr1[n+=1];out+='//'+(m.vid_num || 0)+'<tr id=\"'+encodeHTML(m.id)+'\"><th class=\"th\" scope=\"row\"><input type=\"checkbox\" name=\"obligee-checkbox\"  value=\"'+encodeHTML(m.id)+'\">'+encodeHTML(m.name)+'</th><td>'+encodeHTML(m.type)+'</td><td>'+encodeHTML(m.remuneration)+'</td><td>'+encodeHTML(m.currency)+'</td><td>'+encodeHTML(m.money)+'</td><td><button type=\"button\" class=\"btn btn-default btn-obligee-list-edit\" data-toggle=\"modal\" data-target=\"#modal-qbligeeAdd\"><i class=\"glyphicon glyphicon-pencil\"></i>修改</button></td></tr>';} } return out;\n}\n\n//# sourceURL=webpack:///./src/resource/tpl/item-obligee-list.tpl?");

/***/ }),

/***/ "./src/resource/tpl/item-right-news.tpl":
/*!**********************************************!*\
  !*** ./src/resource/tpl/item-right-news.tpl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(it\n/*``*/) {\nvar encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {\n\t\tvar encodeHTMLRules = { \"&\": \"&#38;\", \"<\": \"&#60;\", \">\": \"&#62;\", '\"': \"&#34;\", \"'\": \"&#39;\", \"/\": \"&#47;\" },\n\t\t\tmatchHTML = doNotSkipEncoded ? /[&<>\"'\\/]/g : /&(?!#?\\w+;)|<|>|\"|'|\\//g;\n\t\treturn function(code) {\n\t\t\treturn code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : \"\";\n\t\t};\n\t}());var out='';var arr1=it;if(arr1){var m,n=-1,l1=arr1.length-1;while(n<l1){m=arr1[n+=1];out+='//'+(m.vid_num || 0)+'<tr> <th scope=\"row\">'+encodeHTML(m.ly)+'</th> <td>'+encodeHTML(m.zt)+'</td> <td>'+encodeHTML(m.nro)+'</td> <td>'+encodeHTML(m.bz)+'</td> <td>'+encodeHTML(m.zy)+'</td> <td>'+encodeHTML(m.wq)+'</td> <td>'+encodeHTML(m.sq)+'</td> <td>'+encodeHTML(m.ht)+'</td> <td>'+encodeHTML(m.lx)+'</td> <td>'+encodeHTML(m.fs)+'</td> <td>'+encodeHTML(m.qd)+'</td> <td>'+encodeHTML(m.dy)+'</td> <td>'+encodeHTML(m.cs)+'</td> <td>'+encodeHTML(m.yy)+'</td> <td>'+encodeHTML(m.ks)+'</td> <td>'+encodeHTML(m.js)+'</td> <td>'+encodeHTML(m.ms)+'</td> <td>'+encodeHTML(m.bz)+'</td>  <td>是</td>  <td>是，仅限移动终端</td>  <td>无限制</td>  <td>合同内文本描述</td>  <td>备注备注备注备注备注备注备注备注备注</td></tr>';} } return out;\n}\n\n//# sourceURL=webpack:///./src/resource/tpl/item-right-news.tpl?");

/***/ }),

/***/ "./src/resource/tpl/item-works-list.tpl":
/*!**********************************************!*\
  !*** ./src/resource/tpl/item-works-list.tpl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(it\n/*``*/) {\nvar encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (function (doNotSkipEncoded) {\n\t\tvar encodeHTMLRules = { \"&\": \"&#38;\", \"<\": \"&#60;\", \">\": \"&#62;\", '\"': \"&#34;\", \"'\": \"&#39;\", \"/\": \"&#47;\" },\n\t\t\tmatchHTML = doNotSkipEncoded ? /[&<>\"'\\/]/g : /&(?!#?\\w+;)|<|>|\"|'|\\//g;\n\t\treturn function(code) {\n\t\t\treturn code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : \"\";\n\t\t};\n\t}());var out='';var arr1=it;if(arr1){var m,n=-1,l1=arr1.length-1;while(n<l1){m=arr1[n+=1];out+='//'+(m.vid_num || 0)+'<tr><th scope=\"row\"><a href=\"ipdetails.html\">'+encodeHTML(m.name)+'</a></th><td>'+encodeHTML(m.type)+'</td><td>'+encodeHTML(m.fu)+'</td><td>'+encodeHTML(m.mony)+'</td><td>'+encodeHTML(m.jine)+'</td><td id=\"'+(m.zt)+'\">'+(formatState(m.zt))+'</td><td id=\"'+encodeHTML(m.id)+'\"><button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modal-changeRights\">权利变更</button><button class=\"btn btn-primary\">修改</button><button class=\"btn btn-default\" class=\"worksList-dele\">删除</button></td></tr>';} } return out;\n}\n\n//# sourceURL=webpack:///./src/resource/tpl/item-works-list.tpl?");

/***/ })

/******/ });