import '../css/produc-management.scss';

const util = require("./common/util.js")

const producListTpl = require('../tpl/item-produc-list.tpl');
const worksSearchList = require('../tpl/item-works-search-list.tpl');
const searchListProduc = require('../tpl/item-search-list-produc.tpl');
const itemSearchListLookTpl = require('../tpl/item-look-xuanqu.tpl');
const itemSearchListLook1Tpl = require('../tpl/item-look-xuanqu.1.tpl');
const itemSearchListLook2Tpl = require('../tpl/item-look-xuanqu.2.tpl');
const itemSearchListLook3Tpl = require('../tpl/item-look-xuanqu.3.tpl');
const qianyuetTpl = require('../tpl/item-qianyue-list.tpl');
const producDatilsCpTpl = require('../tpl/item-produc-datils-cp.tpl');
const producDatilsCpzpTpl = require('../tpl/item-produc-datils-cp-zp.tpl');
const itemProducHtTpl = require('../tpl/item-produc-ht.tpl');
const detailsFjianTpl = require('../tpl/item-details-fjian.tpl');

const detailsJicTpl = require('../tpl/item-details-jic.tpl');
const detailsListTpl = require('../tpl/item-details-list.tpl');
const detailsQlnewsTpl = require('../tpl/item-details-qlnews.tpl');
window.formatobligee_type = function(state){
	state = parseInt(state)
	switch(state){
		case 0:
			return '否';
		case 1:
			return '是';
	}
}
window.formatobligee_sign = function (state){
	state = parseInt(state)
	switch(state){
		case 0:
			return '甲';
		default:
			return '已';
	}
}
window.formatState = function(state){
	state = parseInt(state)
	switch(state){
		case 0:
			return '待审核';
		case 1:
			return '已通过';
		case 2:
			return '未通过';
		default:
			return "无";
	}
}
window.formatobligee_you = function(state){
	state = parseInt(state)
	switch(state){
		case 0:
			return '无';
		case 1:
			return '有';
	}
}
//默认展示列表
let workslistPage = 1;
function workslist(page){
	page = page || 1;
	$.ajax({
		type: "GET",
		url: "http://140.143.142.191/dadi/product/list",
		data: {
			pageNum: page,
			pageSize: 10
		},
		dataType: "json",
		cache: false,
		contentType: "application/json;charset=UTF-8",
		success: function(res) {
			if(res.status == 1){
				$(".produc-list").html(producListTpl(res.data));
				util.pageinator("pageLimit", page, res.page.pageCount, workslistData);
			}			
		},
		error: function(){			
		}
	});
	
}
function workslistData(page){
	workslist(page)
}




let $stepa = $(".stepa li");
let $step = $(".step li");

