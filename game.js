//set up banner text before start of game//
var bannerText = "Press Any Button for A New Game!";
//set up initial state of the game//
var isGameOn = false;
//set up info panel text//
var resultText = "Guess Which Animal Is Behind The Scene ?";
//set up initial steps left//
var stepsLeft = 5;
//set up initial current wins//
var currentWins = 0;
//set up initial letter guessed for each round//
var letterFailed = [];
//set up games remaining//
var gameRemaining = 4;
//set up initial animal on guess (non-visible//
var animalArray = ["bear", "elephant", "dolphin", "penguin"];
//index of animal to be guessed//
var animalIndex = 0;
//set up initial animal on guess (invisible)//
var resultArray = [];
//set up initial animal on guess (visible)//
var result = resultArray.join(" ");
//function for changing game status//
bannerTextContent = document.getElementById("bannerText");
bannerTextContent.innerHTML = bannerText;

function game() {
  //set up animal to be guessed//
  var animalToBeGuessed = animalArray[animalIndex];
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
  stepsLeftContent.innerHTML = stepsLeft;
  currentWinsContent.innerHTML = currentWins;
  lettersFailedContent.innerHTML = letterFailed;
  gamesRemainingContent.innerHTML = gameRemaining;
}

//function for checking user guess//
function checkingResult(userTyped) {
  //when game starts change the banner//
  bannerText = "GAME STARTED! JUST ENJOY!";
  userInput = userTyped.toLowerCase();
  if (!isGameOn) {
    game();
  } else if (isGameOn == "true") {
    for (var i = 0; i < animalToBeGuessed.length; i++) {
      if (animalToBeGuessed[i] === userInput) {
        resultArray[i] = userInput;
      } else {
        letterFailed.push(userInput);
        stepsLeft--;
      }
    }
  }
}

//function for game lose//
function gameLose() {
  bannerText = "Please Try Again!";
  stepsLeft = 5;
  animalIndex = 0;
  currentWins = 0;
  letterFailed = [];
  isGameOn = false;
  game();
}

//function for jump to next game//
function getNextGame() {
  bannerText = "Good Work!";
  stepsLeft = 5;
  letterFailed = [];
  animalIndex++;
  gameRemaining--;
  currentWins++;
  game();
}
//function for game end//
function gameWin() {
  isGameOn = false;
  animalArray = [];
  letterFailed = "None";
  stepsLeft = "None";
  gameRemaining = "None";
  resultText = "Congratulations! You Won!";
  bannerText = "You Are Too Smart For This Game!";
}
//game progress control//
function gameProgress() {
  if (stepsLeft === 0) {
    gameLose();
  } else if (
    animalIndex < animalArray.length - 1 &&
    animalToBeGuessed === animalArray.join("")
  ) {
    getNextGame();
  } else if (
    (animalIndex =
      animalArray.length - 1 && animalToBeGuessed === animalArray.join(""))
  ) {
    gameWin();
  }
}

document.onkeyup = function(event) {
  var userInput = event.key;
  checkingResult(userInput);
  gameProgress();
};
