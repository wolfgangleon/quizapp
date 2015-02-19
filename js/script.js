$(document).ready( function() {

	/* --- Variables ----*/
	var onCount = 0
	/* ---- Front Page hiding --- */ 

	$('#front-page').click( function() {
		$(this).fadeOut('slow');
		$('body').css('background','url("")');
		$('#quizz-page').show();
		$('header').append('<h1 class="quotes"></h1>')
		$('header h1').html($('.quotes').html());
	});

	/* --- Selecting answer ----*/

	$('#list .answer').on('click', function(){
		$(this).toggleClass('clicked').addClass('selected');
	});

	$('.submit').on('click', function() {
		
		onCount++;

		if (onCount >= 5) {

			$(this).html('Jibe Oh');

			if (onCount == 6 ) {
				$('#result').fadeIn('slow');
			};

		};
		
	})



});  // End of Document Script