// 格式化时间
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var week = date.getDay();
var week_arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
console.log('当前时间为：' + year + '年 ' + month + '月 ' + day + '日 ' + week_arr[week]);


// 获取当前时间
function gettime() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}
console.log(gettime());