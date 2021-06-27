var textarea = document.querySelector('textarea');
var btn = document.querySelector('.push');
var del = document.querySelector('.del');
var ul = document.querySelector('ul');

// 发布按钮
btn.onclick = function () {
    if (textarea.value == '') {
        alert("评论不能为空。");
    } else {
        var li = document.createElement('li');
        var addtime = document.createElement('span');
        li.innerHTML = textarea.value + '<a href="javascript:;" class="adda">删除</a>';
        addtime.innerHTML = "评论时间：" + gettime();
        ul.insertBefore(li, ul.children[0]);
        ul.insertBefore(addtime, ul.children[1]);
        del.disabled = false;
        var as = document.querySelectorAll('.adda');
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function () {
                ul.removeChild(this.parentNode.nextSibling);
                ul.removeChild(this.parentNode);
            }
        }
    }
}
// 删除按钮
del.onclick = function () {
    if (ul.children.length == 0) {
        this.disabled = true;
        // this.style.cursur = 'not - allowed';
    } else {
        ul.removeChild(ul.children[0]);
        ul.removeChild(ul.children[0]);
        if (ul.children.length == 0) {
            this.disabled = true;
            // this.style.cursur = 'not - allowed';
        } else {
            this.disabled = false;
        }
    }
}

function gettime() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}