function bindEvents(){
    var $doc = $(document);
	//查看产品详情
	$doc.on("click", ".btn-details", function(){
		let id = $(this).data("id");
		$.ajax({
			type: "GET",
			url: "http://140.143.142.191/dadi/product/findById",
			data: {
				id: id
			},
			dataType: "json",
			cache: false,
			contentType: "application/json;charset=UTF-8",
			success: function(res) {
				if(res && res.status == 1){
					let data = res.data;
					$(".details-list-a").html(producDatilsCpzpTpl(data.opus));
					$(".details-list-b").html(producDatilsCpTpl([data.product]));
					$(".details-list-c").html(itemProducHtTpl(data.contract));
					$(".details-fjian").html(detailsFjianTpl(data.fileobj));

					$('#modal-produc-details-look').modal('show');
				}
			},
			error: function(error){
				util.showMsg("error")
			}
		});
	})
	//查看作品详情
	$doc.on("click", ".produc-dtai", function(){
		let id = $(this).data("id");
		$.ajax({
			type: "GET",
			url: "http://140.143.142.191/dadi/opus/findById",
			data: {
				id: id
			},
			dataType: "json",
			cache: false,
			contentType: "application/json;charset=UTF-8",
			success: function(res) {
				if(res && res.status == 1){
					let data = res.data;
					$(".details-jic").html(detailsJicTpl(data.opus));
					$(".details-list").html(detailsListTpl(data.obligee));
					$(".details-qlnews").html(detailsQlnewsTpl(data.droit));
					$(".details-fjian").html(detailsFjianTpl(data.fileobj));

					$('#modal-details-look').modal('show');
				}
			},
			error: function(error){
				util.showMsg("error")
			}
		});
	})
	
	util.timepicker("modal-right-start-time");
	util.timepicker("modal-right-dj-time");

	util.timepicker("contract-signing-time");
	util.timepicker("contract-take-time");
	util.timepicker("contract-invalid-time");
	util.timepicker("contract-yes-time");

	util.timepickerSection("datetimeStart", "datetimeEnd");	

	//新增
	let $cont1 = $(".content-01"),
		$cont2 = $(".content-02");
	$doc.on("click", ".btn-adda", function(){
		$cont1.hide();
		$cont2.show();
	})
	// $doc.on("click", ".pre-stepa", function(){
	// 	let $this = $(this);
	// 	preBtn($this, $stepa);
	// })
	$doc.on("click", ".pre-step", function(){
		let $this = $(this);
		preBtn($this, $step);
	})
	// //下一步\提交
	//作品下一步\提交	
	let $step = $(".step li");
	$doc.on("click", ".next-step", function(){		
		var $this = $(this);
		
		if($this.hasClass("next-step-01")){
			// //第一步			
			// if(util.isEmpty($producer) || util.isEmpty($joint_producer) || util.isEmpty($creator_name) || util.isEmpty($creator_type) || util.isEmpty($storage_medium) || util.isEmpty($storage_medium_size) || util.isEmpty($workNameVal) || util.isEmpty($workTypeVal) || util.isEmpty($themeTypeVal) || util.isEmpty($lenghtTimeVal) || util.isEmpty($publicTimeVal) || util.isEmpty($creationTimeVal) || util.isEmpty($versionDescriptionVal) || util.isEmpty($worksDescVal) || util.isEmpty($obligeeListHtml)){
			// 	util.showMsg("作品基础信息不能为空！")
			// }else{
			// 	nextBtn($this, $step);
			// }
			nextBtn($this, $step);		
		}else{
			//提交
			//let $enclosureListHtml = $("#enclosure-list").html();
			//if(util.isEmpty($enclosureListHtml)){
			//	util.showMsg("作品附件信息不能为空！")
			//}else{
				let $tr1 = $(".news-list tr");
				let droit_ids = [];
				for(let a = 0;a < $tr1.length;a++){
					droit_ids.push($tr1[a].id)
				}
				console.log(droit_ids)

				let $tr2 = $(".yy-list tr");
				let opus_ids = [];
				for(let b = 0;b < $tr2.length;b++){
					opus_ids.push($tr2[b].id)
				}
				console.log(opus_ids)
				
				let $tr3 = $("#produc-fj-list tr");
				let files = [];
				for(let c = 0;c < $tr3.length;c++){
					files.push($tr3[c].id)
				}
				console.log(files)

				let $tr4 = $(".hl-ht-list tr");
				let contract_ids = [];
				for(let d = 0;d < $tr4.length;d++){
					contract_ids.push($tr4[d].id)
				}
				console.log(contract_ids)

				console.log(cpnews)
				let da = {
					product_code: cpnews.product_code,
					product_name: cpnews.product_name,
					product_type: cpnews.product_type,
					publish_date: cpnews.publish_date,
					product_cycle: cpnews.product_cycle,
					product_amount: cpnews.product_amount,
					register_institution: cpnews.register_institution,
					product_xingtai: cpnews.product_xingtai,
					shou_quan_ren: cpnews.shou_quan_ren,
					bei_shou_quan_ren: cpnews.bei_shou_quan_ren,

					
					contract_ids: contract_ids,
					droit_ids: droit_ids,
					opus_ids: opus_ids,
					files: files
				}
				$.ajax({
					type: "POST",
					url: "http://140.143.142.191/dadi/product/update",
					data: JSON.stringify(da),				
					dataType: "json",
					cache: false,
					contentType: "application/json;charset=UTF-8",
					success: function(res) {
						if(res && res.status == 1){
							console.log(res)
							util.showMsg("提交成功！")
							setTimeout(function(){
								location.reload();
							})
						}					
					},
					error: function(error){
						util.showMsg("error")
					}
				});	
			//}
		}
	})
	$('#modal-choiceContracts-produc').on('hidden.bs.modal' ,function(e){
    	$("#ht-name").val('');
		$(".htn-list").html('');
		$(".qlnews-xuanqu").html('');
	});
	//引用原始库作品
	$doc.on("click", ".btn-index", function(){
		let c = copy();	
		if(util.isEmpty(c)){
			util.showMsg("请选取信息");
		}else{
			$('#modal-referenceWorks').modal('hide');
			$(".yy-list").append(c);
			$("#workName").val("");
			$(".work-search-list").html("")
		}
		$(".yy-list input").remove();

		//$('#modal-referenceWorks').modal('hide');
		//$(".tr-hide").show();
		//$(".bnt-yy").removeClass("btn-default").addClass("btn-primary").attr("data-toggle", "modal").attr("data-target", "#modal-newly-added2")

	})
	$doc.on("click", ".btn-del", function(){
		$("this").parents("tr".remove())
	})
	//创建产品信息
	$doc.on("click", ".bnt-yy", function(){
		if(util.isEmpty($(".yy-list").html())){
			util.showMsg("请引用原始库内作品");
		}else{
			$(".add-n-list").html(listHtml);
			$('#modal-newly-added2').modal('show');
		}
	})
	$doc.on("click", ".btn-yuans", function(){
		let page = 1;
		let nameVal = $("#workName").val();
		if(util.isEmpty(nameVal)){
			util.showMsg("不能为空！")
		}else{
			util.showMsg("查询中……")
			worksSearchListF(nameVal, page);
		}
	})
	//搜索
	// $doc.on("click", ".btn-s", function(){
	// 	let vla = $("#ht-name").val();
	// 	if(vla == 1){
	// 		$(".ht-1").show();
	// 	}else{
	// 		$(".ht-1").html('<a class="cjht" data-toggle="modal" data-target="#modal-createContract1">创建合同</a>').show();
	// 	}
		
	// 	//util.pageinator("pageLimit2", "10", "url", tplData2);
	// })
	//创建产品信息
	let cpnews = {}
	$doc.on("click", ".btn-news", function(){
		let $modalRightInfoNumbVal = $("#modal-right-info-numb").val(),
			$modalRightInfoNameVal = $("#modal-right-info-name").val(),
			$modalRightInfoTypeVal = $("#modal-right-info-type").val(),
			$modalRightStartTimeVal = $("#modal-right-start-time input").val(),
			$modalRightInfoCpzVal = $("#modal-right-info-cpz").val(),
			$modalRightInfoCpmVal = $("#modal-right-info-cpm").val(),
			$modalRightInfoJigouVal = $("#modal-right-info-jigou").val(),
			$modalRightDjTimeVal = $("#modal-right-dj-time input").val(),
			$modalRightInfoSVal = $("#modal-right-info-s").val(),
			$modalRightInfoSqrVal = $("#modal-right-info-sqr").val(),
			$limit1Val = $("input[name='limit1']:checked").val();


		
		if(util.isEmpty($("#xzql-list").html()) || util.isEmpty($modalRightInfoNumbVal) || util.isEmpty($modalRightInfoNameVal) || util.isEmpty($modalRightInfoTypeVal) || util.isEmpty($modalRightStartTimeVal) || util.isEmpty($modalRightInfoCpzVal) || util.isEmpty($modalRightInfoCpmVal) || util.isEmpty($modalRightInfoJigouVal) || util.isEmpty($modalRightDjTimeVal) || util.isEmpty($limit1Val)){
			util.showMsg("请生成权利信息");
		}else{
			let c = $("#xzql-list").html();	
			cpnews = {
				product_code: $modalRightInfoNumbVal,
				product_name: $modalRightInfoNameVal,
				product_type: $modalRightInfoTypeVal,
				publish_date: $modalRightStartTimeVal,
				product_cycle: $modalRightInfoCpzVal,
				product_amount: $modalRightInfoCpmVal,
				register_institution: $modalRightInfoJigouVal,
				register_date: $modalRightDjTimeVal,
				product_xingtai: $limit1Val,
				shou_quan_ren: $modalRightInfoSVal,
				bei_shou_quan_ren: $modalRightInfoSqrVal
			}
			$('#modal-newly-added2').modal('hide');
			$(".news-list").append(c);
			document.getElementById("add-form").reset();
			$(".add-n-list").html("")
		}
		$(".news-list input").remove();
	})
	//生成权利
	$doc.on("click", ".btn-scql", function(){
		let $modalRightInfoSVal = $("#modal-right-info-s").val(),
			$modalRightInfoSqrVal = $("#modal-right-info-sqr").val(),
			$modalRightInfoSqpVal = $("#modal-right-info-sqp").val(),
			$modalRightInfoSqmVal = $("#modal-right-info-sqm").val(),
			$modalRightInfoQldescVal = $("#modal-right-info-qldesc").val(),
			$datetimeStartVal = $("#datetimeStart").val(),
			$datetimeEndVal = $("#datetimeEnd").val(),
			$modalRightInfoDescVal = $("#modal-right-info-desc").val(),
			$modalRightInfoRemarks = $("#modal-right-info-remarks").val(),
			$modalRightInfoFVal = $("#modal-right-info-f").val();
		let $limitVal = $("input[name='limit']:checked").val(),
			$limit1Val = $("input[name='limit1']:checked").val(),
			$limit3Val = $("input[name='limit3']:checked").val(),
			$limit4Val = $("input[name='limit4']:checked").val(),
			mode0 = $("input[name='mode0']:checked").val(),
			language = showArr("language"),
			mode = showArr("mode");
		if(util.isEmpty($modalRightInfoRemarks) || util.isEmpty($modalRightInfoSVal) || util.isEmpty($modalRightInfoSqrVal) || util.isEmpty($modalRightInfoSqpVal) || util.isEmpty($modalRightInfoSqmVal) || util.isEmpty($modalRightInfoQldescVal) || util.isEmpty($datetimeStartVal) || util.isEmpty($datetimeEndVal) || util.isEmpty($modalRightInfoDescVal) || util.isEmpty($modalRightInfoFVal) || util.isEmpty($limitVal) || util.isEmpty($limit1Val) || util.isEmpty($limit3Val) || util.isEmpty($limit4Val) || util.isEmpty(mode0) || util.isEmpty(language) || util.isEmpty(mode)){
			util.showMsg("权利信息新增不能为空！")
			return
		}else{
			let data = {
				droit_subject: $modalRightInfoSVal,
				bdroit_per: $modalRightInfoSqrVal,
				droit_propor: $modalRightInfoSqpVal,
				droit_price: $modalRightInfoSqmVal,
				is_propri: $limit1Val,
				ishave_contract: mode0,
				droit_content: $modalRightInfoQldescVal,
				sqxk_ksrq: $datetimeStartVal,
				sqxk_jsrq: $datetimeEndVal,
				droit_mode: $limit3Val,
				sqxk_syyy: language,
				is_deleg: $limit4Val,
				is_wripr: $limitVal,
				sqxk_syqd: mode,
				sqxk_sycs: $modalRightInfoFVal,
				htql_ms: $modalRightInfoDescVal,
				droit_des: $modalRightInfoRemarks
			}
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/droit/update",
				data: JSON.stringify(data),
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {				
					if(res && res.status == 1){
						$("#xzql-list").html(worksSearchList([res.data]))
						$(".xzql-list").show();
						//$(".btn-news").addClass("modal-right-info-btn")
						
					}
				},
				error: function(error){
					util.showMsg("error")
				}
			});
		}
	})
	//选择合同
	//搜索
	$doc.on("click", ".btn-ht", function(){
		let NameVal = $("#ht-name").val();
		if(util.isEmpty(NameVal)){
			util.showMsg('搜索字段不能为空')
		}else{
			$.ajax({
				type: "GET",
				url: "http://140.143.142.191/dadi/contract/list",
				data: {
					contract_name: NameVal,
					pageNum: 1,
					pageSize: 20
				},				
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						if(res.data){//搜索
							for(var i = 0;i < res.data.length;i++){
								res.data[i]._id = res.data[i].contract_name +"-"+ res.data[i].id;
							}
							$(".htn-list").html(searchListProduc(res.data));
						}else{//创建
							$(".htn-list").html('<div class="ht-list-s"><p>查询无结果</p><a class="cjht" data-toggle="modal" data-target="#modal-createContract-produc">创建合同</a></div>');
						}
					}					
				},
				error: function(error){
					util.showMsg("error")
				}
			});		
		}
		
	})
	//查看合同详情
	let droitJson = [];
	$doc.on("click", ".btn-ht-news", function(){
		let $this = $(this);
		let id = $this.parents("tr").attr("id");
		$.ajax({
			type: "GET",
			url: "http://140.143.142.191/dadi/contract/findById",
			data: {
				id: id
			},				
			dataType: "json",
			cache: false,
			contentType: "application/json;charset=UTF-8",
			success: function(res) {
				if(res && res.status == 1){
					$.extend(droitJson, res.data.droit)
					$(".look-details-01").html(itemSearchListLookTpl([res.data.contract]))
					$(".qlnews-cont").html(itemSearchListLook1Tpl(res.data.droit))
					$(".qyfNews").html(itemSearchListLook2Tpl(res.data.sign))
					$(".fileobj").html(itemSearchListLook3Tpl(res.data.fileobj))
					$(".qlnews-cont input").remove();
				}					
			},
			error: function(error){
				util.showMsg("error")
			}
		});		
		

	})	
	//选取
	
	$doc.on("click", ".htn-list input[name=ht-list]", function(){
		var checkbox = $(".htn-list input[name=ht-list]");
		let kkidTr = [];
		for (let i = 0; i < checkbox.length; i++) {
			var $this = checkbox[i];
			if($this.checked){
				let $tr =$this.parentNode.parentNode.cloneNode(true);
				kkidTr.push($tr)
			}
		}
		$(".htn-list-xq").html(kkidTr);
		$(".htn-list-xq input").remove()
	})
	$doc.on("click", ".btn-xuanqu-z", function(){
		$(".hl-ht-list").append($(".htn-list-xq").html());
		$('#modal-choiceContracts-produc').modal('hide');
	})
	//合同签约方
	let qyListJson = [];
	let $modalContractParty = $("#modal-contract-party"),
		$modalContractName = $("#modal-contract-name"),
		$modalContractIphone = $("#modal-contract-iphone"),
		$modalContractPepo = $("#modal-contract-pepo"),
		$modalContractDiz = $("#modal-contract-diz"),
		$modalContractBtn = $(".modal-contract-btn");
	$doc.on("click", ".modal-contract-btn", function(){
		let $this = $(this);
		let $modalContractPartyVal = $modalContractParty.val(),
			$modalContractNameVal = $modalContractName.val(),
			$modalContractIphoneVal = $modalContractIphone.val(),
			$modalContractPepoVal = $modalContractPepo.val(),
			$modalContractDizVal = $modalContractDiz.val();
		if(util.isEmpty($modalContractPartyVal) || util.isEmpty($modalContractNameVal) || util.isEmpty($modalContractIphoneVal) || util.isEmpty($modalContractPepoVal) || util.isEmpty($modalContractDizVal)){
			util.showMsg("合同签约方信息不能为空！")
			return
		}else{
			let $id = $(this).attr("id");
			let jsond = {
				id: $id,
				sign_name: $modalContractNameVal,
				sign_type: $modalContractPartyVal,
				sign_phone: $modalContractIphoneVal,
				sign_person:  $modalContractPepoVal,
				sign_address: $modalContractDizVal
			}
			let pushD = true;
			if(qyListJson.length > 0){//有数据判断是修改还是增加
				for(var i = 0;i < qyListJson.length;i++){
					if(qyListJson[i] && qyListJson[i].id == $id){ //修改
						$.extend(qyListJson[i], jsond);
						pushD = false;
						break
					}
				}
			}
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/sign/update",
				data: JSON.stringify(jsond),
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						if(pushD){
							jsond.id = res.data.id;
							qyListJson.push(jsond);
						}
						document.getElementById("qianyForm").reset();
						$this.attr("id", "")						
						console.log(qyListJson)
						$("#contract-party-list").html(qianyuetTpl(qyListJson));
						$('#modal-signatoryInformation').modal('hide');
					}
				},
				error: function(error){
					util.showMsg("error")
				}
			});			
		}
	})
	//修改
	$doc.on("click", ".btn-qiany-list-edit", function(){
		let id = $(this).parents("tr").attr("id");
		for(var i = 0;i < qyListJson.length;i++){
			let json = qyListJson[i];
			if(json.id == id){
				$modalContractBtn.attr("id", json.id);
				$modalContractName.val(json.sign_name);
				$modalContractParty.val(json.sign_type);
				$modalContractIphone.val(json.sign_phone);
				$modalContractPepo.val(json.sign_person);
				$modalContractDiz.val(json.sign_address);
				break;
			}
		}		
	})
	//删除
	$doc.on("click", ".btn-qiany-list-dele", function(){
		let id = $(this).parents("tr").attr("id");
		$.ajax({
			type: "POST",
			url: "http://140.143.142.191/dadi/opus/delete",
			data: JSON.stringify({id: id}),
			dataType: "json",
			cache: false,
			contentType: "application/json;charset=UTF-8",
			success: function(res) {
				if(res && res.status == 1){
					util.showMsg("删除成功！")
					for(var i = 0;i < qyListJson.length;i++){
						let json = qyListJson[i];
						if(json.id == id){
							qyListJson.splice(i, 1);  
						}
					}
					console.log(qyListJson)
					$("#contract-party-list").html(qianyuetTpl(qyListJson));
				}
			},
			error: function(error){
				util.showMsg("error")
			}
		});
	})
	//创建合同
	//合同下一步\提交	
	let $stepa = $(".stepa li");
	$doc.on("click", ".next-stepa", function(){
		let $this = $(this);
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
			$contractPartyPistHtml = $("#contract-party-list").html();	
		//提交
		let $contractAppendicesListtHtml = $("#contract-appendices-list").html();
		if(util.isEmpty($contractAppendicesListtHtml)){
			util.showMsg("合同附件信息不能为空！")
			//return
		}else{
			let $tr1 = $("#contract-party-list tr");
			let sign_ids = [];
			for(let a = 0;a < $tr1.length;a++){
				sign_ids.push($tr1[a].id)
			}
			console.log(sign_ids)
			
			let $tr3 = $("#contract-appendices-list tr");
			let files = [];
			for(let c = 0;c < $tr3.length;c++){
				files.push($tr3[c].id)
			}
			console.log(files)
			let da = {
				contract_code: $contractNumVal,
				contract_subject: $contractSubVal,
				contract_name: $contractNameVal,
				contract_amount: $contractMoneyVal,
				sign_date: $contractSigningTimeVal,
				effect_date: $contractYakeTimeVal,
				invalid_date: $contractInvalidTimeVal,
				effect_period: $contractYesTimeVal,
				pay_plan: $contractPaymentPlanVal,
				pay_standard: $contractPaymentMethodVal,
				contract_explain: $contractNotesVal,
				sign_ids: sign_ids,
				files: files
			}
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/contract/update",
				data: JSON.stringify(da),				
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						console.log(res)
						util.showMsg("提交成功！")

						//合同详情选取
						$(".htn-list-xq").html(searchListProduc([res.data]));
						$(".htn-list-xq input").remove();

						$('#modal-createContract-produc').modal('hide');
					}					
				},
				error: function(error){
					util.showMsg("error")
				}
			});		
		}
	})	
	//附件
	let className;
	$doc.on("click", "#btn-added, #btn-added-produc", function(){
		className = $(this).data("class");
		console.log(className)
		fileUpload()
		
		// if(className == "enclosure-list"){//作品附件
		// 	classNa 
		// }else{
		// 	//合同附件

		// }
		
	})
	$doc.on("click", ".btn-upload-dele", function(){
		$(this).parents("tr").remove();
	})
	$doc.on("click", ".btn-upload", function(){
		for(var i = 0;i < resD.success.length;i++){
			let file = resD.success[i].data[0];
			let da = {
				file_name: file.file_name,
				file_type: file.file_type,
				file_url: file.file_url,
				file_size: file.file_size
			}
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/fileobj/update",
				data: JSON.stringify(da),				
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						console.log(res)
						let html = '';
						html += '<tr id="'+ res.data.id +'">'+
								// '	<th class="th" scope="row">1</th>'+
								'	<td>'+ res.data.file_name +'</td>'+
								'	<td>'+ res.data.file_type +'</td>'+
								'	<td>'+ res.data.file_size +'</td>'+
								// '	<td>2018-12-23 10:55</td>'+
								// '	<td>安先生</td>'+
								// '	<td>2018-12-23 10:55</td>'+
								'	<td><button type="button" class="btn btn-default btn-upload-dele">删除</button></td>'+
								'</tr>';						
						$("#file-added").remove();
						$(".modal-backdrop").remove();
						$("body").removeClass("modal-open");
						console.log(className);
						$("#"+ className).append(html);
					}					
				},
				error: function(error){
					util.showMsg("error")
				}
			});		
		}
	})
}
function showArr(name){
    let obj = document.getElementsByName(name) || "";
    let check_val = '';
    for(let k in obj){
        if(obj[k].checked)
		check_val = check_val + obj[k].value + ",";
    }
    return check_val.slice(0,-1);
}

