$(function() {

	// Mobile menu
	$(".nav").click(function() {
		$(this).toggleClass("nav--expanded");
	});
	
	// Выделение фиксированного меню при скролле страницы на адаптиве
	// $(window).scroll(function(){
	// 	if( $(window).width() < 992 ) {
	// 		var headerHeight = $('.header').height();
	// 		if ($(window).scrollTop() >= headerHeight) {
	// 			$('.header').addClass('header--fixed');
	// 		} else {
	// 			$('.header').removeClass('header--fixed');
	// 		}
	// 	}
	// });

	
	$(".anchor").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});



	// Ютуб видео
	$('.video').each(function (index, element) {
		if( $(this).attr('data-video') ) {
			var id = $(this).data('video');
			var href = "https://www.youtube.com/watch?v=" + id + "?autoplay=1&amp;rel=0";
			$(this).attr('href', href);
		}
	});


	$('.js-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		preloader: true
	});


	$('.examples-slider').slick({
		infinite: false,
		slidesToShow: 3,
		appendArrows: $('.slider-arrows'),
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2
			  }
			}, {
				breakpoint: 767,
				settings: {
				  slidesToShow: 1
				}
			}
		]
	});










});