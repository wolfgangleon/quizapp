$(document).ready( function() {

	/* --- Variables ----*/
	

	/* ---- Front Page hiding --- */ 

	$('#front-page').click( function() {
		$(this).fadeOut('slow');
		$('body').css('background','url("")');
		$('#quizz-page').show();
		$('header').append('<h1 class="quotes"></h1>')
		$('header h1').html($('.quotes').html());
	});

	/* --- Selecting answer ----*/

	$('.answer').on('click', function(){
		$(this).toggleClass('clicked').addClass('selected');
	});



});  // End of Document Script