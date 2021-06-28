var img = document.querySelector('img');
document.addEventListener('mousemove', function (e) {
    img.style.left = e.pageX + 'px';
    img.style.top = e.pageY + 'px';
    // console.log(e.pageX,e.pageY);
})