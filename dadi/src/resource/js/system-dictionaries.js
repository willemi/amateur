import '../css/system-dictionaries.scss';
const util = require("./common/util.js")
const itemDictionariesList = require("../tpl/item-dictionaries-list.tpl")
function initData(pid){
    pid = pid || -1
    let data = {
        pid: pid
    }
    $.ajax({
        type: "POST",
        url: "http://140.143.142.191/dadi/dic/list",
        data: JSON.stringify(data),
        dataType: "json",
        cache: false,
        contentType: "application/json;charset=UTF-8",
        success: function(res) {
            if(res && res.status == 1){
                if(pid > -1){
                    $(".erji").html(itemDictionariesList(res.data))
                }else{
                    $(".yiji").html(itemDictionariesList(res.data))
                }                
            }
        }
    })
}
initData()



function addData(addj){
    let data = {};
    $.extend(data, addj)
    console.log(data)
    $.ajax({
        type: "post",
        url: "http://140.143.142.191/dadi/dic/update",
        data: JSON.stringify(data),
        dataType: "json",
        cache: false,
        contentType: "application/json;charset=UTF-8",
        success: function(res) {
            if(res && res.status == 1){
                if(res.data.pid > -1){
                    $(".erji").append(itemDictionariesList([res.data]))
                }else{
                    $(".yiji").append(itemDictionariesList([res.data]))
                }   
                $(".dl-tk").remove();
                $(".dd-fixed").remove();
            }
        }
    })
}
let yijiName = '', pid = -1, id, status;
$(".yiji").on("click", "li", function(){
    let id = $(this).attr("id");
    yijiName = $(this).text();
    initData(id)
})
let erjiHtml = '';
erjiHtml += '<div class="dd-fixed">'+
            '<h3><i>一级类别</i><a class="cloe">X</a></h3>'+
            '<div>'+
            '     <label>名称</label><input type="text" id="e-type">'+
            '</div>'+
            '<a class="f-qr">确认</a>'+
            '</div>';
$("body").on("click", ".addyj", function(){
    $("body").append(erjiHtml)
    $(".dd-fixed").show();
    console.log(pid)
    if(pid > -1){
        $(".dd-fixed i").text(yijiName)
    }
    
    pid = pid;
})
$("body").on("click", ".cloe", function(){
    $(".dd-fixed").remove();
})
$("body").on("click", ".addej", function(){
    $("body").append(erjiHtml)
    $(".dd-fixed").show();
    $(".dd-fixed i").text(yijiName)
    pid = id;
})
$("body").on("click", ".f-qr", function(){
    let val = $("#e-type").val();
    if(util.isEmpty(val)){
        util.showMsg("不能为空")
    }else{
        let data = {
            name: val,
            status: '',
            pid: pid
        }
        addData(data)
    }
})

let dlHtml = '';
dlHtml += '<dl class="dl-tk">'+
                '<dt class="addyj">增加同级类别</dt>'+
                '<dd class="addej">增加下级类别</dd>'+
                // '<dd>修改类别</dd>'+
                // '<dd>删除类别</dd>'+
                '</dl>';
$(".admin-tabel").bind("contextmenu", function(){return false;}) 
$(".yiji").mousedown("li", function(e) {
    $(".dl-tk").remove();
    status = e.target.value;
    pid = e.target.className;
    id = e.target.id;  
    //yijiName = e.target.innerHTML;      
    //右键为3       
    if (3 == e.which) {        
        $("body").append(dlHtml)
        $(".dl-tk").css({
            'top': e.clientY+10,
            'left': e.clientX+10
        })
    }
})