function getSum(number1, number2) {
    var sumsum = 0;
    for (var i = number1; i <= number2; i++) {
        sumsum = sumsum + i;
    }
    console.log(sumsum);
}

// getSum(1);
// getSum(2, 5);
// getSum(2, 3, 4);


console.log('----------------------------------');

function getSum2(number1, number2) {
    var sum = number1 + number2;
    return sum;
}

console.log(getSum2(2, 4));


//-----------------------------------------------------
// 求两个数的最大值
function Max(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(Max(233, 4634));

//------------------------------------------------------
//求数组中元素的最大值
function getArrMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var arr = [1, 2, 3, 3, 4, 5, 6, 7];
console.log(getArrMax(arr));

//-------------------------------------------------------
//判断是否是素数，写入函数
console.log('-----');

function check_ss(a) {
    var num = [];
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = 2; j <= a[i]; j++) {
            if (j == a[i]) {
                num.push(a[i]);
                break;
            }
            if (a[i] % j == 0) {
                break;
            }
        }
    }
    return num;
}
var chek_num = check_ss([1, 2, 3, 4, 5, 6, 7, 78, 98, 9, 9]);
var chek_num_str = chek_num.join();
console.log(chek_num_str);

//--------------------------------------------------------------
//判断是否为闰年的函数
function isRun(number) {
    if (number % 4 == 0 && number % 100 != 0 || number % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

function backDay() {
    var years=prompt('请输入一个年份');
    if (isRun(years)) {
        alert('是闰年，二月有29天');
    } else {
        alert('是平年，二月有28天');
    }
}
backDay();