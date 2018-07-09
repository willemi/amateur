import '../css/ipAdd.scss';

const util = require("./common/util.js")

const rightNewsTpl = require('../tpl/item-right-news.tpl');
const itemSearchListTpl = require('../tpl/item-search-list.tpl');
const worksListTpl = require('../tpl/item-works-list.tpl');
const obligeeListTpl = require('../tpl/item-obligee-list.tpl');
var data1 = [{
	"ly": "自制",
	"zt": "XXX",
	"nro": "这里是内容",
	"bz": "20%",
	"zy": "是",
	"wq": "有",
	"sq": "有",
	"ht": "有",
	"lx": "复制权",
	"fs": "无限制",
	"qd": "无限制",
	"dy": "无限制",
	"cs": "1",
	"yy": "中文",
	"ks": "1990-10-22",
	"js": "1990-10-22",
	"ms": "这里是描述这里是描述",
	"bz": "备注备注备注备注备注备注备注备注备注"
},{
	"ly": "自制",
	"zt": "XXX",
	"nro": "这里是内容",
	"bz": "20%",
	"zy": "是",
	"wq": "有",
	"sq": "有",
	"ht": "有",
	"lx": "复制权",
	"fs": "无限制",
	"qd": "无限制",
	"dy": "无限制",
	"cs": "1",
	"yy": "中文",
	"ks": "1990-10-22",
	"js": "1990-10-22",
	"ms": "这里是描述这里是描述",
	"bz": "备注备注备注备注备注备注备注备注备注"
}]
var data2 = [{
	"ly": "自制",
	"zt": "XXX",
	"nro": "这里是内容",
	"bz": "20%",
	"zy": "是",
	"wq": "有",
	"sq": "有",
	"ht": "有",
	"lx": "复制权",
	"fs": "无限制",
	"qd": "无限制",
	"dy": "无限制",
	"cs": "1",
	"yy": "中文",
	"ks": "1990-10-22",
	"js": "1990-10-22",
	"ms": "这里是描述这里是描述",
	"bz": "备注备注备注备注备注备注备注备注备注"
}]
var data3 = [{
	"num": "XXXXXXX189675456WSPD",
	"name": "《嗨！看电视》2018XXX采购合同",
	"qTime": "2018-03-23",
	"sTime": "2018-03-23",
	"sxTime": "2018-03-23"
},{
	"num": "XXXXXXX189675456WSPD",
	"name": "《嗨！看电视》2018XXX采购合同",
	"qTime": "2018-03-23",
	"sTime": "2018-03-23",
	"sxTime": "2018-03-23"
},{
	"num": "XXXXXXX189675456WSPD",
	"name": "《嗨！看电视》2018XXX采购合同",
	"qTime": "2018-03-23",
	"sTime": "2018-03-23",
	"sxTime": "2018-03-23"
}]
var data4 = [{
	"name": "张三",
	"type": "词作者",
	"fu": "否",
	"mony": "人民币",
	"jine": "100元"
},{
	"name": "张三",
	"type": "词作者",
	"fu": "否",
	"mony": "人民币",
	"jine": "100元"
}]

