var textarea = document.querySelector('textarea');
var btn = document.querySelector('button');
var ul = document.querySelector('ul');
btn.onclick = function () {
    if (textarea.value == '') {
        alert("评论不能为空。");
    } else {
        var li = document.createElement('li');
        var addtime = document.createElement('span');
        li.innerHTML = textarea.value;
        addtime.innerHTML = "评论时间：" + gettime();
        ul.insertBefore(li, ul.children[0]);
        ul.insertBefore(addtime, ul.children[1]);
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