let listHtml = '';
function copy(){
	var checkbox = $("input[name=work-list]");
	let id;
	for (let i = 0; i < checkbox.length; i++) {
		var $this = checkbox[i];
		if($this.checked){
			id = $this.value;
			//kkid.push(id)
			listHtml += '<tr class="f_'+ id +'" id="'+ id +'">'+ $(".t_"+ id).html() +'</tr>';
		}
	}
	return listHtml;
}	

let worksSearchListArr = {};
function worksSearchListF(nameVal, page){
	let jsond = {
		opus_name: nameVal,
		pageNum: page,
		pageSize: 10
	}
	$.ajax({
		type: "GET",
		url: "http://140.143.142.191/dadi/opus/list",
		data: jsond,
		dataType: "json",
		cache: false,
		contentType: "application/json;charset=UTF-8",
		success: function(res) {
			if(res && res.status == 1){
				let data = res.data;
				searchDetais(data)
				
			}
		},
		error: function(error){
			util.showMsg("error")
		}
	});
}
function searchDetais(data){
	let worksSearchListJson = [];
	for(let i = 0, len = data.length;i < len;i++){
		$.ajax({
			type: "GET",
			url: "http://140.143.142.191/dadi/opus/findById",
			data: {
				id: data[i].id
			},
			dataType: "json",
			cache: false,
			async:false,
			contentType: "application/json;charset=UTF-8",
			success: function(res) {				
				if(res && res.status == 1){
					let d = res.data;
					let dr = d.droit[0];
					let json = {
						id: d.opus.id,
						opus_name: d.opus.opus_name,
						opus_type: d.opus.opus_type,
						shou_quan_ren: dr.shou_quan_ren,
						bei_shou_quan_ren: dr.bei_shou_quan_ren,
						droit_startime: dr.droit_startime,
						droit_mode: dr.droit_mode,
						sqxk_sydy: dr.sqxk_sydy,
						sqxk_syyy: dr.sqxk_syyy,
						is_deleg: dr.is_deleg,
						is_wripr: dr.is_wripr,
						sqxk_syqd: dr.sqxk_syqd,
						sqxk_sycs: dr.sqxk_sycs,
						droit_content: dr.droit_content,
						droit_propor: dr.droit_propor,
						droit_price: dr.droit_price,
						htql_ms: dr.htql_ms,
						droit_des: dr.droit_des
					} 
					worksSearchListJson.push(json)
					//worksSearchListArr.
					// for(var i = 0;i < worksSearchListJson.length;i++){
					// 	if(worksSearchListJson[i] && worksSearchListJson[i].id == json.id){ //修改
					// 		$.extend(worksSearchListJson[i], jsond);						
					// 	}else{
					// 		worksSearchListJson.push(json)
					// 	}
					// 	break
					// }
					
					
				}
			},
			error: function(error){
				util.showMsg("error")
			}
		});
	}
	console.log(worksSearchListJson)
	$(".work-search-list").html(worksSearchList(worksSearchListJson))
}

