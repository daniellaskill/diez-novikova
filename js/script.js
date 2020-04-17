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

$(document).ready(function(){
  	checkSlider();
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

