$(document).ready( function() {

	$('#list').css('margin','8em 37%');
	$('#list .clicked').toggleClass('answer');

	/* --- Variables ----*/
	var onCount = 0,
		numQ = -1,
		ansNum=0,
		scoreCount=0;


	var randomQuotes = Math.floor( Math.random()*4 );
		console.log('quote: ' + randomQuotes)

	/* --- Quotes --- */ 

	var quotes = new Array ('"To reach a port we must set sail. Sail, not tie an anchor. Sail, not drift."',
							'"If one does not know to which port one is sailing, no wind is favorable."',
							'"Nothing comes sailing by itself."',
							'"It is not the ship so much as the skillful sailing that assures the prosperous voyage."');

	var writers = new Array ('Franklin D. Roosevelt',
							 'Lucius Annaeus Seneca',
							 'Alexander Dale Oen',
							 'George William Curtis')

	/* -- Questions --*/
		
	var	questions = new Array('Coming about upwind is know as?',
							 'The closest a boat can normally sail is at 45 degrees angle into the wind?',
							 'When the boat is head to wind, and the sails luffing and the boat is gaining no headway, this term is known as what?',
							 'The left and right sides of the boat are referred to as what?',
							 'What is the most efficient use of the sail when sailing downwind?');

	console.log(Math.floor( Math.random()*questions.length ))
	console.log(questions.length)
	
	var correctAnswer = new Array('Tacking',
								   'True',
									'In Irons',
									'Port and Starboard',
									'Wing and Wing');

	var incorrectAnswer = new Array({q:['jibing','Heeling','luffing']},
									{q:['false']},
									{q:['in draft','in luff','in shackles']},
									{q:['leech and draft','windward and leeward','head and luff']},
									{q:['close-hauled','jib-lowered','porpoising']});


	/* --- Quotes displaying -- */

	$('.quote').html( quotes[ randomQuotes ] );
	$('#writer').html( writers[ randomQuotes ] );

	/* ---- Front Page hiding --- */ 

	$('#front-page').click( function() {
		$(this).fadeOut('slow');
		$('body').css('background','url("")');
		$('#quiz-page').show();
		$('header').append('<h1 class="quote"></h1>')
		$('header h1').html($('.quote').html() + ' - ' + $('#writer').html() );
	});


	/* --- Quiz running in the application --- */

	$('.submit').on('click', function() {

		$('#list').css('margin','2em 25%');

		onCount++;
		console.log(onCount)

		if (onCount >= 6) { //will change the button content
			
			$(this).html('Submit');

		};

		if (onCount == 7 ) { //it'll display the results

				$('#result').fadeIn('slow');

				onCount=0;
		};

		//Displaying Questions and anwsers

		numQ++;
		console.log('numQ:'+numQ)

		if ( numQ>=6 ) {
				return null;
		}

		$('#list .question').html( questions[ numQ ] ); // Display question
		
		if (onCount < 6){
			$('#list li').remove();
		};	
													// Display answers Randomly


												
		var 	A=incorrectAnswer[numQ].q[0],
				B=incorrectAnswer[numQ].q[1],
				C=incorrectAnswer[numQ].q[2],
				D=correctAnswer[numQ];  

		var n = Math.floor( Math.random()*100);
		console.log('n:' + n )

		if (n < 25 ) {

			$('#list').append('<li class="answer A">'+ A + '</li>').append('<li class="answer B">' +  B + '</li>').append('<li class="answer C">'+  C + '</li>')
					  .append('<li class="answer D">' + D + '</li>');
		}

		else if (n <50 ) {
			$('#list').append('<li class="answer D">'+ D + '</li>').append('<li class="answer C">' +  C + '</li>').append('<li class="answer A">'+  A + '</li>')
					  .append('<li class="answer B">' + B + '</li>');
		}

		else if (n < 75 ) {
			$('#list').append('<li class="answer C">'+ C + '</li>').append('<li class="answer A">' +  A + '</li>').append('<li class="answer D">'+  D + '</li>')
					  .append('<li class="answer B">' + B + '</li>');
		}

		else {
			$('#list').append('<li class="answer B">'+ B + '</li>').append('<li class="answer D">' +  D + '</li>').append('<li class="answer C">'+  C + '</li>')
					  .append('<li class="answer A">' + A + '</li>');
		}


		if ( !A ) {								//checking typeof undefined

			$('#list .A').remove();
		} 

		if ( !B ) {
			$('#list .B').remove();
		}

		if ( !C ) {
			$('#list .C').remove();
		}

		if ( !D ) {
			$('#list .D').remove();
		}



		/* --- Selecting answer ----*/

		ansNum++;

		$('#list').on('click', '.answer', function(){
			$(this).toggleClass('clicked');
			$('#list-result .answer-' + ansNum +' .selected').html( $('.clicked').html() )
			console.log( $('#list-result .answer-' + ansNum +' .selected').html( $('.clicked').html() ) )


		/* --- Score counting --- */
			console.log( $('.clicked').html().length )
			console.log (D.length)

			if ( $('.clicked').html().length == D.length ) {
				scoreCount++;
				$('#result p').html( scoreCount +'/5' );
			};
	
	});

	

	});
	

});  // End of Document Script