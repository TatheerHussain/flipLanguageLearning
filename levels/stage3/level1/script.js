
var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  var terms = ['蘋果', 'a鱷梨', '香蕉', '櫻桃', '葡萄', 'l檸檬', '芒果', '橙子', '梨', '菠蘿' ];
 // var random= numbers.sort( function() { return Math.random() -.5} );
  // this random code is working but images didnt change ....need to fix
 

  for ( var i=0; i<10; i++){
    $('<div>' + terms[i] + '</div>').data( 'number', numbers[i] ).attr( 'id','card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // here in this place i would like to add images instead of fruit names
  // ie. instead of apple ,mango etc  i want to add image and match them with above


      var words = [ '<img src="images/fruits/apple.png">', 
                    '<img src="images/fruits/avocado.png">',
                    '<img src="images/fruits/banana.png">',
                    '<img src="images/fruits/cherries.png">',
                    '<img src="images/fruits/grapes.png">',
                    '<img src="images/fruits/lemon.png">',
                    '<img src="images/fruits/mango.png">',
                    '<img src="images/fruits/orange.png">',
                    '<img src="images/fruits/pear.png">',
                    '<img src="images/fruits/pineapple.png">'];
                

  for ( var i=1; i<=10; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}











function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 10 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '300px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }

}
