jQuery(function($) {
	const slickInfinite = $('.js-infinite-slider');
	const slickInfiniteRtl = $('.js-infinite-slider--rtl');
	$(slickInfinite).slick(optionInfinite);
	$(slickInfiniteRtl).slick(optionInfiniteRtl);
});

const optionInfinite = {
	autoplay: true, // 自動でスクロール
	autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
	speed: 7500, // スライドが流れる速度を設定
	cssEase: "linear", // スライドの流れ方を等速に設定
	slidesToShow: 4, // 表示するスライドの数
	swipe: false, // 操作による切り替えはさせない
	arrows: false, // 矢印非表示
	pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
	pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
	variableWidth: true,
	responsive: [{
		breakpoint: 750,
		settings: {
			slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
		}
	}]
}
const optionInfiniteRtl = {
	autoplay: true, // 自動でスクロール
	autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
	speed: 7500, // スライドが流れる速度を設定
	cssEase: "linear", // スライドの流れ方を等速に設定
	slidesToShow: 4, // 表示するスライドの数
	swipe: false, // 操作による切り替えはさせない
	arrows: false, // 矢印非表示
	pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
	pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
	rtl: true, // 逆回転
	variableWidth: true,
	responsive: [{
		breakpoint: 750,
		settings: {
			slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
		}
	}]
}
