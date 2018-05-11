import '../css/index.scss';
import './common/jQueryfullpage';

const util = require('./common/util');
const fullpage = require('./common/jQueryfullpage');
function fullpageFun(){
	$('#dowebok').fullpage({
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#1bbc9b', '#4BBFC3', '#7BAABE'],
		anchors: ['hero', 'services', 'cases', 'news','about','think','footer','contact'],
	    navigationPosition: 'left',
		afterLoad: function(anchorLink, index){
			if(index == 1){
			   $('.totalTit').addClass('acitve');
			}
			if(index == 2){
				$('.aboutclmax').addClass('active');
			}
			if(index == 3){
			   $('.theMoves').addClass('active');
			}
			if(index == 4){
			   $('.starPeople').addClass('active');
			}
			if(index == 5){
			   $('.ourNews').addClass('active');
			}
			if(index == 6){
			   $('.aboutUs').addClass('active')
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
				$('.totalTit').removeClass('acitve');
			}
			if(index == '2'){
				$('.aboutclmax').removeClass('active');
			}
			if(index == '3'){
				$('.theMoves').removeClass('active');
			}
			if(index == '4'){
				$('.starPeople').removeClass('active');
			}
			if(index == '5'){
				$('.ourNews').removeClass('active');
			}
			if(index == '6'){
				$('.aboutUs').removeClass('active')
			}
		}
    });
} 
function init(){
    fullpageFun();
}
init()