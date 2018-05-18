//const angular = require("./common/angular")
// const angularRouter = require("./common/angular-router");
import '../css/common.scss';
import './common/angular'
import './common/angular-ui-router'
const util = require("./common/util.js")


angular.module('MyApp', ['ui.router'])
	.controller('MainController', ['$scope','$state',function($scope,$state) {
		console.log('init ctrl');
		$scope.currentType = $state.current.name.split('.')[1];
		$scope.changeTab = function(type){
			$scope.currentType = type;
		};
	}])
	.run(['$state', function($state) {
//		$state.go('app.index');
    }])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("index");
		$stateProvider.state('app', {
			url: "",
			abstract:true,
			templateUrl: "./viewport.html",
			controller: 'MainController'
		})
	    .state('app.index', {
	      url: "/index",
	      templateUrl: "../../index.html"
	    })
	    .state('app.ipAdd', {
	      url: "/ipAdd",
	      templateUrl: "../../ipAdd.html"
		})
		.state('app.projectAdd', {
			url: "/projectAdd",
			templateUrl: "../../projectAdd.html"
		  })
});
  
