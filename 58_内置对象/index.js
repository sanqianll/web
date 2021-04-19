//自己写了一个差不多的类
var myMath = {
    PI: 3.1415926,
    max: function () {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function () {
        var min = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (min > arguments[i]) {
                min = arguments[i];
            }
        }
        return min;
    }
}
console.log(myMath.min(1, 2, 3, 4, 5, 6, 7, 8));
console.log('---------------');

//下面这个是随机点名的案例
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var arr = ['闫思佳', '徐嘉乐', '武迪', '武桂毅', '谭霖庆', '魏志杰'];
console.log(arr[getRandomInt(0, 5)]);

//-------------------------------------------------------------
//猜数游戏

// var min = prompt('最小值为:');
// var max = prompt('最大值为:');
// var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// while (true) {
//     var subnum = prompt('输入猜测的数字：');

//     if (subnum > randomNumber) {
//         alert('偏大');
//     }
//     if (subnum < randomNumber) {
//         alert('偏小');
//     }
//     if (subnum == randomNumber) {
//         break;
//     }
// }
// alert('回答正确');

//---------------------------------------------------------------
var now = new Date('2021-2-4 8:8:4');
console.log(now);
var date = new Date();
console.log(date); //获取当前日期
console.log(date.getFullYear()); //获取当前年份
console.log(date.getMonth()); //获取当前月份（0~11）
console.log(date.getDate());