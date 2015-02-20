$(document).ready( function() {

	/* --- Variables ----*/
	var onCount = 0

	/* ---- Front Page hiding --- */ 

	$('#front-page').click( function() {
		$(this).fadeOut('slow');
		$('body').css('background','url("")');
		$('#quiz-page').show();
		$('header').append('<h1 class="quotes"></h1>')
		$('header h1').html($('.quotes').html());
	});

	/* --- Selecting answer ----*/

	$('#list .answer').on('click', function(){
		$(this).toggleClass('clicked').addClass('selected');
	});

	/*--- Submitting options ---*/

	$('.submit').on('click', function() {
		
		onCount++;

		if (onCount >= 5) {
				//will change the button content
			$(this).html('Jibe Oh');

			if (onCount == 6 ) {

				//it'll display the results
				$('#result').fadeIn('slow');
				$('#list-result .selected').html( $('#list .selected').html() );
			};

		};
		
	})



});  // End of Document Script