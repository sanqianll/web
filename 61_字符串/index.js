var str = 'abcdefghijklmn';
console.log(str.indexOf('c')); // 从前向后找
console.log(str.lastIndexOf('c')); // 从后向前找

function serch(str, o) {
    var count=0;
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

var str = 'aabbccddd';
serch(str, 'b');