$(function() {

	// Mobile menu
	$(".nav").click(function() {
		$(this).toggleClass("nav--expanded");
	});
	

	// Скрипт прокрутки к якорю
	$(".anchor").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});


	// Генерация атрибута href ссылкок на ютуб видео
	$('.video').each(function (index, element) {
		if( $(this).attr('data-video') ) {
			var id = $(this).data('video');
			var href = "https://www.youtube.com/watch?v=" + id + "?autoplay=1&amp;rel=0";
			$(this).attr('href', href);
		}
	});

	// Вызов модального видео
	$('.js-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		preloader: true
	});


	// Слайдер с примерами работ
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


	// Плейсхолдеры в инпутах
	$('.input').on('change', function() {
		var input = $(this);
		if (input.val().length) {
			input.addClass('populated');
		} else {
			input.removeClass('populated');
		}
	});


	// Вызов модального окна
	$('.js-call-modal').magnificPopup({
		items: {
			src: '#modal-callback',
			type: 'inline'
		}
	});

	// Simple dropdowns
	$('.dropdown__link').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.dropdown__content').slideToggle('fast');
	});


	// Переключение табов тиммемберов по ховеру
	$(".team-member").mouseenter(function() {
		var index = $(this).index();
		  $(this).closest('.team').find(".team-member").removeClass("team-member--hover").eq(index).addClass("team-member--hover");
		//   $(this).closest('.team').find(".team-content").hide().eq(index).fadeIn("normal");
	});

	// минимальная высота блоку контента о тиммемберах, чтобы не было скачков
	var teamContentHeight = 0;
	$('.team-content').each(function () {
		if( $(this).height() > teamContentHeight ) {
			teamContentHeight = $(this).height();
		}
	});
	$('.team').find('.block-min-height').css('min-height', teamContentHeight);
	  











	

});