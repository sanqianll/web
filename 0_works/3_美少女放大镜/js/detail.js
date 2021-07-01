window.addEventListener('load', function () {
    // 获取参数
    var imgnumb = window.location.search;
    var imgnumb_num = imgnumb.split('=');

    var preimg=document.querySelector('.preimg');
    var kuang = document.querySelector('.kuang');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigImg = document.querySelector('.bigImg');

    preimg.src='images/'+imgnumb_num[1]+'0.jpg';
    bigImg.src='images/'+imgnumb_num[1]+'1.jpg';


    kuang.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    kuang.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    kuang.addEventListener('mousemove', function (e) {
        // 页内鼠标位置
        var x = e.pageX - kuang.offsetLeft;
        var y = e.pageY - kuang.offsetTop;
        // 页内遮罩位置
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //小图的最大移动距离
        var maskMaxX = kuang.offsetWidth - mask.offsetWidth;
        var maskMaxY = kuang.offsetHeight - mask.offsetHeight;
        // 大图的最大移动距离
        var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
        var bigMaxY = bigImg.offsetHeight - big.offsetHeight;
        // 大图位置

        var masksize = big.offsetWidth * kuang.offsetWidth / bigImg.offsetWidth;

        mask.style.width = masksize + 'px';
        mask.style.height = masksize + 'px';

        // 限制移动改良版
        if (maskX <= 0) {
            maskX = 0;
        }
        if (maskX >= maskMaxX) {
            maskX = maskMaxX;
        }
        if (maskY <= 0) {
            maskY = 0;
        }
        if (maskY >= maskMaxY) {
            maskY = maskMaxY;
        }
        var bigX = (maskX * bigMaxX) / maskMaxX;
        var bigY = (maskY * bigMaxY) / maskMaxY;

        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';

    })
});