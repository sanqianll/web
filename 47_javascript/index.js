var myname = prompt('请输入你的用户名');
alert('欢迎' + myname);
var a0 = 'str';
var a1 = 1;
console.log(a1);
var a1 = 1,
    a2 = 2,
    a3 = 3, //一次性定义多个变量
    a4; //这是一个未赋值的变量
console.log(a4); //undefined未定义
//console.log(a5)//这行代码会报错。报错之后不会向后执行
//下面是写一个8进制的数
var b1 = 044; //如果书写不规范则会变成正常的10进制数
console.log(b1);
var b2 = 0xff; //这个是16进制的数
console.log(b2);
var b3 = Number.MAX_VALUE;
console.log(b3);

console.log('woshinibaba' - 3);
//在这里加号可能有特殊的含义，用减法对字符串和数字进行计算的时候会出现NaN not a number
console.log(isNaN(b1 - a0)); //isNaN函数，判断是否为非数字
console.log('12' + 13); //解雇哦为1213
console.log(a2 + '13'); //只要存在字符串类型的 相加之后就是字符串的连接