var faqHeight = function() {
	$('#faq .panel').css('height', '');
	var bubbles = $('#faq .panel');
	var faqHeight = 0;
	if(bubbles.length > 0) {
		faqHeight = bubbles.first().width() + 65;
	}
	$('#faq .panel').css('height', faqHeight);
};

var affixNav = function() {
	$('#nav').affix({
		offset: {
			top: $('header').height()
		}
	});
	$('#nav-wrapper').css('height', $('#nav').height());
};

$(window).on('resize', function() {
	faqHeight();
	$('#nav').affix('checkPosition');
});

faqHeight();
affixNav();