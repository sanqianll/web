var tab_list = document.querySelector('.tab_list');
var list = document.querySelectorAll('li');
var items = document.querySelectorAll('.items');
for (var i = 0; i < list.length; i++) {
    // 对每个list都加上一个index属性
    list[i].setAttribute('index', i);
    // 利用for循环一次性生成多个点击事件
    list[i].onclick = function () {
        // 更换tab栏的样式
        for (var j = 0; j < list.length; j++) {
            list[j].className = '';
        }
        this.className = 'current';


        // 使下面的内容进行更新
        // 先获得按钮上的index属性值 然后根据属性值选择显示对应的 items
        var index = this.getAttribute('index');
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
    }
}