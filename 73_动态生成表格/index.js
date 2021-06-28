var datas = [{
        name: '法外狂徒-张三',
        subject: '刑法',
        score: '100'
    },
    {
        name: '鸡你太美-蔡徐坤',
        subject: '篮球',
        score: '59'
    },
    {
        name: 'rnm退钱-退钱哥',
        subject: '足球',
        score: '99'
    },
    {
        name: '正义之手-罗翔',
        subject: '刑法',
        score: '99'
    }
];
var tbody = document.querySelector('tbody');
// 增加行
for (var i = 0; i < datas.length; i++) {
    // 有几个元素就创建多少个行
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    // 增加每列
    for (var k in datas[i]) {
        var td = document.createElement('td');
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
    }
    // 再最后添加一个删除的标签
    var td = document.createElement('td');
    td.innerHTML = '<a href="javascript:;" class="del">删除</a>'
    tr.appendChild(td);
}
var del = document.querySelectorAll('.del');
for (var i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        tbody.removeChild(this.parentElement.parentElement);
    }
}
var btns = document.querySelectorAll('button');
//传统注册事件
btns[0].onclick = function () {
    alert('用传统方式做的弹窗');
}
// 方法监听注册方式
btns[1].addEventListener('click', function () {
    alert('方法监听注册的事件');
})

// 删除事件
btns[2].addEventListener('click', fn);

function fn() {
    alert("出现了，是弹窗!");
    btns[2].removeEventListener('click', fn);
}