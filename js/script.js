$(document).ready( function() {

	$('#list').css('margin','8em 37%');

	/* --- Variables ----*/
	var onCount = 0,
		scoreCount=0;


	var randomQuote = Math.floor( Math.random()*4 );
		console.log('quote: ' + randomQuote)

	/* --- Quotes --- */ 

	var quotes = [{
		quote:'"To reach a port we must set sail. Sail, not tie an anchor. Sail, not drift."',
		writer:'Franklin D. Roosevelt',
		quoteNum:0
		},
		{
		quote:'"If one does not know to which port one is sailing, no wind is favorable."',
		writer:'Lucius Annaeus Seneca',
		quoteNum:1
		},
		{
		quote:'"Nothing comes sailing by itself."',
		writer:'Alexander Dale Oen',
		quoteNum:2
		},
		{
		quote:'"It is not the ship so much as the skillful sailing that assures the prosperous voyage."',
		writer:'George William Curtis',
		quoteNum:3	
		}];
	
	/* -- Questions --*/
		
	var	questions = [{
		question:'Coming about upwind is know as?',
		options:['jibing','Heeling','Tacking','luffing'],
		qNum:0,
		correct:'Tacking'
		},
		{
		question:'The closest a boat can normally sail is at 45 degrees angle into the wind?',
		options:['True','False'],
		qNum:1,
		correct:'True'
		},
		{
		question:'When the boat is head to wind, and the sails luffing and the boat is gaining no headway, this term is known as what?',
		options:['in draft','In Irons','in luff','in shackles'],
		qNum:2,
		correct:'In Irons'
		},
		{
		question:'The left and right sides of the boat are referred to as what?',
		options:['leech and draft','windward and leeward','head and luff','Port and Starboard'],
		qNum:3,
		correct:'Port and Starboard'	
		},
		{
		question:'What is the most efficient use of the sail when sailing downwind?',
		options:['close-hauled','Wing and Wing','jib-lowered','porpoising'],
		qNum:4,
		correct:'Wing and Wing'	
		}];


	/* --- Quotes displaying -- */

	$('.quote').html( quotes[ randomQuote ].quote );
	$('#writer').html( quotes[ randomQuote ].writer );

	/* ---- Front Page hiding --- */ 

	$('#front-page').click( function() {
		$(this).fadeOut('slow');
		$('body').css('background','url("")');
		$('#quiz-page').show();
		$('header').show();
		$('header').append('<h1 class="quote"></h1>')
		$('header h1').html($('.quote').html() + ' - ' + $('#writer').html() );
	});

	/* --- Quiz running in the application --- */
	
	var numQ = -1;

	$('.submit').on('click', function() {

		$('#list').css('margin','2em 25%');

		onCount++;
		console.log('onCount:' + onCount)

		if (onCount >= 6) { //will change the button content
			
			$(this).html('Submit');

		};

		if (onCount == 7 ) { //it'll display the results

				$('#result').fadeIn('slow');

				onCount = 0;
		};

		//Displaying Questions and anwsers
		numQ++;

		if ( numQ >= 6 ) {
				return null;
		}

		$('#list .question').html( questions[ numQ ].question ); // Display question
		
		if (onCount < 6){
			$('#list li').remove();
		};	

		// Display answers Randomly
												
		var n = Math.floor( Math.random()*4);
		console.log('n:' + n )

		$('#list').append('<li class="answer" id="A">' + questions[ numQ ].options[0] + '</li>')
				  .append('<li class="answer" id="B">' + questions[ numQ ].options[1] + '</li>')
				  .append('<li class="answer" id="C">' + questions[ numQ ].options[2] + '</li>')
				  .append('<li class="answer" id="D">' + questions[ numQ ].options[3] + '</li>');

		if ( !questions[ numQ ].options[0] ) {	//checking typeof <li> undefined
			$('#list #A').remove();
		} 

		else if ( !questions[ numQ ].options[1] ) {	//checking typeof <li> undefined
			$('#list #B').remove();
		} 

		else if ( !questions[ numQ ].options[2] ) {	//checking typeof <li> undefined
			$('#list #C').remove();
		} 

		if ( !questions[ numQ ].options[3] ) {	//checking typeof <li> undefined
			$('#list #D').remove();
		}; 
	
	});

	

	/* --- Selecting answer ----*/

	var ansNum = 0

	$('#list').on('click', '.answer', function(){

		ansNum = numQ + 1;

		$(this).toggleClass('clicked');

		$('#list-result .answer-' + ansNum +' .selected').html( $('.clicked').html() )

		/* --- Score counting --- */

		if ( $('.clicked').html() == questions[ numQ ].correct ) {
			scoreCount++;
			$('#result p').html( scoreCount +'/5' );
		} 

	});


	if ( scoreCount == 0 ) {
		$('#result p').html( '0/5' );
	}
	

});  // End of Document Script