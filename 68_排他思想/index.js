var btns = document.getElementsByClassName('btns');
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        for (var j = 0; j < btns.length; j++) {
            btns[j].style.backgroundColor = ''; //先将所有的按钮变成无色
        }
        this.style.backgroundColor = 'pink'; //再将这个按钮改变颜色
        document.body.style.backgroundImage = '';
    }
}
var imgs = document.querySelector('.baidu').querySelectorAll('img');
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        document.body.style.backgroundImage = 'url(' + this.src + ')';
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].style.border = '';
        }
        this.style.border = '1px solid yellow';
    }
}
var trs = document.querySelector('tbody').querySelectorAll('tr');
for (var i = 0; i < trs.length; i++) {
    trs[i].onmouseover = function () {
        //******利用了排他思想 会出现始终会保留一个变颜色的框框 */
        // for(var j=0;j<trs.length;j++){
        //     trs[j].className='';
        // }
        this.className = 'bg';
    }
    trs[i].onmouseout = function () {
        this.className = '';
    }
}

var j_cball = document.getElementById('j_cball');
var j_tbs = document.getElementById('j_tbs').getElementsByTagName('input');
j_cball.onclick = function () {
    for (var i = 0; i < j_tbs.length; i++) {
        j_tbs[i].checked = this.checked;
    }
}
for (var i = 0; i < j_tbs.length; i++) {
    j_tbs[i].onclick = function () {
        //计数器的一种思路

        // var flag = 0;
        // for (var j = 0; j < j_tbs.length; j++) {
        //     if (j_tbs[j].checked == false) {
        //         continue;
        //     } else {
        //         flag++;
        //     }
        // }
        // if (flag !== j_jbs.length) {
        //     j_cball.checked = false;
        // }
        // if (flag == j_jbs.length) {
        //     j_cball.checked = true;
        // }
        var flag = true;
        for (var j = 0; j < j_tbs.length; j++) {
            if (!j_tbs[j].checked) { //如果点击后某一个是空的
                flag = false;
                break;
            }
        }
        j_cball.checked = flag;
    }
}
var footer = document.querySelector('#footer');

console.log(footer.id);
console.log(footer.getAttribute('id'));

footer.setAttribute('id', 'newid') //可以直接修改元素的属性

footer.removeAttribute('id');