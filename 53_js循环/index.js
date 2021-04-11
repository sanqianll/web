// for (var i = 0; i < 10; i++) {
//     console.log('1');
// }
// console.log('-----------------------------');
// for (var i = 1; i <= 10; i++) {
//     console.log('输出' + i + '这个数');
// }
// console.log('-----------------------------');

// var sum = 0;
// for (var j = 1; j <= 100; j++) {
//     sum = sum + j;
// }
// console.log(sum);


// 学生成绩案例-------------------------------------------------
// var stu_nu = prompt('请输入学生的总人数');
// var scores;
// var sum = 0;
// var average;
// for (var i = 1; i <= stu_nu; i++) {
//     scores = prompt('请输入第' + i + '个学生的成绩');
//     sum = sum + Number(scores);
// }
// average = sum / Number(stu_nu);
// alert('总成绩为:' + sum + '\n平均分为:' + average + '\n');

// console.log('-------------------------------------------');
// var str='';
// for (var j = 0; j < 5; j++) {
//     str = str + '★'
// }
// console.log(str);



//-------------------------------------------------------------
//打印小星星
// var str = '';
// var rows = 6;
// var cols = 6;

// for (var i = 1; i < rows; i++) {
//     for (var j = 6-i; j < cols; j++) {
//         str = str + '★';
//     }
//     str = str + '\n';
// }
// console.log(str);

//打印9*9乘法表
var pro = 0;
var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        pro = i * j;
        str = str + (j + '*' + i + '=' + pro+'\t');
    }
    str = str + '\n';
}
console.log(str);