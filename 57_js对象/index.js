// 事先声明一个变量
var student = {
    uname: '徐嘉乐',
    age: 22,
    sex: '男',
    do_st: function () {
        console.log('干事');
        return '这是一个返回值';
    }
}
console.log(student.do_st());


// 字面量创建一个对象
var dog = {
    uname: '可可',
    type: '阿拉斯加犬',
    age: 5,
    color: '棕红色',
    skill: {
        bark: function () {
            console.log('汪汪汪');
        },
        showFilm: function () {
            console.log('演电影');
        }
    }
}
dog.skill.showFilm();

// 利用 new 创建一个对象
var hyyz = new Object();
hyyz.uname = '鸣人';
hyyz.sex = '男';
hyyz.age = 19;
hyyz.skill = function () {
    console.log('影分身之术');
}

hyyz.skill();


// 利用构造函数创建对象
function School(uname, type, age) {
    this.uname = uname;
    this.type = type;
    this.age = age;
}
var c1 = new School('一班', '理科', 18);

console.log(c1);


//利用构造函数船舰一个有关王者荣耀的对象
function Wzry(uname, type, blood, attack) {
    this.uname = uname;
    this.type = type;
    this.blood = blood;
    this.attack = attack;
}
var lp = new Wzry('廉颇', '战士', 500, '近战');
var hy = new Wzry('后羿', '射手', 100, '远程');
console.log(lp);
console.log(hy);

//利用 for in 遍历对象的所有属性
for (var key in lp) {
    console.log(lp[key]);
}


//*********************************************************************** */
/*              下面这些是课后作业                                          */
function Computer(color, weight, brand, type) {

    this.color = color;
    this.weight = weight;
    this.brand = brand;
    this.type = type;
    this.movies = function (mvname) {
        console.log(mvname);
    }
    this.music = function (musicname) {
        console.log(musicname);
    }

}
var ayjl = new Computer('黑色', '2kg', '惠普', '暗夜精灵4');

function Button(width, height, bgcolor) {
    this.width = width;
    this.height = height;
    this.bgcolor = bgcolor;
    this.click = function (dost) {
        console.log(dost);
    }
}
var bt1 = new Button(300, 400, 'red');
for (var key in bt1) {
    console.log(bt1[key]);
}

function Car(weight, color, brand) {
    this.weigth = weight;
    this.color = color;
    this.brand = brand;
    this.manned = function () {
        console.log('可以载人');
    }
}
var car1 = new Car(300, 'red', '保时捷');
for (var key in car1) {
    console.log(car1[key]);
}

console.log('===========================');

var temp;
var arr2 = [];

function getsort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(getsort(arr));

function reversal(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2[arr.length - 1 - i] = arr[i];
    }
    return arr2;
}
var arr3 = [2, 3, 4, 6, 7, 8];
console.log(reversal(arr3));


// 这是一个简易计算器的程序
while (true) {
    var cs = prompt('欢迎使用简易计算器:\n1.加法运算;\n2.减法运算;\n3.乘法运算;\n4.除法运算;\n5.退出;\n请输入您的选项:');

    if (cs == 1) {
        var add1 = prompt('第一个加数');
        var add2 = prompt('第二个加数');
        var sum = Number(add1) + Number(add2);
        alert('和为' + sum);
    }
    if (cs == 2) {
        var add1 = prompt('第一个被减数');
        var add2 = prompt('第二个减数');
        var sum = Number(add1) - Number(add2);
        alert('差为' + sum);
    }
    if (cs == 3) {
        var add1 = prompt('第一个乘数');
        var add2 = prompt('第二个乘数');
        var sum = Number(add1) * Number(add2);
        alert('积为' + sum);

    }
    if (cs == 4) {
        var add1 = prompt('第一个被除数');
        var add2 = prompt('第二个除数');
        var sum = Number(add1) / Number(add2);
        alert('商为' + sum);

    }
    if (cs == 5) {
        alert('退出程序成功');
        break;
    }
}

//              作业完成                    
/**=============================================================================== */