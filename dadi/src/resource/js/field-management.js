import '../css/trademark-management.scss';

const util = require("./common/util.js")

const fieldList = require('../tpl/item-field-list.tpl');

const itemSearchListTpl = require('../tpl/item-search-list.tpl');
const itemSearchListLookTpl = require('../tpl/item-look-xuanqu.tpl');
const itemSearchListLook1Tpl = require('../tpl/item-look-xuanqu.1.tpl');
const itemSearchListLook2Tpl = require('../tpl/item-look-xuanqu.2.tpl');
const qianyuetTpl = require('../tpl/item-qianyue-list.tpl');

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
window.formatobligee_you = function(state){
	state = parseInt(state)
	switch(state){
		case 0:
			return '无';
		case 1:
			return '有';
	}
}
let $stepa = $(".stepa li");

function initData(page){
	page = page || 1;
	$.ajax({
		type: "GET",
		url: "http://140.143.142.191/dadi/realmname/list",
		data: {
			pageNum: page,
			pageSize: 10
		},
		dataType: "json",
		cache: false,
		contentType: "application/json;charset=UTF-8",
		success: function(res) {
			if(res.status == 1){
				$(".management-list").html(fieldList(res.data));
				util.pageinator("pageLimit", page, res.page.pageCount, initData);
			}			
		},
		error: function(){			
		}
	});
}

