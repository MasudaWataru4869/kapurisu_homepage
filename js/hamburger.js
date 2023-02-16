const ham = $('#open-btn');
const nav = $('#global-menu');

ham.on('click', function() { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('open'); // ナビゲーションメニューにactiveクラスを付け外し
});


$("#global-menu a[href]").on("click", function() {
    var windowWidth = window.innerWidth;

    if (windowWidth <= 767.98) {
        $('#open-btn').trigger('click');
    }
});

$(function() {
    var headerHight = 60; //ヘッダーの高さを指定しheaderHightに代入
    $('.pc-nav a[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$(function() {
    var headerHight = 40; //ヘッダーの高さを指定しheaderHightに代入
    $('#global-menu a[href*="#"]').click(function() {
        const speed = 800;
        const target = $(this.hash === '#' || '' ? 'html' : this.hash)
        if (!target.length) return;
        const targetPos = target.offset().top - headerHight;
        $('html, body').animate({ scrollTop: targetPos }, speed, 'swing');
        return false;
    });
});
