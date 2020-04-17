$(document).ready(function() {
	$(".j-burger").click(function(){
		// $(".j-nav-main").toggleClass("nav-main--active");
		$(".j-nav-main__list").slideToggle();

	})
});

$(document).ready(function() {
	$(".j-trial-lesson-btn").click(function(){
		$(".j-form-promo").toggleClass(".form--active");
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
    if (top < 100) $(".j-page-header").removeClass("page-header--active");
    else $(".j-page-header").addClass("page-header--active");
});


$(document).ready(function() {
	$("#slider").slick();

});





// // Флаг включённости слайдера
// var slickSliderActive = false;

// // Включение или выключение слайдера (в зависимости от ширины)
// function checkSlider(){    
  
//   // Если вьюпорт уже чем 768 
//   if( $(window).width() < 1280 - getScroll() ) {
    
//     // Если флаг включённости опущен, то включим и поднимем флаг
//     if(slickSliderActive == false) {
//       $('#slider').slick({
//         dots: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       });
//       slickSliderActive = true;
//     }
  
//   } 
//   // Иначе (вьюпорт НЕ уже чем 768)
//   else {
    
//     // Если флаг включённости поднят, выключаем и опускаем флаг
//     if(slickSliderActive == true) {
//       $('#slider').slick('unslick');
//       slickSliderActive = false;
//     }
    
//   }
// };

// // По готовности DOM...
// // $(document).ready(function(){
//   checkSlider();
// // });

// // По любому изменению размера вьюпорта...
// $(window).on('resize', function(){
//    checkSlider();
// });

// function getScroll(){
//   var div = document.createElement('slider');
//   div.style.overflowY = 'scroll';
//   div.style.width = '50px';
//   div.style.height = '50px';
//   div.style.visibility = 'hidden';
//   document.body.appendChild(div);
//   var scrollWidth = div.offsetWidth - div.clientWidth;
//   document.body.removeChild(div);
//   return scrollWidth;
// }