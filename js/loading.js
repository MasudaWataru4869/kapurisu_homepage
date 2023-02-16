window.onload = function () {
    setTimeout(() => {
     $('.loading-box').addClass('loaded');
    }, 2000);
}

function noscroll(e) {
    e.preventDefault();
}

$(document).ready(function() {
    setTimeout(function() {
        document.addEventListener('touchmove', noscroll, { passive: false });
        document.addEventListener('wheel', noscroll, { passive: false });
    }, 0);
});

$(document).ready(function() {
    setTimeout(function() {
        document.removeEventListener('touchmove', noscroll);
        document.removeEventListener('wheel', noscroll);
    }, 3500);
});