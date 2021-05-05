var str = '0abcdefghijklmn';
console.log(str.indexOf('c')); // 从前向后找
console.log(str.lastIndexOf('c')); // 从后向前找

function serch(str, o) {
    var count = 0;
    var place = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === o) {
            count = count + 1;
            place.push(i);
        } else {
            continue;
        }
    }
    console.log(place);
    console.log(o + '出现了' + count + '次');
}

var str1 = 'aabbccddd';
serch(str1, 'b');


console.log(str.charAt(5));
console.log(str.charCodeAt(5) + '这个返回的是ASCII码');
console.log(str[5] + '这个是H5新增的');
console.log('----------------这是分割线------------------------');


var student = {
    uname: 1,
    age: 2,
    se: 3
}
if (student['uame']) {
    console.log('执行了这个判断语句，并且判断条件为真');
} else {
    console.log('没有该属性');
}

var str2 = 'abcdefghijklmnoaseughrvoaervghaerigaerhgoiecie4waou4ncoiuteanxte';
var o = {};
for (var i = 0; i < str2.length; i++) {
    var chars = str2[i];
    if (o[chars]) {
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}
console.log(o);
var max = 0;
for (var k in o) {
    if (o[k] > max) {
        max = o[k];
        ch = k;
    }
}
console.log(ch + '出现的次数最多为' + max + '次');

//字符串的基本操作方法
str1 = '123';
str2 = '45789';
console.log(str1.concat(str2));
console.log(str2.substring(2, 3));
var str3 = str1.replace('1', '0');
console.log(str3);
var str4 = 'abcdefgabcdefg';
while (str4.indexOf('b') !== -1) {
    str4 = str4.replace('b', '**');
}
console.log(str4);

//================================================
// 课后作业
console.log('==============下面这些是课下作业===================');

var str = 'abaasdffggghhjjkkgfddsssss3444343';
console.log('字符串的长度为' + str.length);
console.log('0位置的字符:' + str.charAt(0));
console.log('3位置的字符:' + str.charAt(3));
console.log('5位置的字符:' + str.charAt(5));
console.log('9位置的字符:' + str.charAt(9));
if (str.indexOf('i') !== -1) {
    console.log('存在i');
} else {
    console.log('不存在i');
}
str = str.replace('g', '22');
console.log(str);
console.log('1-5的字符为：' + str.substring(1, 5));
var bb = {};
for (var i = 0; i < str.length; i++) {
    var chars = str[i];
    if (bb[chars]) {
        bb[chars]++;
    } else {
        bb[chars] = 1;
    }
}
var max = 0; //存储出现次数最多的次数
var maxChar = null; //存储出现次数最多的字符
for (var key in bb) {
    if (max < bb[key]) {
        max = bb[key]; //max始终储存次数最大的那个
        maxChar = key; //那么对应的字符就是当前的key
    }
}
console.log('最多的字符为：' + maxChar + ' 最大的次数为' + max);