let resD;
function reslo(res){
	console.log(res)
	resD = res;
}
let upload = '';
upload += '<div class="modal fade " style="display:blos1ck; z-index:9999" id="file-added" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
			'	<div class="modal-dialog">'+
			'		<div class="modal-content">'+
			'			<div class="modal-header">'+
			'				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
			'				<h4 class="modal-title" id="myModalLabel">新增</h4>'+
			'			</div>'+
			'			<div class="modal-body">'+
			'				<div id="easyContainer"></div>'+
			'			</div>'+
			'			<div class="modal-footer">	'+			
			'				<button type="button" class="btn btn-primary btn-upload">确认</button>'+
			'				<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
			'			</div>'+
			'		</div>'+
			'	</div>'+
			'</div>'

//上传
function fileUpload(){
	$("body").append(upload)
	
	let url = "http://140.143.142.191/dadi/fileobj/upload";
	util.fileFun(url, reslo);
	$("#file-added").modal('show');
}
//下一步
function nextBtn(me, $li){
	let $main = me.parents(".main"),
	$nextMain = $main.next(".main");
	let index = $main.index();
	$li.eq(++index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$nextMain.show();
}
//上一步
function preBtn(me, $li){
	let $main = me.parents(".main"),
	$pretMain = $main.prev(".main");
	let index = $main.index();
	$li.eq(--index).addClass("active").siblings().removeClass("active");
	$main.hide();
	$pretMain.show();
}
function tatbInit($id, $main){
	return true;
}



function init(){
	workslist();
	bindEvents();
}
init();