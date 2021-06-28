var ul = document.querySelector('.ul1');
// 事件的基本操作
ul.addEventListener('click', function (e) {
    // console.log(e); //返回这个事件
    console.log(this); //返回的是这个事件对应的元素
    console.log(e.target); //谁被点击了
    console.log(e.type); //返回事件的类型
})

//简单的事件委托
var ul2 = document.querySelector('.ul2');
ul2.addEventListener('click', function (e) {
    for (var i = 0; i < ul2.children.length; i++) {
        ul2.children[i].style.backgroundColor = '';
    }
    e.target.style.backgroundColor = 'pink';
})

// 事件的基本操作
var div = document.querySelector('.shijianleixing');
div.addEventListener('click', fn);
div.addEventListener('mouseover', fn);
div.addEventListener('mouseout', fn);

function fn(e) {
    console.log(e.type);
}

// 删除事件
var a = document.querySelector('a');
a.addEventListener('click', fn1);

function fn1(e) {
    e.preventDefault();
    a.removeEventListener('click', fn1);
}

// 冒泡代码实现
var father = document.querySelector('.father');
var son = document.querySelector('.son');
father.addEventListener('click', function (e) {
    console.log('father');
    e.stopPropagation();
}, false)
son.addEventListener('click', function (e) {
    console.log('son');
    e.stopPropagation();
}, false)

// 禁用右键菜单
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})
// 进制选中文字
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
})
// 获得鼠标事件
document.addEventListener('click', function (e) {
    console.log('屏幕坐标' + e.clientX + ',' + e.clientY);
    console.log('网页坐标' + e.pageX + ',' + e.pageY);
    // console.log('' + e.clientX + ',' + e.clientY);
})