function countDown(time) {
    var nowtime = +new Date();
    var inputtime = +new Date(time);
    var times = (inputtime - nowtime) / 1000;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;

    var h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;

    var d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;

    console.log('还有 ' + d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒');

}
countDown('2021-4-23 0:0:0');

var arr = new Array(1, 2, 3, 3, 4, 4);
console.log(arr instanceof Array);
console.log(Array.isArray(arr));

arr.sort(function (a, b) {
    return b - a;
})
console.log(arr);
console.log(arr.indexOf(5));