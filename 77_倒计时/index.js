window.addEventListener('load', fn);

function fn() {

    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var ms = document.querySelector('.ss');

    var inputtime = +new Date('2021-6-30 18:00:00'); //返回的是用户输入实际按总的毫秒数
    function gettime() {
        var nowtime = +new Date(); //返回的是当前事件的毫秒数
        var times = (inputtime - nowtime) / 100; //times是剩余实际按总的秒数

        var ss = parseInt(times % 10); //秒
        ss = ss > 10 ? ss / 10 : ss;
        ms.innerHTML = ss;
        var s = parseInt(times / 10 % 60); //秒
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
        var m = parseInt(times / 600 % 60); //分
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var h = parseInt(times / 600 / 60 % 24); //时
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;
        var d = parseInt(times / 600 / 60 / 24); //天
        d = d < 10 ? '0' + d : d;
    }
    gettime(); //给一开始的时钟赋予初值
    var tt = null;

    tt = setInterval(gettime, 100);
    var start = document.querySelector('.start');
    var stop1 = document.querySelector('.stop');

    start.addEventListener('click', function () {
        tt = setInterval(gettime, 100);
    });
    stop1.addEventListener('click', function () {
        clearInterval(tt);

    });
    var ti = null;
    var tijiao = document.querySelector('.tijiao');
    tijiao.addEventListener('click', function () {
        tijiao.disabled = true;
        var num = 5;
        tijiao.innerHTML = '请' + num + '秒后再试';
        ti = setInterval(function () {
            num = num - 1;
            tijiao.innerHTML = '请' + num + '秒后再试';
            if (num === 0) {
                tijiao.disabled = false;
                tijiao.innerHTML = '提交';
                clearInterval(ti);
            }
        }, 1000);

    });

    var btn_jump = document.querySelector('.btn_jump');
    var jump = document.querySelector('.jump');
    btn_jump.addEventListener('click', function () {
        window.location.href = 'http://www.bilibili.com'
    })
    var num1 = 5;
    jump.innerHTML = '还剩' + num1 + '秒自动跳转至哔哩哔哩';
    setInterval(function () {
        num1--;
        if (num1 !== 0) {
            jump.innerHTML = '还剩' + num1 + '秒自动跳转至哔哩哔哩';
        } else {
            window.location.href = 'http://www.bilibili.com';
        }
    }, 1000);
}