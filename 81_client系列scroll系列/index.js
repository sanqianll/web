window.addEventListener('load', function () {
    var box1 = document.querySelector('.box1');
    console.log('offsetHeight:' + box1.offsetHeight);
    console.log('clientHeight:' + box1.clientHeight);
    console.log('scrollHeight:' + box1.scrollHeight);

    box1.addEventListener('scroll', function () {
        console.log('scrollTop:' + box1.scrollTop);
    })

    var sliderbar = document.querySelector('.slider-bar');
    var bannerTop = 250; //滚动节点（滚出长度）
    var sliderbarTop = sliderbar.offsetTop - bannerTop; //记录当时的位置
    document.addEventListener('scroll', function () {
        if (window.pageYOffset > bannerTop) {
            sliderbar.style.position = 'fixed';
            sliderbar.style.top = sliderbarTop + 'px';
        } else {
            sliderbar.style.position = 'absolute';
            sliderbar.style.top = 300 + 'px';
        }
    })

    var move = document.querySelector('.move');
    var move2 = document.querySelector('.move2');
    var move2btn1 = document.querySelector('.move2btn1');
    var move2btn2 = document.querySelector('.move2btn2');
    animate(move, 300);

    move2btn1.addEventListener('click', function () {
        animate2(move2, 500);
    })
    move2btn2.addEventListener('click', function () {
        animate2(move2, 800);
    })
    
    // 封装一个动画函数 animate(a,b) a:元素 b:移动距离
    function animate(a, b) {
        clearInterval(a.timer);
        a.timer = this.setInterval(function () {
            if (a.offsetLeft == b) {
                clearInterval(a.timer);
            }
            a.style.left = a.offsetLeft + 1 + 'px';
        }, 5);
    }

    function animate2(a, b) {
        clearInterval(a.timer);
        a.timer = this.setInterval(function () {
            if (a.offsetLeft == b) {
                clearInterval(a.timer);
            }
            var step = ((b - a.offsetLeft) / 10);
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            a.style.left = a.offsetLeft + step + 'px';
            console.log(a.offsetLeft);
        }, 15);
    }
})