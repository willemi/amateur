import '../css/works.scss';

const util = require("./common/util.js")

const rightNewsTpl = require('../tpl/item-right-news.tpl');
const itemSearchListTpl = require('../tpl/item-search-list.tpl');
const worksListTpl = require('../tpl/item-works-list.tpl');
const obligeeListTpl = require('../tpl/item-obligee-list.tpl');
const qianyuetTpl = require('../tpl/item-qianyue-list.tpl');
const itemSearchListLookTpl = require('../tpl/item-look-xuanqu.tpl');
const itemSearchListLook1Tpl = require('../tpl/item-look-xuanqu.1.tpl');
const itemSearchListLook2Tpl = require('../tpl/item-look-xuanqu.2.tpl');

let $RightNews = $(".right-news");

window.formatobligee_type = function(state){
	state = parseInt(state)
	switch(state){
		case 0:
			return '否';
		case 1:
			return '是';
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

window.formatopus = function(state){
	state = parseInt(state)
	switch(state){
		case 1:
			return '歌曲 ';
		case 2:
			return '乐曲 ';
		case 3:
			return '戏剧 ';
		case 4:
			return '戏曲';
		default:
			return "无";
	}
}
window.formattheme = function(state){
	state = parseInt(state)
	switch(state){
		case 1:
			return '通俗 ';
		case 2:
			return '美声 ';
		case 3:
			return '嘻哈 ';
		case 4:
			return '摇滚';
		case 5:
			return '民谣 ';
		case 6:
			return '影视 ';
		default:
			return "无";
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

// window.formatobligee_syfs = function(state){
// 	state = parseInt(state)
// 	switch(state){
// 		case 0:
// 			return '无限制';
// 		case 1:
// 			return '有线';
// 		case 2:
// 			return '无线';
// 	}
// }
// window.formatobligee_syqd = function(state){
// 	state = parseInt(state)
// 	switch(state){
// 		case 0:
// 			return '无限制';
// 		case 1:
// 			return 'OTT';
// 		case 2:
// 			return 'IPTV';
// 		case 3:
// 			return '广播';
// 		case 4:
// 			return '电视';
// 		case 5:
// 			return 'APP';
// 	}
// }
// window.formatis_pay = function(state){
// 	state = parseInt(state)
// 	switch(state){
// 		case 0:
// 			return '否';
// 		case 1:
// 			return '是';
// 	}
// }
// window.formatcurrency = function(state){
// 	state = parseInt(state)
// 	switch(state){
// 		case 0:
// 			return '否';
// 		case 1:
// 			return '是';
// 	}
// }

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

//默认展示列表
let workslistPage = 1;
function workslist(page){
	page = page || 1;
	$.ajax({
		type: "GET",
		url: "http://140.143.142.191/dadi/opus/list",
		data: {
			opusClassify: 1,
			pageNum: page,
			pageSize: 10
		},
		dataType: "json",
		cache: false,
		success: function(res) {
			if(res.status == 1){
				$("#works-list").html(worksListTpl(res.data));
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
			url: "http://140.143.142.191/dadi/opus/delete",
			data: JSON.stringify({
				id: id
			}),
			dataType: "json",
			contentType: "application/json;charset=UTF-8",
			cache: false,
			success: function(res) {
				if(res && res.status == 1){
					workslist()
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
			util.showMsg('权利变更不能为空')
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
				util.showMsg("error")
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
	//作品权利信息
	//查询引用
	let kkid = [];
	$("#query-reference").on("click", function(){		
		let $val = $("input[name='news']:checked").val();
		if($val == 0){
			kkid = [];
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
			kkid = [];			
			let jsond = {
				droit_g_id: $this.val(),
				pageNum: 1,
				pageSize: 20
			}
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/droit/list",
				data: JSON.stringify(jsond),
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						for(var i = 0;i < res.data.length;i++){
							kkid.push(res.data[i].id)
						}
						console.log(kkid)
						$RightNews.html(itemSearchListLook1Tpl(res.data));
					}
				},
				error: function(error){
					util.showMsg("error")
				}
			});
		}else{
			util.showMsg('选择权利来源！')
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
							$(".htn-list").html(itemSearchListTpl(res.data));
						}else{//创建
							$(".htn-list").html('<div class="ht-list-s"><p>查询无结果</p><a class="cjht" data-toggle="modal" data-target="#modal-createContract">创建合同</a></div>');
						}
					}					
				},
				error: function(error){
					util.showMsg("error")
				}
			});		
		}
		
	})
	//查看并选择权利
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
				}					
			},
			error: function(error){
				util.showMsg("error")
			}
		});		
		

	})	
	//批量选取id
	function copy(){
		var checkbox = $("input[name=a1]");
		let html = '',id;
		for (let i = 0; i < checkbox.length; i++) {
			var $this = checkbox[i];
			if($this.checked){
				id = $this.value;
				kkid.push(id)
				html += '<tr class="a b_'+ id +'" id="'+ id +'">'+ $(".c_"+ id).html() +'</tr>';
			}
		}
		return html;
	}	
	//合同详情选取
	$doc.on("click", ".btn-xqu", function(){
		console.log(droitJson)
		let c = copy();	
		if(util.isEmpty(c)){
			util.showMsg("请选取权利信息");
		}else{
			$('#modal-detailsContract').modal('hide');
			$(".qlnews-xuanqu").html(c);
		}
		$(".a input").remove();
	})
	$('#modal-choiceContracts').on('hidden.bs.modal' ,function(e){
    	$("#ht-name").val('');
		$(".htn-list").html('');
		$(".qlnews-xuanqu").html('');
	});
	$doc.on("click", ".btn-xuanqu-z", function(){
		if(util.isEmpty($RightNews.html())){
			util.showMsg("请选取权利信息");
		}else{			
			$('#modal-choiceContracts').modal('hide');
			
			$RightNews.html($(".qlnews-xuanqu").html());
			
			console.log(kkid)
		}		
	})
	//创建合同
	// 创建合同、无权利信确认
	$doc.on("click", ".btn-cjqr", function(){
		$('#modal-createContract').modal('hide');
		$(".htn-list").html(itemSearchListTpl(data3));
	})	
	//合同下一步\提交	
	let $stepa = $(".stepa li");
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
				util.showMsg("合同基础信息不能为空！")
				//return
			}else{
				
			}			

		}else if($this.hasClass("next-step-02")) {
			//第二步
			let $qlnewsListHtml = $(".qlnews-list").html();
			if(util.isEmpty($qlnewsListHtml)){
				util.showMsg("合同权利信息不能为空！")
				//return
			}else{

			}
		}else{
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

				let $tr2 = $(".qlnews-list tr");
				let droit_ids = [];
				for(let b = 0;b < $tr2.length;b++){
					droit_ids.push($tr2[b].id)
				}
				console.log(droit_ids)
				
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
					droit_ids: droit_ids,
					files: files
				}
				$.ajax({
					type: "POST",
					url: "http://140.143.142.191/dadi/opus/update",
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
			}
		}
		nextBtn($this, $stepa);
	})	
	//附件
	let className;
	$doc.on("click", "#btn-added", function(){
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
								'	<td>2018-12-23 10:55</td>'+
								'	<td>安先生</td>'+
								'	<td>2018-12-23 10:55</td>'+
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
							qyListJson.push(res.data);
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
			util.showMsg("权利信息新增不能为空！")
			return
		}else{
			
			$('#modal-newly-added1').modal('hide');
		}
	})
	$doc.on("click", ".pre-stepa", function(){
		let $this = $(this);
		preBtn($this, $stepa);
	})
	// $doc.on("click", ".ip-click", function(){
	// 	location.href = "ipdetails.html"
	// })

	//作品下一步\提交	
	let $step = $(".step li");
	$doc.on("click", ".next-step", function(){		
		var $this = $(this);
		let $workNameVal = $("#work-name").val(),
			$workTypeVal = $("#work-type").val(),
			$themeTypeVal = $("#theme-type").val(),
			$lenghtTimeVal = $("#lenght-time").val(),
			$publicTimeVal = $("#public-time input").val(),
			$creationTimeVal = $("#creation-time input").val(),
			// $albumVal = $("#album").val(),
			// $originalScriptVal = $("#original-script").val(),
			$versionDescriptionVal = $("#version-description").val(),
			$worksDescVal = $("#works-desc").val(),
			$obligeeListHtml = $(".obligee-list").html();
		if($this.hasClass("next-step-01")){
			//第一步			
			if(util.isEmpty($workNameVal) || util.isEmpty($workTypeVal) || util.isEmpty($themeTypeVal) || util.isEmpty($lenghtTimeVal) || util.isEmpty($publicTimeVal) || util.isEmpty($creationTimeVal) || util.isEmpty($versionDescriptionVal) || util.isEmpty($worksDescVal) || util.isEmpty($obligeeListHtml)){
				util.showMsg("作品基础信息不能为空！")
			}else{
				nextBtn($this, $step);
			}			
		}else if($this.hasClass("next-step-02")) {
			//第二步
			let $rightNewsHtml = $RightNews.html();
			if(util.isEmpty($rightNewsHtml)){
				util.showMsg("作品权利信息不能为空！")
			}else{
				nextBtn($this, $step);
			}
		}else{
			//提交
			let $enclosureListHtml = $("#enclosure-list").html();
			if(util.isEmpty($enclosureListHtml)){
				util.showMsg("作品附件信息不能为空！")
			}else{
				let $tr1 = $(".obligee-list tr");
				let obligeeIds = [];
				for(let a = 0;a < $tr1.length;a++){
					obligeeIds.push($tr1[a].id)
				}
				console.log(obligeeIds)

				let $tr2 = $(".right-news tr");
				let droitIds = [];
				for(let b = 0;b < $tr2.length;b++){
					droitIds.push($tr2[b].id)
				}
				console.log(droitIds)
				
				let $tr3 = $("#enclosure-list tr");
				let files = [];
				for(let c = 0;c < $tr3.length;c++){
					files.push($tr3[c].id)
				}
				console.log(files)
				let da = {
					opusClassify: 1,
					opus_name: $workNameVal,
					opus_type: $workTypeVal,
					theme_type: $themeTypeVal,
					opus_duration: $lenghtTimeVal,
					publish_date: $publicTimeVal,
					indite_date: $creationTimeVal,
					version_explain: $versionDescriptionVal,
					opus_briefing: $worksDescVal,
					obligee_ids: obligeeIds,
					droit_ids: droitIds,
					files: files
				}
				$.ajax({
					type: "POST",
					url: "http://140.143.142.191/dadi/opus/update",
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
			}
		}
	})
	$doc.on("click", ".pre-step", function(){
		var $this = $(this);
		preBtn($this, $step);
	})	
	
	
	//作品名称模糊搜索
	let $selectDiv = $('.select-div');
	// $("#work-name").keyup(function(e){
	// 	var $this = $(this);
	// 	//如果输入空格自动删除
	// 	this.value=$this.val().replace(' ','');
	// 	console.log(this.value)
	// 	//列表框显示
	// 	$selectDiv.show();
	// 	if(e.keyCode == 38) {
	// 		//up
	// 		console.log('up');
	// 	}else if(e.keyCode == 40) {
	// 		//down
	// 		console.log('down');		
	// 	}else if(e.keyCode == 13) {
	// 		//enter
	// 		console.log('enter');
	// 		$selectDiv.hide();
	// 	}else {
	// 		//other
	// 		console.log('other');
	// 	}
	// })
	//权利人列表选取	
	// $selectDiv.on("click", "li", function(){
	// 	$(".obligee-list").html(obligeeListTpl(data4));
	// 	$selectDiv.hide();
	// })
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
		let $this = $(this)
		let $modalObligeeNameVal = $modalObligeeName.val(),
			$modalObligeeTypeVal = $modalObligeeType.val(),
			$modalObligeeRemunerationVal = $modalObligeeRemuneration.val(),
			$modalObligeeCurrencyVal = $modalObligeeCurrency.val(),
			$modalObligeeMoneyVal = $modalObligeeMoney.val();
		if(util.isEmpty($modalObligeeNameVal) || util.isEmpty($modalObligeeTypeVal) || util.isEmpty($modalObligeeRemunerationVal) || util.isEmpty($modalObligeeCurrencyVal) || util.isEmpty($modalObligeeMoneyVal)){
			util.showMsg("权利人列表新增不能为空！")
			return
		}else{
			let $id = $(this).attr("id");
			let jsond = {
				id: $id,
				obligee_name: $modalObligeeNameVal,
				obligee_type: $modalObligeeTypeVal,
				is_pay: $modalObligeeRemunerationVal,
				currency:  $modalObligeeCurrencyVal,
				pay_amount: $modalObligeeMoneyVal
			}
			let pushD = true;
			if(qlListJson.length > 0){//有数据判断是修改还是增加
				for(var i = 0;i < qlListJson.length;i++){
					if(qlListJson[i] && qlListJson[i].id == $id){ //修改
						$.extend(qlListJson[i], jsond);
						pushD = false;
						break
					}
				}
			}
			
			console.log(jsond.id)
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/obligee/update",
				data: JSON.stringify(jsond),
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						if(pushD){
							qlListJson.push(res.data);
						}
						document.getElementById("qbligForm").reset();
						$this.attr("id", "")						
						console.log(qlListJson)
						$(".obligee-list").html(obligeeListTpl(qlListJson));
						$('#modal-qbligeeAdd').modal('hide');
					}
				},
				error: function(error){
					util.showMsg("error")
				}
			});
		}
	})
	//修改
	$doc.on("click", ".btn-obligee-list-edit", function(){
		let id = $(this).parents("tr").attr("id");
		for(var i = 0;i < qlListJson.length;i++){
			let json = qlListJson[i];
			if(json.id == id){
				$btnListQr.attr("id", json.id);
				$modalObligeeName.val(json.obligee_name);
				$modalObligeeType.val(json.obligee_type);
				$modalObligeeRemuneration.val(json.is_pay);
				$modalObligeeCurrency.val(json.currency);
				$modalObligeeMoney.val(json.pay_amount);
				break;
			}
		}		
	})
	// $doc.on("click", ".obligee-checkbox-btn", function(){
	// 	util.checkB($(this), "obligee-checkbox")
	// })
	//删除
	$doc.on("click", ".btn-obligee-list-dele", function(){
		let id = $(this).parents("tr").attr("id");
		$.ajax({
			type: "POST",
			url: "http://140.143.142.191/dadi/obligee/delete",
			data: JSON.stringify({id: id}),
			dataType: "json",
			cache: false,
			contentType: "application/json;charset=UTF-8",
			success: function(res) {
				if(res && res.status == 1){
					util.showMsg("删除成功！")
					for(var i = 0;i < qlListJson.length;i++){
						let json = qlListJson[i];
						if(json.id == id){
							qlListJson.splice(i, 1);  
						}
					}
					console.log(qlListJson)
					$(".obligee-list").html(obligeeListTpl(qlListJson));
				}
			},
			error: function(error){
				util.showMsg("error")
			}
		});
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

	//pages	
	
	//util.pageinator("pageLimit", "10", pageData);
	// util.pageinator("pageLimit2", "10", "url", tplData);
	// util.pageinator("pageLimit3", "10", "url", tplData);
	// util.pageinator("pageLimit4", "10", "url", tplData);
	// util.pageinator("pageLimit5", "10", "url", tplData);
	// util.pageinator("pageLimit6", "10", "url", tplData);
	
	
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