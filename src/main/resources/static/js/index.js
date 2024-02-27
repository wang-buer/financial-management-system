
//获取url中的参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//模拟title效果
function detaTitle(){
    var deta_title = document.querySelectorAll("[deta-title]");
    for (var i = 0; i < deta_title.length; i++){
        deta_title[i].setAttribute("deta-title",deta_title[i].getAttribute("title"));
        deta_title[i].removeAttribute("title");
    }
}

function getAllPayways() {
    $.ajaxSettings.async = false;
    $.get("/bills/getPayways",function (res) {
        var html = '<option value="-1">选择支付方式</option>';
        if (res.code == 200){
            $.each(res.datas,function (index,item) {
                html += '<option value="'+item.id+'">'+item.payway+'</option>';
            })
        }else {

        }
        $("#payway").html(html);
    });
    $.ajaxSettings.async = true;
}

function getAllWays() {
    $.ajaxSettings.async = false;
    $.get("/bills/getAllWays",function (res) {
        var html = '<option value="-1">选择风险等级</option>';
        if (res.code == 200){
            $.each(res.datas,function (index,item) {
                html += '<option value="'+item.code+'">'+item.name+'</option>';
            })
        }else {

        }
        $("#productType").html(html);
    });
    $.ajaxSettings.async = true;
}

function daysBetween(d2,d1) {
    if (d1 instanceof Date && d2 instanceof Date) {
        return parseInt((d2-d1)/24/1000/3600);
    }
    var date1 = Date.parse(d1);
    var date2 = Date.parse(d2);
    return parseInt((date2-date1)/24/1000/3600);
}

function dateAdd(date,days) {
    if (days == undefined || days == ""){
        days = 0;
    }
    date = new Date(date);
    date.setDate(date.getDate()+days);
    var day = date.getDate()<10 ? "0"+(date.getDate()) : (date.getDate());
    var month = date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
    return date.getFullYear()+"-"+month+"-"+day;

}