//默认展示列表
function workslist(){
	let listData = [{
		"id": 0,
		"zt": 0,
		"name": "孔子",
		"type": "电影",
		"fu": "XXX",
		"mony": "显示来源于权利组的名称或显示来源于合同的名称"
	},{
		"id": 1,
		"zt": 1,
		"name": "孔子",
		"type": "电影",
		"fu": "XXX",
		"mony": "显示来源于权利组的名称或显示来源于合同的名称"
	}]
	$("#works-list").html(worksListTpl(listData));
}
let $stepa = $(".stepa li");
let $step = $(".step li");
function bindEvents(){
	var $doc = $(document);
	//合同信息
	// $doc.on("change", "#right-news", function(){
	// 	var $this = $(this);
	// 	var $div = $this.parents(".btn-group"),
	// 		$button = $div.next("button"),
	// 		$btnOperation = $div.nextAll(".btn-operation");
	// 	var val = $this.val();
	// 	if(val == 0){
	// 		//是
	// 		$button.removeAttr("disabled");
	// 		$btnOperation.hide();
	// 	}else{
	// 		$button.attr("disabled", "disabled");
	// 		$btnOperation.show();
	// 	}
	// })
	// $doc.on("click", ".hetong li", function(){
	// 	$(this).addClass("active").siblings().removeClass("active")
	// })
	//列表操作
	//列表删除
	$doc.on("click", ".worksList-dele", function(){
		let $this = $(this),
			id = $this.parent("td").attr("id");
		$.ajax({
			type: "POST",
			url: "",
			data: {
				id: id
			},
			dataType: "json",
			cache: false,
			success: function(res) {
				if(res && res.errno ==0){
					
				}
			},
			error: function(){
				
			}
		});
	})
	//权利变更
	let $modalPObligee = $("#modal-p-obligee"),
		$modalPAuthorizedPerson = $("#modal-p-authorized-person"),
		$modalNAuthorizingPerson = $("#modal-n-authorizing-person"),
		$modalNAuthorizedPerson = $("#modal-n-authorized-person"),
		$modalBAuthorization = $("#modal-b-authorization");
	$('#modal-changeRights').on('show.bs.modal', function () {
		// 执行一些动作...
		$modalPObligee.val("11111");
		$modalPAuthorizedPerson.val("22222");
	})
	$doc.on("click", "#modal-b-authorization", function(){
		let val1 = $modalNAuthorizingPerson.val(),
			val2 = $modalNAuthorizedPerson.val();
		if(util.isEmpty(val1) || util.isEmpty(val2)){
			util.showMsg('不能为空')
		}
		$.ajax({
			type: "POST",
			url: "",
			data: {
				id: id,
				val1: val1,
				cal2: val2
			},
			dataType: "json",
			cache: false,
			success: function(res) {
				if(res && res.errno ==0){


					$('#modal-detailsContract').modal('hide');
				}
			},
			error: function(error){
				util.showMsg(error)
			}
		});		
	})
	
	//新增作品
	let $cont1 = $(".content-01"),
		$cont2 = $(".content-02");
	$doc.on("click", ".btn-adda", function(){
		$cont1.hide();
		$cont2.show();
	})
	//梗概权利许可全选反选
	$doc.on("click", ".batch", function(){
		util.checkB($(this), "checkbox")
		// if($(this).hasClass("cut")){
		// 	$("input[name='checkbox']").removeAttr("checked");
		// 	$(this).removeClass("cut")
		// }else{
		// 	$("input[name='checkbox']").attr("checked","true");
		// 	$(this).addClass("cut")
		// }
	})
	
	//梗概权利许可批量删除
	$doc.on("click", "#delete", function(){
		batchFun($(this))
	})
	//作品权利信息
	//查询引用
	$("#query-reference").on("click", function(){
		let $val = $("input[name='news']:checked").val();
		if($val == 0){
			$('#modal-choiceContracts').modal('show')
		}else{
			util.showMsg('选择权利来源！')
		}
	})
	//来源于权利
	$doc.on("change", ".sel-ly", function(){
		var $this = $(this);
		let $val = $("input[name='news']:checked").val();
		if($val == 1){
			$(".right-news").html(rightNewsTpl(data2));
			//util.pageinator("pageLimit", "10", "url", tplData);
		}else{
			util.showMsg('选择权利来源！')
		}
	})
	//选择合同
	//搜索
	$doc.on("click", ".btn-ht", function(){
		let val = $("#ht-name").val();
		if(val == 1){//搜索
			$(".htn-list").html(itemSearchListTpl(data3));
		}else if(val == 2){//创建
			$(".htn-list").html('<a class="cjht" data-toggle="modal" data-target="#modal-createContract">创建合同</a>');
		}else{
			util.showMsg('不能为空')
		}

		// if(util.isEmpty(val())){
		// 	util.showMsg('不能为空')
		// }else{
		// 	$.ajax({
		// 		type: "GET",
		// 		url: "",
		// 		data: {
		// 			name: "name"
		// 		},
		// 		dataType: "json",
		// 		cache: false,
		// 		success: function(res) {
		// 			if(res && res.errno == 0){//搜索
		// 				$(".htn-list").html(itemSearchListTpl(data3));
		// 			}else{//创建
		// 				$(".htn-list").html('<a class="cjht" data-toggle="modal" data-target="#modal-createContract">创建合同</a>');
		// 			}
		// 		},
		// 		error: function(error){
		// 			util.showMsg(error)
		// 		}
		// 	});		
		// }
		
		//util.pageinator("pageLimit2", "10", "url", tplData2);
	})
	//选取
	$(".ipadd").on("click", ".btn-primary", function(){
		$(".right-news").html(rightNewsTpl(data1));
		let $val = $("input[name='htong']:checked").val();
		$(".htNews").val($val);
		$('#modal-choiceContracts').modal('hide');
		//util.pageinator("pageLimit", "10", "url", tplData);
	})
	//合同详情选取
	$doc.on("click", ".btn-xqu", function(){
		$('#modal-detailsContract').modal('hide');
		$(".table-01").show();
	})
	//创建合同
	// 创建合同、无权利信确认
	$doc.on("click", ".btn-cjqr", function(){
		$('#modal-createContract').modal('hide');
		$(".htn-list").html(itemSearchListTpl(data3));
	})	
	//合同下一步\提交	
	$doc.on("click", ".next-stepa", function(){
		let $this = $(this);
		if($this.hasClass("next-step-01")){
			//第一步
			let $contractNumVal = $("#contract-num").val(),
				$contractSubVal = $("#contract-sub").val(),
				$contractNameVal = $("#contract-name").val(),
				$contractMoneyVal = $("#contract-money").val(),
				$contractSigningTimeVal = $("#contract-signing-time input").val(),
				$contractYakeTimeVal = $("#contract-take-time input").val(),
				$contractInvalidTimeVal = $("#contract-invalid-time input").val(),
				$contractYesTimeVal = $("#contract-yes-time input").val(),
				$contractPaymentPlanVal = $("#contract-payment-plan").val(),
				$contractPaymentMethodVal = $("#contract-payment-method").val(),
				$contractNotesVal = $("#contract-notes").val(),
				$contractPartyPistHtml = $(".contract-party-list").html();
			if(util.isEmpty($contractNumVal) || util.isEmpty($contractSubVal) || util.isEmpty($contractNameVal) || util.isEmpty($contractMoneyVal) || util.isEmpty($contractSigningTimeVal) || util.isEmpty($contractYakeTimeVal) || util.isEmpty($contractInvalidTimeVal) || util.isEmpty($contractYesTimeVal) || util.isEmpty($contractPaymentPlanVal) || util.isEmpty($contractPaymentMethodVal) || util.isEmpty($contractNotesVal) || util.isEmpty($contractPartyPistHtml)){
				util.showMsg("不能为空！")
				return
			}else{
				
			}			

		}else if($this.hasClass("next-step-02")) {
			//第二步
			let $qlnewsListHtml = $(".qlnews-list").html();
			if(util.isEmpty($qlnewsListHtml)){
				util.showMsg("不能为空！")
				return
			}else{

			}
		}else{
			//提交
			let $contractAppendicesListtHtml = $("#contract-appendices-list").html();
			if(util.isEmpty($contractAppendicesListtHtml)){
				util.showMsg("不能为空！")
				return
			}else{
					
			}
		}

		nextBtn($this);
	})	
	//合同签约方
	$doc.on("click", ".modal-contract-btn", function(){
		let $modalContractPartyVal = $("#modal-contract-party").val(),
			$modalContractNameVal = $("#modal-contract-name").val(),
			$modalContractIphoneVal = $("#modal-contract-iphone").val(),
			$modalContractPepoVal = $("#modal-contract-pepo").val(),
			$modalContractDizVal = $("#modal-contract-diz").val();
		if(util.isEmpty($modalContractPartyVal) || util.isEmpty($modalContractNameVal) || util.isEmpty($modalContractIphoneVal) || util.isEmpty($modalContractPepoVal) || util.isEmpty($modalContractDizVal)){
			util.showMsg("不能为空！")
			return
		}else{
			
			$('#modal-signatoryInformation').modal('hide');
		}
	})
	//权利信息新增
	$doc.on("click", ".modal-right-info-btn", function(){
		let $modalRightInfoNumbVal = $("#modal-right-info-numb").val(),
			$modalRightInfoNameVal = $("#modal-right-info-name").val(),
			$modalRightInfoTypeVal = $("#modal-right-info-type").val(),
			$modalRightStartTimeVal = $("#modal-right-start-time input").val(),
			$modalRightInfoCpzVal = $("#modal-right-info-cpz").val(),
			$modalRightInfoCpmVal = $("#modal-right-info-cpm").val(),
			$modalRightInfoJigouVal = $("#modal-right-info-jigou").val(),
			$modalRghtDjTimeVal = $("#modal-right-dj-time input").val(),
			$modalRightInfoSetVal = $("#modal-right-info-set").val(),
			$modalRightInfoUntilVal = $("#modal-right-info-until").val(),
			$modalRightInfoSVal = $("#modal-right-info-s").val(),
			$modalRightInfoSqrVal = $("#modal-right-info-sqr").val(),
			$modalRightInfoSqpVal = $("#modal-right-info-sqp").val(),
			$modalRightInfoSqmVal = $("#modal-right-info-sqm").val(),
			$modalRightInfoQldescVal = $("#modal-right-info-qldesc").val(),
			$modalRightInfoProVal = $("#modal-right-info-pro").val(),
			$modalRightInfoMonVal = $("#modal-right-info-mon").val(),
			$datetimeStartVal = $("#datetimeStart").val(),
			$datetimeEndVal = $("#datetimeEnd").val(),
			$modalRightInfoDescVal = $("#modal-right-info-desc").val(),
			$modalRightInfoRemarksVal = $("#modal-right-info-remarks").val(),
			$modalRightInfoFVal = $("#modal-right-info-f").val();
		let $limitVal = $("input[name='limit']:checked").val(),
			$limit1Val = $("input[name='limit1']:checked").val(),
			$limit3Val = $("input[name='limit3']:checked").val(),
			$limit4Val = $("input[name='limit4']:checked").val(),
			mode0 = show("mode0"),
			region = show("region"),
			language = show("language"),
			mode = show("mode");
		if(util.isEmpty($modalRightInfoNumbVal) || util.isEmpty($modalRightInfoNameVal) || util.isEmpty($modalRightInfoTypeVal) || util.isEmpty($modalRightStartTimeVal) || util.isEmpty($modalRightInfoCpzVal) || util.isEmpty($modalRightInfoCpmVal) || util.isEmpty($modalRightInfoJigouVal) || util.isEmpty($modalRghtDjTimeVal) || util.isEmpty($modalRightInfoSetVal) || util.isEmpty($modalRightInfoUntilVal) || util.isEmpty($modalRightInfoSVal) || util.isEmpty($modalRightInfoSqrVal) || util.isEmpty($modalRightInfoSqpVal) || util.isEmpty($modalRightInfoSqmVal) || util.isEmpty($modalRightInfoQldescVal) || util.isEmpty($modalRightInfoProVal) || util.isEmpty($modalRightInfoMonVal) || util.isEmpty($datetimeStartVal) || util.isEmpty($datetimeEndVal) || util.isEmpty($modalRightInfoDescVal) || util.isEmpty($modalRightInfoRemarksVal) || util.isEmpty($modalRightInfoFVal) || util.isEmpty($limitVal) || util.isEmpty($limit1Val) || util.isEmpty($limit3Val) || util.isEmpty($limit4Val) || util.isEmpty($mode0) || util.isEmpty($region) || util.isEmpty($language) || util.isEmpty($mode)){
			util.showMsg("不能为空！")
			return
		}else{
			
			$('#modal-newly-added1').modal('hide');
		}
	})
	$doc.on("click", ".pre-stepa", function(){
		let $this = $(this);
		preBtn($this);
	})
	// $doc.on("click", ".ip-click", function(){
	// 	location.href = "ipdetails.html"
	// })

	//作品下一步\提交	
	$doc.on("click", ".next-step", function(){
		var $this = $(this);
		if($this.hasClass("next-step-01")){
			//第一步
			let $workIdVal = $("#work-id").val(),
				$workNameVal = $("#work-name").val(),
				$workTypeVal = $("#work-type").val(),
				$themeTypeVal = $("#theme-type").val(),
				$lenghtTimeVal = $("#lenght-time").val(),
				$publicTimeVal = $("#public-time input").val(),
				$creationTimeVal = $("#creation-time input").val(),
				$albumVal = $("#album").val(),
				$originalScriptVal = $("#original-script").val(),
				$versionDescriptionVal = $("#version-description").val(),
				$worksDescVal = $("#works-desc").val(),
				$obligeeListHtml = $(".obligee-list").html();
			if(util.isEmpty($workIdVal) || util.isEmpty($workNameVal) || util.isEmpty($workTypeVal) || util.isEmpty($themeTypeVal) || util.isEmpty($lenghtTimeVal) || util.isEmpty($publicTimeVal) || util.isEmpty($creationTimeVal) || util.isEmpty($albumVal) || util.isEmpty($originalScriptVal) || util.isEmpty($versionDescriptionVal) || util.isEmpty($worksDescVal) || util.isEmpty($obligeeListHtml)){
				util.showMsg("不能为空！")
				return
			}else{
				
			}
			

		}else if($this.hasClass("next-step-02")) {
			//第二步
			let $rightNewsHtml = $(".right-news").html();
			if(util.isEmpty($rightNewsHtml)){
				util.showMsg("不能为空！")
				return
			}else{

			}
		}else{
			//提交
			let $enclosureListHtml = $("#enclosure-list").html();
			if(util.isEmpty($enclosureListHtml)){
				util.showMsg("不能为空！")
				return
			}else{

			}
		}



		
		nextBtn($this);
	})
	$doc.on("click", ".pre-step", function(){
		var $this = $(this);
		preBtn($this);
	})	
	
	
	//作品名称模糊搜索
	let $selectDiv = $('.select-div');
	$("#work-name").keyup(function(e){
		var $this = $(this);
		//如果输入空格自动删除
		this.value=$this.val().replace(' ','');
		console.log(this.value)
		//列表框显示
		$selectDiv.show();
		if(e.keyCode == 38) {
			//up
			console.log('up');
		}else if(e.keyCode == 40) {
			//down
			console.log('down');		
		}else if(e.keyCode == 13) {
			//enter
			console.log('enter');
			$selectDiv.hide();
		}else {
			//other
			console.log('other');
		}
	})
	//权利人列表选取	
	$selectDiv.on("click", "li", function(){
		$(".obligee-list").html(obligeeListTpl(data4));
		$selectDiv.hide();
	})
	let qlListJson = [];
	//权利人列表新增
	let $modalObligeeName = $("#modal-obligee-name"),
		$modalObligeeType = $("#modal-obligee-type"),
		$modalObligeeRemuneration = $("#modal-obligee-remuneration"),
		$modalObligeeCurrency = $("#modal-obligee-currency"),
		$modalObligeeMoney = $("#modal-obligee-money"),
		$btnListQr = $(".btn-List-qr");
	//弹框提交
	$doc.on("click", ".btn-List-qr", function(){
		let $modalObligeeNameVal = $modalObligeeName.val(),
			$modalObligeeTypeVal = $modalObligeeType.val(),
			$modalObligeeRemunerationVal = $modalObligeeRemuneration.val(),
			$modalObligeeCurrencyVal = $modalObligeeCurrency.val(),
			$modalObligeeMoneyVal = $modalObligeeMoney.val();
		if(util.isEmpty($modalObligeeNameVal) || util.isEmpty($modalObligeeTypeVal) || util.isEmpty($modalObligeeRemunerationVal) || util.isEmpty($modalObligeeCurrencyVal) || util.isEmpty($modalObligeeMoneyVal)){
			util.showMsg("不能为空！")
			return
		}else{
			let $id = $(this).attr("id");
			let qlListData = {				
				name: $modalObligeeNameVal,
				type: $modalObligeeTypeVal,
				remuneration: $modalObligeeRemunerationVal,
				currency: $modalObligeeCurrencyVal,
				money: $modalObligeeMoneyVal
			};
			if(qlListJson.length > 0){//有数据判断是修改还是增加
				for(var i = 0;i < qlListJson.length;i++){
					let json = qlListJson[i];
					if(json && json.id == $id){ //修改
						$.extend(json, qlListData);
						break
					}else{//增加
						qlListData.id = Math.round(new Date().getTime() / 1000);
						qlListJson.push(qlListData);
						//qlListJson[qlListData.id] = qlListData;
						break
					}
				}
			}else{//增加
				qlListData.id = Math.round(new Date().getTime() / 1000);
				qlListJson.push(qlListData);
				//qlListJson[qlListData.id] = qlListData;
			}
			
			$(".obligee-list").html(obligeeListTpl(qlListJson));
			$('#modal-qbligeeAdd').modal('hide');
		}
	})
	//修改
	$doc.on("click", ".btn-obligee-list-edit", function(){
		let id = $(this).parents("tr").attr("id");
		for(var i = 0;i < qlListJson.length;i++){
			let json = qlListJson[i];
			if(json.id == id){
				$btnListQr.attr("id", json.id);
				$modalObligeeName.val(json.name);
				$modalObligeeType.val(json.type);
				$modalObligeeRemuneration.val(json.remuneration);
				$modalObligeeCurrency.val(json.currency);
				$modalObligeeMoney.val(json.money);
				break;
			}
		}		
	})
	// $doc.on("click", ".obligee-checkbox-btn", function(){
	// 	util.checkB($(this), "obligee-checkbox")
	// })
	//删除
	$doc.on("click", ".btn-obligee-list-dele", function(){
		let idArr = show("obligee-checkbox");
		let len = idArr.length;
		if(len <= 0){return};
		for(let i = 0;i < len;i++){
			let id = idArr[i];
			if(id != 0){
				for(var i = 0;i < qlListJson.length;i++){
					let json = qlListJson[i];
					if(json && json.id == id){
						qlListJson.splice(i, 1); //删除下标为i的元素
					}
				}
			}
		}
		$(".obligee-list").html(obligeeListTpl(qlListJson));
	})
	// $doc.on("click", ".basics .add", function(){		
	// 	var $this = $(this);
	// 	var $formLen = $(".form-3").length;
	// 	var $div = $this.parent("div");
	// 	if($formLen < 3){
	// 		$div.after($div.clone())
	// 	}		
	// })
	// $doc.on("click", ".basics .delete", function(){
	// 	var $this = $(this);
	// 	var $formLen = $(".form-3").length;
	// 	var $div = $this.parent("div");
	// 	if($formLen > 1){
	// 		$div.remove();
	// 	}
	// })
	//time
	util.timepicker("public-time");
	util.timepicker("creation-time");
	util.timepicker("contract-signing-time");
	util.timepicker("contract-take-time");
	util.timepicker("contract-invalid-time");
	util.timepicker("contract-yes-time");
	util.timepicker("modal-right-start-time")
	util.timepicker("modal-right-dj-time")

	util.timepickerSection("datetimeStart", "datetimeEnd");	
	// $('#pageLimit').bootstrapPaginator({    
	// 	currentPage: 1,//当前页码
	// 	totalPages: 10,//总页码
	// 	size:"normal",
	// 	bootstrapMajorVersion: 3,//bootstrap版本
	// 	alignment:"right",
	// 	numberOfPages:5,//一页显示几个按钮
	// 	itemTexts: function(type, page, current){
	// 		switch (type){ 
	// 			case "first": return "首页";
	// 			case "prev": return "上一页";
	// 			case "next": return "下一页";
	// 			case "last": return "末页";
	// 			case "page": return page;
	// 		}
	// 	},
	// 	onPageClicked: function(event, originalEvent, type, page){
	// 		console.log(page)
	// 		$.ajax({
	// 			url: '',
	// 			type: 'post',
	// 			data: {page: page},
	// 			dataType: 'json',
	// 			success: function (data) {
	// 				tplData(data);//处理成功返回的数据
	// 			}
	// 		});
	// 	}
	// });
	//pages	
	util.pageinator("pageLimit", "10", "url", tplData);
	util.pageinator("pageLimit1", "10", "url", tplData1);
	util.pageinator("pageLimit2", "10", "url", tplData2);
	util.pageinator("pageLimit3", "10", "url", tplData3);
	util.pageinator("pageLimit4", "10", "url", tplData);
	util.pageinator("pageLimit5", "10", "url", tplData);
	util.pageinator("pageLimit6", "10", "url", tplData);
	
	
}
//下一步
function nextBtn(me){
	let $main = me.parents(".main"),
	$nextMain = $main.next(".main");
	let index = $main.index();
	$stepa.eq(++index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$nextMain.show();
}
//上一步
function preBtn(me){
	let $main = me.parents(".main"),
	$pretMain = $main.prev(".main");
	let index = $main.index();
	$stepa.eq(--index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$pretMain.show();
}
function tplData(data){
	console.log(data)
}
function tplData1(data){
	console.log(data)
}
function tplData2(data){
	console.log(data)
}
function tplData3(data){
	console.log(data)
}
function fuzzySearch(e){
	console.log(e)
}
//上传
function fileUpload(){
	let url = "11111111";
	let fileRes = util.fileFun(url);
	console.log(fileRes)
}
fileUpload()
window.formatState = function(state){
	state = parseInt(state)
	switch(state){
		case 0:
			return '待审核';
		case 1:
			return '已通过';
		case 2:
			return '未通过';
	}
}
//批量删除
function batchFun(me){
	var getAll = getAllids();
	var getAllS = getAll.split("|"),
		id = getAllS[0];
	//var dstext = $(this).attr("data-text");
	if(id == ""){
		util.showMsg('选择要删除目录！')
	}else{
		//confirmData(id)
		util.showMsg("删除成功！ id="+ id)
	}
}
//批量选取id
function getAllids(){
	var checkbox = $(".checkbox");
	var id = "", num = "";
	for ( var i = 0; i < checkbox.length; i++) {
		var $this = checkbox[i];
		if($this.checked){
			num = num + $this.value + ",";
			id = id + $this.id + ",";
		}
	}
	return id.slice(0,-1) +"|"+ num.slice(0,-1);
}
function show(name){
    let obj = document.getElementsByName(name) || "";
    let check_val = [];
    for(let k in obj){
        if(obj[k].checked)
            check_val.push(obj[k].value);
    }
    return check_val;
}
function init(){
	workslist();
	bindEvents();
}
init();