function bindEvents(){
	var $doc = $(document);

	util.timepicker("regist_date");
	util.timepicker("end_date");

	util.timepicker("contract-signing-time");
	util.timepicker("contract-take-time");
	util.timepicker("contract-invalid-time");
	util.timepicker("contract-yes-time");
	util.timepicker("modal-right-start-time")
	util.timepicker("modal-right-dj-time")

	util.timepickerSection("datetimeStart", "datetimeEnd");	

	//列表删除
	$doc.on("click", ".worksList-dele", function(){
		let $this = $(this),
			id = $this.parent("td").attr("id");
		$.ajax({
			type: "get",
			url: "http://140.143.142.191/dadi/realmname/delete",
			data: {
				id: id
			},
			dataType: "json",
			contentType: "application/json;charset=UTF-8",
			cache: false,
			success: function(res) {
				if(res && res.status == 1){
					initData()
				}
			},
			error: function(){
				
			}
		});
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
					for(var i = 0;i < res.data.droit.length;i++){
						res.data.droit[i]._id = res.data.contract.contract_name +"-"+ res.data.contract.id;
					}
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
		let html = '',id, _id;
		for (let i = 0; i < checkbox.length; i++) {
			var $this = checkbox[i];
			if($this.checked){
				id = $this.value;
				_id = $this.id;
				//kkid.push(id)
				html += '<tr class="a b_'+ id +'" id="'+ id +'" data-id="'+ _id +'">'+ $(".c_"+ id).html() +'</tr>';
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
			$(".qlnews-xuanqu").append(c);
		}
		$(".a input").remove();
	})
	$('#modal-choiceContracts').on('hidden.bs.modal' ,function(e){
    	$("#ht-name").val('');
		$(".htn-list").html('');
		$(".qlnews-xuanqu").html('');
	});
	$doc.on("click", ".btn-xuanqu-z", function(){
		// if(util.isEmpty($RightNews.html())){
		// 	util.showMsg("请选取权利信息");
		// }else{			
			$('#modal-choiceContracts').modal('hide');
			let id = $(".qlnews-xuanqu tr").data("id");
			//$RightNews.html($(".qlnews-xuanqu").html());
			$("#contract_id").val(id)
			//console.log(kkid)
		//}		
	})
	//创建合同
	// 创建合同、无权利信确认
	// $doc.on("click", ".btn-cjqr", function(){
	// 	$('#modal-createContract').modal('hide');
	// 	$(".htn-list").html(itemSearchListTpl(data3));
	// })	
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
		if($this.hasClass("next-step-01")){
			//第一步
			
			if(util.isEmpty($contractNumVal) || util.isEmpty($contractSubVal) || util.isEmpty($contractNameVal) || util.isEmpty($contractMoneyVal) || util.isEmpty($contractSigningTimeVal) || util.isEmpty($contractYakeTimeVal) || util.isEmpty($contractInvalidTimeVal) || util.isEmpty($contractYesTimeVal) || util.isEmpty($contractPaymentPlanVal) || util.isEmpty($contractPaymentMethodVal) || util.isEmpty($contractNotesVal) || util.isEmpty($contractPartyPistHtml)){
				util.showMsg("合同基础信息不能为空！")
				//return
			}else{
				nextBtn($this, $stepa);
			}			

		}else if($this.hasClass("next-step-02")) {
			//第二步
			let $qlnewsListHtml = $(".qlnews-list").html();
			if(util.isEmpty($qlnewsListHtml)){
				util.showMsg("合同权利信息不能为空！")
				//return
			}else{
				nextBtn($this, $stepa);
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
							$('#modal-createContract').modal('hide');
							let dataId = res.data.contract_name +"-"+ res.data.id;
							$(".qlnews-list tr").attr("data-id", dataId)
							$(".qlnews-xuanqu").append($(".qlnews-list").html());
							$(".right-news input").remove();
							// setTimeout(function(){
							// 	location.reload();
							// })
						}					
					},
					error: function(error){
						util.showMsg("error")
					}
				});		
			}
		}		
	})	
	//附件
	let className;
	$doc.on("click", "#btn-added", function(){
		className = $(this).data("class");
		console.log(className)
		fileUpload()		
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
	//权利信息新增
	$doc.on("click", ".modal-right-info-btn", function(){
		let $modalRightInfoNameVal = $("#modal-right-info-name").val(),
			$modalRightInfoSetVal = $("#modal-right-info-set").val(),
			$modalRightInfoUntilVal = $("#modal-right-info-until").val(),
			$modalRightInfoSVal = $("#modal-right-info-s").val(),
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
			$limit5Val = $("input[name='limit5']:checked").val(),
			mode0 = showArr("mode0"),
			language = showArr("language"),
			mode = showArr("mode");
		if(util.isEmpty($modalRightInfoRemarks) || util.isEmpty($modalRightInfoNameVal) || util.isEmpty($modalRightInfoSetVal) || util.isEmpty($modalRightInfoUntilVal) || util.isEmpty($modalRightInfoSVal) || util.isEmpty($modalRightInfoSqrVal) || util.isEmpty($modalRightInfoSqpVal) || util.isEmpty($modalRightInfoSqmVal) || util.isEmpty($modalRightInfoQldescVal) || util.isEmpty($datetimeStartVal) || util.isEmpty($datetimeEndVal) || util.isEmpty($modalRightInfoDescVal) || util.isEmpty($modalRightInfoFVal) || util.isEmpty($limitVal) || util.isEmpty($limit1Val) || util.isEmpty($limit3Val) || util.isEmpty($limit4Val) || util.isEmpty(mode0) || util.isEmpty($limit5Val) || util.isEmpty(language) || util.isEmpty(mode)){
			util.showMsg("权利信息新增不能为空！")
			return
		}else{
			let data = {
				opus_name: $modalRightInfoNameVal,
				peri_num: $modalRightInfoSetVal,
				unit_price: $modalRightInfoUntilVal,
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
				sqxk_sydy: $limit5Val,
				sqxk_syyy: language,
				is_deleg: $limit4Val,
				is_wripr: $limitVal,
				sqxk_syqd: mode,
				sqxk_sycs: $modalRightInfoFVal,
				htql_ms: $modalRightInfoDescVal,
				droit_des: $modalRightInfoRemarks
			}
			console.log(data)
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/droit/update",
				data: JSON.stringify(data),
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						console.log(1)
						data.id = res.data.id;
						$(".qlnews-list").append(itemSearchListLook1Tpl([data]));
						document.getElementById("ht-add").reset();
						$('#modal-newly-added1').modal('hide');
					}
				},
				error: function(error){
					util.showMsg("error")
				}
			});
		}
	})
	$doc.on("click", ".pre-stepa", function(){
		let $this = $(this);
		preBtn($this, $stepa);
	})
	$doc.on("click", ".btn-xz-qr", function(){
		let $this = $(this);
		let $contract_idVal = $("#contract_id").val(),
			$realmname_addressVal = $("#realmname_address").val(),
			$ownerVal = $("#owner").val(),
			$owner_emailVal = $("#owner_email").val(),
			$registrarVal = $("#registrar").val(),
			$regist_dateVal = $("#regist_date input").val(),
			$end_dateVal = $("#end_date input").val(),
			$costVal = $("#cost").val(),
			$realm_statusVal = $("#realm_status").val(),
			$dns_serverVal = $("#dns_server").val(),
			$remarksVal = $("#remarks").val();

		if(util.isEmpty($contract_idVal) || util.isEmpty($realmname_addressVal) || util.isEmpty($ownerVal) || util.isEmpty($owner_emailVal) || util.isEmpty($registrarVal) || util.isEmpty($regist_dateVal) || util.isEmpty($end_dateVal) || util.isEmpty($costVal) || util.isEmpty($realm_statusVal) || util.isEmpty($dns_serverVal) || util.isEmpty($remarksVal)){
			util.showMsg("专利信息不能为空！")
			//return
		}else {			
			let $tr3 = $("#manage-file tr");
			let files = [];
			for(let c = 0;c < $tr3.length;c++){
				files.push($tr3[c].id)
			}
			console.log(files)
			$contract_idVal = $contract_idVal.split("-")
			let da = {
				contract_id: $contract_idVal[1],
				realmname_address: $realmname_addressVal,
				owner: $ownerVal,
				owner_email: $owner_emailVal,
				registrar: $registrarVal,
				regist_date: $regist_dateVal,
				end_date: $end_dateVal,
				cost: $costVal,
				realm_status: $realm_statusVal,
				dns_server: $dns_serverVal,
				remarks: $remarksVal,

				files: files
			}
			$.ajax({
				type: "POST",
				url: "http://140.143.142.191/dadi/realmname/update",
				data: JSON.stringify(da),				
				dataType: "json",
				cache: false,
				contentType: "application/json;charset=UTF-8",
				success: function(res) {
					if(res && res.status == 1){
						console.log(res)
						util.showMsg("提交成功！")

						$('#gengk-added').modal('hide');
						$(".qlnews-xuanqu").append($(".qlnews-list").html());
						$(".right-news input").remove();
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
		
	})
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
function showArr(name){
    let obj = document.getElementsByName(name) || "";
    let check_val = '';
    for(let k in obj){
        if(obj[k].checked)
		check_val = check_val + obj[k].value + ",";
    }
    return check_val.slice(0,-1);
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
function init(){
	initData();
	bindEvents();
}
init();