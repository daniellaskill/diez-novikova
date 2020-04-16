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
		$("j-html-hide").addClass("html-hide--active");
	})
});

$(document).ready(function() {
	$(".j-form-closed-btn").click(function(){
		$(".j-form-promo").removeClass("form--active");
		$("j-html-hide").removeClass("html-hide--active");
	})
});
