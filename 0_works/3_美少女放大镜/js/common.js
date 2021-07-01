window.addEventListener('load', function () {

    var hit_dog = document.querySelector('.hit_dog');
    var hit_times = 0;
    hit_dog.addEventListener('click', function () {
        hit_times++;
        if (hit_times == 7) {
            alert('别打啦');
        }
        if (hit_times == 14) {
            alert('我劝你适可而止');
        }
        if (hit_times == 28) {
            alert('快打死惹');
        }
        if (hit_times == 35) {
            alert('我只会心疼giegie');
        }
        if (hit_times == 42) {
            alert('呜呜呜~');
        }
        if (hit_times == 49) {
            alert('狗子不可爱么？');
        }
        if (hit_times == 56) {
            alert('/(ㄒoㄒ)/~~');
        }
        if (hit_times == 63) {
            alert('解锁成就：不务正业');
        }
        if (hit_times == 80) {
            alert('后面没了。');
        }
        if (hit_times == 21) {
            alert('wdnmd');
            window.close();
        }
    })
})