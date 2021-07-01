window.addEventListener('load', function () {

    var gzt = document.querySelectorAll('.gzt');
    for (var i = 0; i < gzt.length; i++) {
        gzt[i].addEventListener('mousemove', function (e) {
            var xx = e.pageX - this.offsetLeft;
            var yy = e.pageY - this.offsetTop;
            console.log(xx, yy);
        });
    }

    

})