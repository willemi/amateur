import '../css/signUp.scss';

const util = require('./common/util');

function workslistData(){

}
function bindEnds(){
	util.pageinator("pageLimit", 1, 10, workslistData);
}
function init(){
	bindEnds();
}
init()