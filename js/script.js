$(document).ready(function() {
	$(".j-burger").click(function(){
		// $(".j-nav-main").toggleClass("nav-main--active");
		$(".j-nav-main__list").slideToggle();

	})
});


$(document).ready(function() {
	$(".j-trial-lesson-btn").click(function(){
		$(".j-form-promo").toggleClass("form--active");
		// $(".j-trial-lesson").slideToggle();
		$(".j-html-hide").addClass("html-hide--active");
	})
});


$(document).ready(function() {
	$(".j-form-closed-btn").click(function(){
		$(".j-form-promo").removeClass("form--active");
		$(".j-html-hide").removeClass("html-hide--active");
	})
});

$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 100) 
    	$(".j-page-header").removeClass("page-header--active");

    else 
    	$(".j-page-header").addClass("page-header--active");
});


$(document).ready(function checkSlider() {

		if ($(window).width() < 1280 - getScroll()) {
			$("#slider").slick();
		}

		else {
			$("#slider").slick("unslick");
		}
});

function getScroll(){

	  var div = document.createElement('div');
	  div.style.overflowY = 'scroll';
	  div.style.width = '50px';
	  div.style.height = '50px';
	  div.style.visibility = 'hidden';
	  document.body.appendChild(div);
	  var scrollWidth = div.offsetWidth - div.clientWidth;
	  document.body.removeChild(div);
	  return scrollWidth;
	}





$(document).ready(function() {

	$("#video__play").click(function(){
		var dataYoutube = $(this).parents('.j-video').attr('data-youtube');

		$(this).parents('.j-video').html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
	});
});


/*ymaps.ready(function () {
    var diezMap = new ymaps.Map('#map', {
            center: [59.941993, 30.279423],
            zoom: 2
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/geotag.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

    myMap.geoObjects
        .add(myPlacemark);
});*/


