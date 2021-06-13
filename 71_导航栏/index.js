var nav = document.querySelector('.nav');
var lis = nav.children; //得到四个li
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        // this.children.length-1 为li 中最后一个元素 指ul
        this.children[this.children.length - 1].style.display = 'block'
    }
    lis[i].onmouseout = function () {
        this.children[this.children.length - 1].style.display = 'none'
    }
}