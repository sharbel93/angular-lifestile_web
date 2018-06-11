jQuery(document).ready(function($) {
	//create the slider
	$('.testimonials-wrapper').flexslider({
		selector: ".slides > li",
		animation: "slide",
		controlNav: false,
		slideshow: true,
		smoothHeight: true,
		start: function(){
			$('.slides').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

});