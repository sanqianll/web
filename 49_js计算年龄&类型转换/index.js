// var birth = prompt("请输入你的出生年份");
// // var age = 2021 - parseInt(birth);
// var age = 2021 - birth;//这里直接出发隐式数字型转换
// alert('您的年龄为:' + age);

//第二个案例的js代码
//------------------------------------------------------------------

var add1 = prompt('输入第一个加数：')
var add2 = prompt('输入第二个加数：')
var sum = parseFloat(add1) + parseFloat(add2);
alert('和为：' + sum);

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
//上面的这些值会呗Boolean默认转换成false

console.log(Boolean(1));

//这个是课后作业
//-------------------------------------------------------------------

var name_user = prompt('请输入您的用户名：');
var age_user = prompt('请输入您的年龄');
var sex_user = prompt('请输入您的性别：');
alert('姓名:' + name_user + '\n年龄:' + age_user + '\n性别:' + sex_user);