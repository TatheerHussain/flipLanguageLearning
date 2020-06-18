var greetings = [
  
  
  'abc1.jpg',
  'a1.jpg',
  'abcd1.jpg',
  
  'abcde1.jpg',
  'abcdefghij.jpg',
  'abcdefgh1.jpg',
  'abcdef1.jpg',
  'abcdefg1.jpg',
  'abcdefg.jpg',
  'ab.jpg',
  'abcdefghij1.jpg',
  'ab1.jpg',
  'abcde.jpg',
  'abcd.jpg',
  'abcdefghi1.jpg',
  'a.jpg',
  'abc.jpg',
  
  'abcdef.jpg',
  'abcdefgh.jpg',
  
  'abcdefghi.jpg'
  
];



var images = [],
    theme = "",
    count = 19,
    rand = 0,
    tempElt1 = "",
    tempElt2 = "1",
    click = -1,
    score = 0,
    win = 0,
    time = 0;


var preElt = document.querySelector("#pre"),
    themesElts = document.querySelectorAll(".themes"),
    boxElts = document.querySelectorAll(".box"),
    timeElt = document.querySelector("#time"),
    scoreElt = document.querySelector("#score"),
    postElt = document.querySelector("#post"),
    finalElt = document.querySelector("#final");

// initiate the game with chosen theme
for (let j=0; j<themesElts.length; j++) {
  themesElts[j].addEventListener("click", function () {
    theme = this.id;


    for (let i=0; i<20; i++) {
      rand = Math.floor(Math.random() * count);
      images = greetings.slice();
      var item = images[i].replace(/[1]/g, "");
      boxElts[i].innerHTML = "<img src='images/haalchaal/" + images[i] + "' alt='image' data-image='" + item + "' class='hidden'>";
      images.splice(rand, 1);
      count--;
    }
    preElt.style.display = "none";
  });
}
 
// Handle the play
for (let j=0; j<document.querySelectorAll(".play").length; j++) {
    document.querySelectorAll(".play")[j].addEventListener("click", function () {

    this.firstChild.classList.remove("hidden");
             
        
    // first of two click
    if (click < 1) {
      tempElt1 = this;

      
      // timer
      if (click === -1) {
        timer = setInterval(function() {
          time++;
          timeElt.innerHTML = time + " sec";
        }, 1000);
      }
      click = 1;
    }

    // second click
    else if (this !== tempElt1) {
      tempElt2 = this;

      // different images
      // now compare data-image

      if (tempElt1.firstChild.dataset['image'] !== tempElt2.firstChild.dataset['image']) {
        setTimeout( function() {
          tempElt1.firstChild.classList.add("hidden");
          tempElt2.firstChild.classList.add("hidden");
        }, 400);
        if (score > 0){
          score -= 2;
        }
        scoreElt.innerHTML = "score: " + score;
      }

      // same images
      else {
        score += 10;
        win += 2;
        tempElt1.firstChild.classList.add("outlined");
        tempElt2.firstChild.classList.add("outlined");
        tempElt1.classList.remove("play");
        tempElt2.classList.remove("play");
        scoreElt.innerHTML = "score: " + score;

        // game won
        if (win === 20) {
          clearTimeout(timer);
          finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
          postElt.style.display = "flex";
        }
      }
      click = 0;
    }
  });
}