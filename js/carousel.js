$(document).ready(function() {
    $('.carousel').slick({
        fade: true, //切り替えをフェードで行う。初期値はfalse。
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
        speed: 2000, //スライドの動きのスピード。初期値は300。
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        arrows: false, // 左右のナビゲーションを無効にする
        fade: true, // スライドの切り替えをフェードにする
    });
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.carousel').on('touchmove', function(event, slick, currentSlide, nextSlide) {
    $('.carousel').slick('slickPlay');
});