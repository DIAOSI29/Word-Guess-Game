//set up banner text before start of game//
var bannerText = "Press Any Button for A New Game!";
//set up initial state of the game//
var isGameOn = false;
//set up info panel text//
var resultText = "";
//set up initial steps left//
var stepsLeft = 5;
//set up initial current wins//
var currentWins = 0;
//set up initial letter guessed for each round//
var letterFailed = [];
//set up games remaining//
var gameRemaining = 4;
//set up initial animal on guess (non-visible//
var animalArray = ["bear", "dolphin", "elephant", "penguin"];
//index of animal to be guessed//
var animalIndex = 0;
//set up initial animal on guess (invisible)//
var resultArray = [];
//set up initial animal on guess (visible)//
var result = resultArray.join(" ");
//function for changing game status//
var animalToBeGuessed = animalArray[animalIndex];
bannerTextContent = document.getElementById("bannerText");
bannerTextContent.innerHTML = bannerText;
// using jquery to grab img element in html//
var resultImg = $("#resultImage");
//create array for game sucess images//
var animalSrc = [];

function game() {
  animalToBeGuessed = animalArray[animalIndex];
  //set up animal to be guessed//

  for (var i = 0; i < animalToBeGuessed.length; i++) {
    resultArray.push("_");
  }
  //function for showing all the game stats//
  bannerTextContent = document.getElementById("bannerText");
  resultTextContent = document.getElementById("resultText");
  resultContent = document.getElementById("showResult");
  stepsLeftContent = document.getElementById("stepsLeft");
  currentWinsContent = document.getElementById("currentWins");
  letterFailedContent = document.getElementById("lettersFailed");
  gamesRemainingContent = document.getElementById("gamesRemaining");
  //link source of html content to actual html elements//
  bannerTextContent.innerHTML = bannerText;
  resultTextContent.innerHTML = resultText;
  resultContent.innerHTML = resultArray.join(""); //why I can not use "result" here?//
  letterFailedContent.innerHTML = letterFailed;
  stepsLeftContent.innerHTML = stepsLeft;
  currentWinsContent.innerHTML = currentWins;
  //lettersFailedContent.innerHTML = letterFailed;
  gamesRemainingContent.innerHTML = gameRemaining;
}

//function for updating all relevant game stats//
function showStats() {
  bannerTextContent.innerHTML = bannerText;
  resultTextContent.innerHTML = resultText;
  resultContent.innerHTML = resultArray.join(""); //why I can not use "result" here?//
  letterFailedContent.innerHTML = letterFailed;
  stepsLeftContent.innerHTML = stepsLeft;
  currentWinsContent.innerHTML = currentWins;
  //lettersFailedContent.innerHTML = letterFailed;
  gamesRemainingContent.innerHTML = gameRemaining;
}
//function for checking user guess//
function checkingResult(userTyped) {
  var guessRight = false;
  //when game starts change the banner//
  bannerText = "GAME STARTED! JUST ENJOY!";
  resultText = "Guess Who Is The Next Animal ?";

  userInput = userTyped.toLowerCase();

  if (!isGameOn) {
    isGameOn = true;
    $(resultImg).attr("src", "./Images/cover.jpg");
    game();
  } else {
    for (var i = 0; i < animalToBeGuessed.length; i++) {
      if (animalToBeGuessed[i] == userInput) {
        guessRight = true;
      }
    }

    if (guessRight) {
      for (var i = 0; i < animalToBeGuessed.length; i++) {
        if (animalToBeGuessed[i] == userInput) {
          resultArray[i] = userInput;
          resultContent.innerHTML = resultArray.join("");
          showStats();
        }
      }
    } else {
      letterFailed.push(userInput);
      stepsLeft--;
      showStats();
    }
  }
}

//function for game lose//
function gameLose() {
  resultArray = [];
  bannerText = "Just Try Again!";
  stepsLeft = 5;
  animalIndex = 0;
  currentWins = 0;
  letterFailed = [];
  isGameOn = false;
  showStats();
}

//function for jump to next game//
function getNextGame() {
  resultArray = [];
  bannerText = "Good Work!";
  stepsLeft = 5;
  letterFailed = [];

  gameRemaining--;
  currentWins++;
  animalSrc = [
    "./Images/bear.jpg",
    "./Images/dolphin.jpg",
    "./Images/elephant.jpg",
    "./Images/penguin.jpg"
  ];
  $(resultImg).attr("src", animalSrc[animalIndex]);
  animalIndex++;

  game();

  showStats();
}
//function for game end//
function gameWin() {
  isGameOn = false;
  letterFailed = [];
  stepsLeft = 0;
  gameRemaining = 5;
  currentWins++;
  $(resultImg).attr("src", animalSrc[animalIndex]);
  animalIndex = 0;
  resultText = "Congratulations! You Won!";
  bannerText = "You Are Too Smart For This Game!";

  showStats();
}
//game progress control//
function gameProgress() {
  if (stepsLeft === 0) {
    gameLose();
    showStats();
  } else if (
    animalIndex < animalArray.length - 1 &&
    animalToBeGuessed === resultArray.join("")
  ) {
    getNextGame();

    showStats();
  } else if (
    animalIndex === animalArray.length - 1 &&
    animalToBeGuessed === resultArray.join("")
  ) {
    gameWin();
    showStats();
  }
}

document.onkeyup = function(event) {
  var userGuess = event.key;
  checkingResult(userGuess);
  gameProgress();
};
