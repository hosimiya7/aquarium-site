/**
 ハンバーガーメニュー
*/

$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

/**
 *  スライダー
 */

$('.slider').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,

});

 function checkBreakPoint() {
	w = $(window).width();
	if (w <= 900) {
		// スマホ向け（767px以下のとき）
		$('.event-slider').not('.slick-initialized').slick({
			//スライドさせる
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: true,
            prevArrow: '<div class="prev"><i class="fas fa-arrow-circle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fas fa-arrow-circle-right"></i></div>',
		});
        $('.guide-slider').slick({
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: '<div class="prev"><i class="fas fa-arrow-circle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fas fa-arrow-circle-right"></i></div>',
        });
	} else {
		// PC向け
		$('.event-slider.slick-initialized').slick('unslick');
		$('.guide-slider.slick-initialized').slick('unslick');
	}
}
// ウインドウがリサイズする度にチェック
$(window).resize(function(){
	checkBreakPoint();
});
// 初回チェック
checkBreakPoint();



// 波紋
$('.ripples').ripples({
    resolution: 200,
});

// raindrops
jQuery(".raindrops").raindrops({
    color: "#2079bd",
    canvasHeight: 60
});

// アコーディオンメニュー
$(function () {
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.s_07 .accordion_one .accordion_header').click(function () {
        //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
    });
});

