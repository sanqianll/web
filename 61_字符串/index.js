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
