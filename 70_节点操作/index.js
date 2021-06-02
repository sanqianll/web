var con1 = document.querySelector('.con1');
var box1 = con1.parentNode.parentNode; //写两个父级节点就是二级父节点
console.log(box1);

var ul = document.querySelector('.testul');

// 使用childNode
console.log(ul.childNodes);
// 使用children
console.log(ul.children);
// 第一个子节点
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.children[0]);
// 最后一个子节点
console.log(ul.lastChild);
console.log(ul.lastElementChild);
console.log(ul.children[ul.children.length - 1]);