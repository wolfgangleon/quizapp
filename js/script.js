$(document).ready( function() {

	/* --- Variables ----*/
	

	/* ---- Front Page hiding --- */ 

	$('#front-page').click( function() {
		$(this).fadeOut('slow');
		$('body').css('background','url("")');
		$('#quizz-page').show();
		$('header').append('<h1 class="quotes">hola</h1>')
		$('header h1').html($('.quotes').html());
	});



});  // End of Document Script