var num1 = prompt('请输入一个0~59（包含）的数');
if (num1 >= 60 || num1 < 0) {
    alert('数据不符合要求');
} else if (num1 < 10) {
    num1 = '0' + num1;
}
alert(num1);

//这个是用三元表达式做的
// num1=num1 >= 10 ? num1 : '0' + num1;
// alert(num1);
//觉得三元表达式也没啥意思

//----------------------------------------------------------
switch (1) {
    case 1:
        console.log('111');
        break;

    default:
        console.log('默认');
        break;

    case 3:
        console.log('33');
        break;
}