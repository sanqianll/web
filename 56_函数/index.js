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

var arr=[1,2,3,3,4,5,6,7];
console.log(getArrMax(arr));