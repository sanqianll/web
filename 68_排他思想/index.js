var btns = document.getElementsByClassName('btns');
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        for (var j = 0; j < btns.length; j++) {
            btns[j].style.backgroundColor = ''; //先将所有的按钮变成无色
        }
        this.style.backgroundColor = 'pink';    //再将这个按钮改变颜色
    }
}