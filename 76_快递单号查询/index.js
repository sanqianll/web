// 等页面加载完便执行这些js
// window.addEventListener('load', function () {
//     var con = document.querySelector('.con');
//     var ipt = document.querySelector('.jd');
//     ipt.addEventListener('keyup', function (e) {
//         if (this.value == '') {
//             con.style.display = 'none';
//         } else {
//             con.style.display = 'block';
//             con.innerText = this.value;
//         }
//     })
//     ipt.addEventListener('blur', function (e) {
//         con.style.display = 'none';
//     })
//     ipt.addEventListener('focus', function (e) {
//         if (this.value !== '') {
//             con.style.display = 'block';
//         }
//     })
// })

// 等dom加载完便执行js 不必等内容
window.addEventListener('DOMContentLoaded', function () {
    var con = document.querySelector('.con');
    var ipt = document.querySelector('.jd');
    ipt.addEventListener('keyup', function (e) {
        if (this.value == '') {
            con.style.display = 'none';
        } else {
            con.style.display = 'block';
            con.innerText = this.value;
        }
    })
    ipt.addEventListener('blur', function (e) {
        con.style.display = 'none';
    })
    ipt.addEventListener('focus', function (e) {
        if (this.value !== '') {
            con.style.display = 'block';
        }
    })
    var box_resize = document.querySelector('.resize');
    window.addEventListener('resize', function (e) {
        if (window.innerWidth < 800) {
            box_resize.style.display = 'none';
        } else {
            box_resize.style.display = 'block';

        }
    })

    var cd = document.querySelector('video');

    function fn() {

        alert('进入青少年模式');
        clearTimeout(boom);

    }
    var boom = setTimeout(function () {
        cd.style.display = 'block';
        // sn.removeEventListener('click', fn);
        sn.style.display = 'none';
    }, 5000);
    var sn = document.querySelector('.sn');
    sn.addEventListener('click', fn);
    var num = 0;
    var num2 = 0;
    var num3 = 0;
    var imgal = document.querySelectorAll('.al');
    // 三张图片的循环样式
    setInterval(function () {
        if (num == 0) {
            num = 1;
        } else {
            num = 0;
        }
        imgal[0].src = "../../software/QQ浏览器/下载保存位置/ahri" + num + ".jpg"
    }, 900);
    setInterval(function () {
        if (num2 == 0) {
            num2 = 1;
        } else {
            num2 = 0;
        }
        imgal[1].src = "../../software/QQ浏览器/下载保存位置/soraka" + num2 + ".jpg"
    }, 900);
    setInterval(function () {
        if (num3 == 0) {
            num3 = 1;
        } else {
            num3 = 0;
        }
        imgal[2].src = "../../software/QQ浏览器/下载保存位置/sona" + num3 + ".jpg"
    }, 900);

    //点击触发变换
    // imgal[0].addEventListener('click', function () {
    //     if (num == 0) {
    //         num = 1;
    //     } else {
    //         num = 0;
    //     }
    //     imgal[0].src = "../../software/QQ浏览器/下载保存位置/ahri" + num + ".jpg"

    // })
    // imgal[1].addEventListener('click', function () {
    //     if (num3 == 0) {
    //         num3 = 1;
    //     } else {
    //         num3 = 0;
    //     }
    //     imgal[1].src = "../../software/QQ浏览器/下载保存位置/soraka" + num3 + ".jpg"

    // })
    // imgal[2].addEventListener('click', function () {
    //     if (num2 == 0) {
    //         num2 = 1;
    //     } else {
    //         num2 = 0;
    //     }
    //     imgal[2].src = "../../software/QQ浏览器/下载保存位置/sona" + num2 + ".jpg"

    // })

})