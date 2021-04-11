// var arr1 = new Array();
// var arr2 = []; // 创建一个空数组
// var arr3 = [1, '2', true];


//--------------------------------------------------
//求平均值和最大值

// var arr = [2, 6, 1, 7, 4];
// var sum = 0;
// var ave = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// ave = sum / arr.length;
// console.log('和为' + sum);
// console.log('平均值为' + ave);


//----------------------------------------------------
//求最大值

// var arr = [2, 6, 1, 77, 52, 25, 7];
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log('最大的值为：'+max);

//----------------------------------------------------
//数组转换为分割字符串
var arr = ['red', 'green', 'blue', 'pink'];
var str = '';
for (var i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
        str += arr[i] + '|';
    } else {
        str += arr[i];
    }
}
console.log(str);


//--------------------------------------------------------
//数组元素的插入
var foods = ['牛奶', '咖喱', '土豆', '豌豆', '梨', '西瓜', '咸蛋'];
foods[8] = '便宜点';
console.log(foods);
console.log(foods[7]);

//--------------------------------------------------------
//将数组元素中大于10的元素放入新的数组中
// var arr1 = [2, 0, 6, 1, 77, 52, 0, 25, 7];
// var arr2 = [];
// var numb = 0;
// for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] >= 10) {
//         // arr2[numb] = arr1[i];  //借助了一个新变量用来赋值
//         arr2[arr2.length] = arr1[i];  //这个直接使用新数组长度作为标签号
//         numb++;
//     }
// }
// console.log(arr2);

var arr1 = [2, 0, 6, 1, 77, 52, 0, 25, 7];
var arr2 = [];
var numb = 0;
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != 0) {
        // arr2[numb] = arr1[i];  //借助了一个新变量用来赋值
        arr2[arr2.length] = arr1[i]; //这个直接使用新数组长度作为标签号
        numb++;
    }
}
console.log(arr2);