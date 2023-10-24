	// ハンバーガーメニュー
	$('.menu-trigger').on('click', function() {
		$(this).toggleClass('is-active');
		$('.header-link').toggleClass('is-active');
	});
  //TOPのスライダー
$('.top-slider').slick({
	adaptiveHeight: true, // 追加
	variableWidth: true,   // 追加
	arrows:true,
	autoplay:true,
	dots:true,
	speed:1500,
	easing:'swing',
	centerMode:true,
	centerPadding:'25%',
	prevArrow:'<div class="slide-btn prev-btn"></div>',
	nextArrow:'<div class="slide-btn next-btn"></div>',
	responsive:[
			{
					breakpoint:768,
					settings:{
							centerPadding:'0%',
							slidesToShow:1,
							slidesToScroll:1,
					}
			}
	]
});
// TOPに戻る矢印実装
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {  // 例: 300pxスクロールしたら表示
			$('#back-to-top').fadeIn();
	} else {
			$('#back-to-top').fadeOut();
	}
});

  $('#back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});
// アコーディオン
$(document).ready(function(){
  $('.accordion-item').on('click', function() {
    $(this).find('.accordion-content').slideToggle('fast');
  });
});