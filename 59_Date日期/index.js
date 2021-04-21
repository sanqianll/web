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

//-----------------------------------------------
//获得时间戳
//1.第一种写法，直接用函数
var now = new Date();
console.log(now.getTime());
console.log(now.valueOf());

//2.第二种写法，使用 +new 快捷法
var now2 = +new Date();
console.log(now2);

//3.第三种写法，直接调用 Date.now() 函数
console.log(Date.now());