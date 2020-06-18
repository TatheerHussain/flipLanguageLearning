var words = [
  
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十'
 
];

// Shuffle method borrowed from:
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Declare variables.
var randomizedWords = [],
  pickedWords = [],
  preventDups = [],
  filtered = [],
  matchedCount = 0;

// Generate each square and randomized words pattern.
for(var i = 20; i > 0; i--) {
  $('.container').append('<div class="square" id="' + i +
  '" onclick="turnOver(this)"></div>');
  var randomWord = words[Math.floor(Math.random() * (words.length -1))];
  if(randomizedWords.indexOf(randomWord) == -1) {
    randomizedWords.push(randomWord);
  }
}

// Get left out words and place it into randomizedWords array.
words.forEach(function(w) {
  if(randomizedWords.indexOf(w) == -1) {
    randomizedWords.push(w);
  }
});

// Place words for first 18 squares and add class with the word.
for(var x = 1, i = 0; x < 11; x++, i++) {
  //console.log(x + " : " + i);
  $('#' +  x).html('<p id="p' + x + '">' + randomizedWords[i] + '</p>');
  $('#' + x).addClass(randomizedWords[i]);
}

var last18Words = randomizedWords.reverse()
last18Words = shuffle(last18Words);

//console.log(last18Words);

// Place remaining 18 squares.
for(var i = 11, n = 0; i <= 20; i++, n++) {
  //console.log(i + " : " + n);
  $('#' +  i).html('<p id="p'+ i + '">' + last18Words[n] + '</p>');
  $('#' + i).addClass(last18Words[n]);
}

var picked = 'none',
  matching = 'none',
  pickedId = '';

function turnOver(square) {
  $('.' + square.id).css('visibility', 'visible');
  $('#' + square.id).css( {
      'border-color': 'rgb(176, 73, 207)',
      'opacity': '1'
  });

  // Show the word.
  $('#p' + square.id).css('visibility', 'visible');

  if(picked == 'none') {
    picked = square.className.split(' ')[1];
    pickedId = square.id;
  } else if(matching == 'none'){
    matching = square.className.split(' ')[1];
  }

  // if two squares match, make invisible and disable
  // pointer events.
  if(picked == matching) {
    matchedCount++;
    $('.' + square.className.split(' ')[1]).css({
      // 
      "opacity": "0",
      "pointer-events": "none",
      "visibility": "hidden"

    });

    // Reset picked and matching to 'none'.
    picked = 'none';
    matching = 'none';
  } else if(matching !== 'none'){
    // Disable square click function.
    $('.square').css('pointer-events', 'none');
    // If not matching, reset the CSS of the two squares.
    $('#' + square.id).css('border-color', '#7FC7A8');
    $('#' + square.id).css('opacity', '0.8');
    $('.' + picked).css('border-color', '#7FC7A8');
    $('.' + picked).css('opacity', '0.8');

    // Hide the word and enable square click function.
    setTimeout(function() {
      $('.square').css('pointer-events', 'all');
      $('#p' + square.id).css('visibility', 'hidden');
      $('#p' + pickedId).css('visibility', 'hidden');
      pickedId = '';
    }, 800);

    // Reset picked and matching to 'none'.
    picked = 'none';
    matching = 'none';
  }

  // When all tiles are matched show the winning banner.
  if(matchedCount == 10) {
    $('.sign').addClass('animated bounceInDown ');
    $('.sign').css('visibility', 'visible');
  }
}