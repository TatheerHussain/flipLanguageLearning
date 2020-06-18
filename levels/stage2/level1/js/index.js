var fruits = [
  
  "a1.jpg",
  'ab1.png',
  'abc1.png',
  'abcd1.jpg',
  'abcde1.jpg',
  'abcdef1.jpg',
  'abcdefg1.jpg',
  'abcdefgh1.jpg',
  'abcdefghi1.jpg',
  'abcdefghij1.jpg',
  
  "a.jpg",
  'ab.png',
  'abc.png',
  'abcd.jpg',
  'abcde.jpg',
  'abcdef.jpg',
  'abcdefg.jpg',
  'abcdefgh.jpg',
  'abcdefghi.jpg',
  'abcdefghij.jpg',
];
var vegetables= [
  "a1.jpg",
  'ab1.jpg',
  'abc1.jpg',
  'abcd1.jpg',
  'abcde1.jpg',
  'abcdef1.jpg',
  'abcdefg1.jpg',
  'abcdefgh1.jpg',
  'abcdefghi1.jpg',
  'abcdefghij1.jpg',

  "a.jpg",
  'ab.jpg',
  'abc.jpg',
  'abcd.jpg',
  'abcde.jpg',
  'abcdef.jpg',
  'abcdefg.jpg',
  'abcdefgh.jpg',
  'abcdefghi.jpg',
  'abcdefghij.jpg'
];
var animals = [
  "a1.jpg",
  'ab1.jpg',
  'abc1.jpg',
  'abcd1.jpg',
  'abcde1.jpg',
  'abcdef1.jpg',
  'abcdefg1.jpg',
  'abcdefgh1.jpg',
  'abcdefghi1.jpg',
  'abcdefghij1.jpg',

  "a.jpg",
  'ab.jpg',
  'abc.jpg',
  'abcd.jpg',
  'abcde.jpg',
  'abcdef.jpg',
  'abcdefg.jpg',
  'abcdefgh.jpg',
  'abcdefghi.jpg',
  'abcdefghij.jpg'
];
var sports = [
  "a1.jpg",
  'ab1.jpg',
  'abc1.jpg',
  'abcd1.jpg',
  'abcde1.jpg',
  'abcdef1.jpg',
  'abcdefg1.jpg',
  'abcdefgh1.jpg',
  'abcdefghi1.jpg',
  'abcdefghij1.jpg',

  "a.jpg",
  'ab.jpg',
  'abc.jpg',
  'abcd.jpg',
  'abcde.jpg',
  'abcdef.jpg',
  'abcdefg.jpg',
  'abcdefgh.jpg',
  'abcdefghi.jpg',
  'abcdefghij.jpg'
];
var dailyRoutine= [
  "a1.jpg",
  'ab1.jpg',
  'abc1.jpg',
  'abcd1.jpg',
  'abcde1.jpg',
  'abcdef1.jpg',
  'abcdefg1.jpg',
  'abcdefgh1.jpg',
  'abcdefghi1.jpg',
  'abcdefghij1.jpg',

  "a.jpg",
  'ab.jpg',
  'abc.jpg',
  'abcd.jpg',
  'abcde.jpg',
  'abcdef.jpg',
  'abcdefg.jpg',
  'abcdefgh.jpg',
  'abcdefghi.jpg',
  'abcdefghij.jpg'
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
    // insert theme in images array
    switch (theme) {

      case "fruits":
        for (let i=0; i<20; i++){//images.push(fruits[i]);


        }
       

          //images.push(fruits[i].replace(/[1]/g, ""));
  
    
        break;
      case "vegetables":
        for (let i=0; i<20; i++) {images.push(vegetables[i]);}
        break;
      case "animals":
        for (let i=0; i<20; i++) {images.push(animals[i]);}
        break;
      case "sports":
        for (let i=0; i<20; i++) {images.push(sports[i]);}
        break;
      case "dailyRoutine":
        for (let i=0; i<20; i++) {images.push(dailyRoutine[i]);}
        break;
    }

    // insert images in flip deks
    // fruits

    for (let i=0; i<20; i++) {
      rand = Math.floor(Math.random() * count);
      images = fruits.slice();
      var item = images[i].replace(/[1]/g, "");
      boxElts[i].innerHTML = "<img src='images/mewee/" + images[i] + "' alt='image' data-image='" + item + "' class='hidden'>";
       //boxElts[i].innerHTML = "<img src='images/sabzi/" + images[i] + "' alt='image' data-image='" + item + "' class='hidden'>";
      images.splice(rand, 1);
      count--;
    }
    preElt.style.display = "none";
  });
}

//vegetables














 
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