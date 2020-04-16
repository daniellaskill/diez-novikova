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


// $(document).ready(function() {
// 	$('#slider').slick();

// 		function changeWindow() {
// 			if($(window).width() > 320) {
// 			console.log('slider off');
// 			}
// 			else {
// 			console.log('slider on');
// 			}
// 		}

// 		changeWindow ();

// 		$(window).on('resize', function() {
// 			changeWindow ();
// 		});
// });
		// тоже что и выше - $(window).on('load resize', WindowSize);