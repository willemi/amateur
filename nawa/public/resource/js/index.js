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
/******/ 		"index": 0
/******/ 	};
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
/******/ 	deferredModules.push(["./src/resource/js/index.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/resource/css/index.scss":
/*!*************************************!*\
  !*** ./src/resource/css/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/resource/css/index.scss?");

/***/ }),

/***/ "./src/resource/js/index.js":
/*!**********************************!*\
  !*** ./src/resource/js/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../css/index.scss */ \"./src/resource/css/index.scss\");\n\n__webpack_require__(/*! ../css/swiper.css */ \"./src/resource/css/swiper.css\");\n\nvar util = __webpack_require__(/*! ./common/util */ \"./src/resource/js/common/util.js\");\nvar Swiper = __webpack_require__(/*! ./common/swiper.min */ \"./src/resource/js/common/swiper.min.js\");\n\nvar data = [{\n\t\"img\": \"resource/img/banner_01.jpg\",\n\t\"url\": \"#1\",\n\t\"title\": \"1111111111111\"\n}, {\n\t\"img\": \"resource/img/banner_01.jpg\",\n\t\"url\": \"#2\",\n\t\"title\": \"222222222\"\n}];\n\nvar $section1 = $(\".section1\");\nfunction bindEnds() {\n\tvar $doc = $(document);\n\tsetTimeout(function () {\n\t\t$(\"header\").hide();\n\t\t$section1.animate({\n\t\t\t\"height\": 0\n\t\t}, 1500);\n\t}, 5000);\n\tvar s = document.getElementsByClassName(\"waper\");\n\tdocument.addEventListener && document.addEventListener(\"scroll\", function (a) {\n\t\tfixModule(s);\n\t}), document.addEventListener && document.addEventListener(\"DOMMouseScroll\", function (a) {\n\t\tfixModule(s);\n\t}, !1);\n\t$doc.on(\"click\", \".playBtn\", function () {\n\t\tvar $this = $(this),\n\t\t    $video = $this.next(\"video\").get(0);\n\n\t\tif ($video.paused) {\n\t\t\t$this.hide();\n\t\t\t$video.play();\n\t\t}\n\t});\n}\n//background\nfunction fixModule(t) {\n\tfor (var a = $(window).scrollTop(), s = document.documentElement.clientHeight, e = 0; e < t.length - 1; e++) {\n\t\tvar i = t[e].offsetTop - 50;\n\t\tif (a + s >= i && a + s < i + s + 640) {\n\t\t\tvar n = 160 / (i + s + 640),\n\t\t\t    r = n * (a + s - i);\n\t\t\t$(t[e]).css(\"background-position\", \"center \" + (80 - r) + \"px\");\n\t\t}\n\t}\n}\nfunction banner() {\n\tvar html = \"\";\n\tfor (var i = 0, len = data.length; i < len; i++) {\n\t\thtml += '<div class=\"swiper-slide\"><a href=\"' + data[i].url + '\" style=\"background-image:url(' + data[i].img + ');background-size:cover;background-position:center center;\" title=\"' + data[i].title + '\"></a></div>';\n\t}\n\t$(\".swiper-wrapper\").html(html);\n\tseiper();\n}\nfunction seiper() {\n\tvar swiper = new Swiper('.swiper-container', {\n\t\tpagination: {\n\t\t\tel: '.swiper-pagination'\n\t\t},\n\t\tloop: true,\n\t\tautoplay: 1000\n\t});\n}\nfunction init() {\n\tbanner();\n\tvar windowH = $(window).height();\n\t$section1.height(windowH);\n\tsetTimeout(function () {\n\t\t$(\".totalTit\").addClass(\"active\");\n\t}, 500);\n\tbindEnds();\n}\ninit();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/resource/js/index.js?");

/***/ })

/******/ });