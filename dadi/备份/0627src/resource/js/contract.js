import '../css/ipList.scss';

const util = require("./common/util.js")

function bindEvents(){
	var $doc = $(document);
    $doc.on("click", ".dropdown-menu li", function(){
		var $this = $(this)
		var $text = $this.text(),
			$button = $this.parent().prev();
		$button.html($text +'<span class="caret"></span>');
	})
	// $doc.on("click", "#sideNav > li", function(e){
	//     var $this = $(this);
	//     $this.addClass("active").siblings().removeClass("active");
	// })
	//全选反选
	// $doc.on("click", ".batch", function(){
	// 	if($(this).hasClass("cut")){
	// 		$("input[name='checkbox']").removeAttr("checked");
	// 		$(this).removeClass("cut")
	// 	}else{
	// 		$("input[name='checkbox']").attr("checked","true");
	// 		$(this).addClass("cut")
	// 	}
	// })
	//pages
	util.pageinator("pageLimit", "10", "url", tplData);
	function tplData(data){
		console.log(data)
	}
	//modal
	// $('#delete').on('show.bs.modal', function (e) {
	// 	// 执行一些动作...
	// 	var button = $(e.relatedTarget);
	// 	console.log(button.data("id"))
	// });
	// $('#delete').on('hide.bs.modal', function () {
	// 	// 执行一些动作...
	// });
}






























function init(){
	bindEvents();
}
init();