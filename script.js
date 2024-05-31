$(document).ready(function () {
    let isAuto = false;
    let t = false;

    const rotate = () => {
    const audio = new Audio('/sound.mp3');
    audio.playbackRate = 2;
    if (t) {
        $('#rope-one').css('transform', 'rotate(-82deg)');
        $('#rope-two').css('transform', 'rotate(262deg)');

        audio.play();
        t = false;
    } else {
        $('#rope-one').css('transform', 'rotate(82deg)');
        $('#rope-two').css('transform', 'rotate(98deg)');

        audio.play();
        t = true;
    }
    };

    $(window).click(() => rotate());
    $(window).keypress(() => rotate());
});