/**
 ハンバーガーメニュー
*/

$(function() {
    $('.hamburger').click(function() {
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
    autoplaySpeed:2500,
    arrows:false,
  });

  $('.event-slider').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed:2500,
    arrows:true,
    prevArrow:'<div class="prev"><i class="fas fa-arrow-circle-left"></i></div>',
	nextArrow:'<div class="next"><i class="fas fa-arrow-circle-right"></i></div>',
  });

  $('.guide-slider').slick({
    fade:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed:3000,
    arrows:true,
    prevArrow:'<div class="prev"><i class="fas fa-arrow-circle-left"></i></div>',
	nextArrow:'<div class="next"><i class="fas fa-arrow-circle-right"></i></div>',
  });

