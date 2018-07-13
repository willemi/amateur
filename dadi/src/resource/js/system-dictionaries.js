import '../css/system-dictionaries.scss';
const util = require("./common/util.js")
let dlHtml = '';
dlHtml += '<dl class="dl-tk">'+
                '<dt>增加同级类别</dt>'+
                '<dd>增加下级类别</dd>'+
                '<dd>修改类别</dd>'+
                '<dd>删除类别</dd>'+
                '</dl>';
$(".admin-tabel").bind("contextmenu", function(){   return false; }) 
$(".panel-body li").mousedown(function(e) {
    $(".dl-tk").remove();
    //右键为3       
    if (3 == e.which) {
        console.log(e)
        console.log(e.target.id)
        let html = e.target.innerHTML + dlHtml
        e.target.innerHTML = html;
        $(".dl-tk").css({
            'top': e.offsetY,
            'left': e.offsetX
        })
    } else if (1 == e.which) {
    //左键为1
    }
})