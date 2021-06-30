var father = document.querySelector('.father');
console.log(father.offsetTop);
console.log(father.offsetLeft);
console.log(father.offsetWidth);
console.log(father.offsetHeight);
console.log(father.offsetParent);

var gzt = document.querySelector('.gzt');
gzt.addEventListener('mousemove', function (e) {
    var xx = e.pageX - gzt.offsetLeft;
    var yy = e.pageY - gzt.offsetTop;
    gzt.innerHTML = 'x坐标为：' + xx + '  y坐标为：' + yy;
});

// 开始模态框的js样式
var link = document.querySelector('.login-header'); //点击链接
var title = document.querySelector('#title');
var login = document.querySelector('.login'); //整个登录的大窗口
var mask = document.querySelector('#bg'); //遮罩层
var closeBtn = document.querySelector('#closeBtn'); //关闭按钮

link.addEventListener('click', function () {
    login.style.display = 'block';
    mask.style.display = 'block';
});
closeBtn.addEventListener('click', function () {
    login.style.display = 'none';
    mask.style.display = 'none';
});
// 按下事件
title.addEventListener('mousedown', fn);

function fn(e) {
    var x = e.pageX - login.offsetLeft;
    var y = e.pageY - login.offsetTop;
    document.addEventListener('mousemove', move);

    function move(e) {
        login.style.top = (e.pageY - y) + 'px';
        login.style.left = (e.pageX - x) + 'px';
    }
    title.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', move);
    });
}