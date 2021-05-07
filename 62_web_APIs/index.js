function getday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = date.getDay();
    var week_arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return '当前时间为：' + year + '年 ' + month + '月 ' + day + '日 ' + week_arr[week]
}

// 返回一个当前的小时
function jma() {
    var date = new Date();
    var hour = date.getHours();
    if (hour > 5 && hour < 12) {
        return 1;
    }
    if (hour >= 12 && hour < 19) {
        return 2;
    } else {
        return 0;
    }
}