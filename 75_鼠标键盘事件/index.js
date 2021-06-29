var img = document.querySelector('img');
var ipt = document.querySelector('input');
document.addEventListener('mousemove', function (e) {
    img.style.left = e.pageX + 'px';
    img.style.top = e.pageY + 'px';
    // console.log(e.pageX,e.pageY);
})
// 键盘按下事件
document.addEventListener('keydown', function (e) {

    console.log('keydown:' + e.keyCode);
    // console.log('某一个键被按下');
})
// 功能键按下事件
document.addEventListener('keypress', function (e) {
    // console.log('功能键--');
    console.log('keypress:' + e.keyCode);

})
// 键盘抬起事件
document.addEventListener('keyup', function (e) {
    // console.log('抬');
    console.log('keyup:' + e.keyCode);
    if (e.keyCode === 83) {
        ipt.focus();
    }
})