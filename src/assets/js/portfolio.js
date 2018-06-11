/*!
 * Initiate Portfolio
 */
 



jQuery(document).ready(function($) {

$('#portfolio-filter a').click(function(){
$('#portfolio-filter a.active').removeClass('active');
var selector = $(this).attr('data-cat');
$container.isotope({ filter: selector, animationEngine : "jquery" });
$(this).addClass('active');
return false;
});

var portfolio = portfolio || {},
$portfolioItems = $('#portfolio-items'),
$filtrable = $('#portfolio-filter');

function portfolioCol() {
	var winWidth = jQuery(window).width() + 15, columnNumb = 1;
	if (winWidth > 1024) {
		columnNumb = 4;
	} else if (winWidth > 768) {
		columnNumb = 3;
	} else if (winWidth > 480) {
		columnNumb = 2;
	} else if (winWidth < 480) {
		columnNumb = 1;
	}
	return columnNumb;
}

function setCol() {

	var width = $portfolioItems.parent().width(),
		column = portfolioCol(),
		articleWidth = Math.floor(width / column);

	//console.log(articleWidth);

	$portfolioItems.find('article').each(function () {
		$(this).css({
			width: articleWidth + 'px'
		});
	});
}








var $container = $('#portfolio-items').imagesLoaded( function() {
$('#portfolio-items').isotope({
animationEngine: 'best-available',
animationOptions: {
	duration: 250,
	easing: 'easeInOutSine',
	queue: false
}
});

$(window).bind('resize', function () {
setCol();
try{
	$portfolioItems.isotope('layout');
}catch(e){}
});

});




});

