var money = 0;
while (true) {
    var cs = prompt('请输入您要的操作\n1.存钱\n2.取钱\n3.显示余额\n4.退出');

    if (cs == 1) {
        money = money + Number(prompt('请输入您存入的钱数'));
        alert('您的余额为：' + money + '元');
    }
    if (cs == 2) {
        money = money - Number(prompt('请输入您取出的钱数'));
        alert('您的余额为：' + money + '元');
    }
    if (cs == 3) {
        alert('您的余额为：' + money + '元');
    }
    if (cs == 4) {
        alert('安全退出');
        break;
    }
}