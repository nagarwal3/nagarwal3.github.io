// Make it rain!




var $teapot = $('#teapot'),
$body = $(document.body),
bodyHeight = $body.height();

$(window).scroll(function () {
    $teapot.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * -280) + 'deg)'
    });
});

// When the user scrolls in the window

	// "Find out how far user has scrolled jQuery" save in variable distanceScrolled 

	// if the user has scrolled (distanceScrolled) more than 10
		// add the rotate-teapot class to .teapot

var translateX = 0;

$('#next').on('click', function () {
	if (translateX === -75) {
		translateX = 0;
	} else {
		translateX -= 25;
	}

	$('.slides').css('transform', 'translateX(' + translateX + '%)');
});

$('#previous').on('click', function () {
	if (translateX === 0) {
		translateX = -75;
	} else {
		translateX += 25;
	}

	$('.slides').css('transform', 'translateX(' + translateX + '%)');
});

