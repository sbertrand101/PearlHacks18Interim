var faqHeight = function() {
	$('#faq .panel').css('height', '');
	var bubbles = $('#faq .panel');
	var faqHeight = 0;
	if(bubbles.length > 0) {
		faqHeight = bubbles.first().width() + 65;
	}
	var padding = faqHeight / 6;
	$('#faq .panel').css('height', faqHeight);
	$('.FAQ_bubble').css('padding-top', padding);
	$('.FAQ_bubble .FAQ_hover_text').css('padding-bottom', padding);
	$('.FAQ_bubble').css('padding-left', padding / 1.5);
	$('.FAQ_bubble').css('padding-right', padding / 1.5);
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

$('.FAQ_bubble_orig').click(function(){
	var obj = $(this);
	obj.css('display', 'none');
	obj.next().css('display', 'inline-block');
});

$('.FAQ_bubble_click').click(function(){
	var obj = $(this);
	obj.css('display', 'none');
	obj.prev().css('display', 'inline-block');
});