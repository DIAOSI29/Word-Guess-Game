//set up initial state of the game//
var isGameOn = false;
//set up info panel text//
var resultText = "Guess Which Animal Is Behind The Scene ?";
//set up initial steps left//
var stepsLeft = 5;
//set up initial current wins//
var currentWins = 0;
//set up initial letter guessed for each round//
var letterGuessed = [];
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

function game() {
  //set up animal to be guessed//
  var animalToBeGuessed = animalArray[animalIndex];
  for (var i = 0; i < animalToBeGuessed.length; i++) {
    resultArray.push("_");
  }

  //function for showing all the game stats//
  resultTextContent = document.getElementById("resultText");
  resultContent = document.getElementById("showResult");
  stepsLeftContent = document.getElementById("stepsLeft");
  currentWinsContent = document.getElementById("currentWins");
  letterGuessedContent = document.getElementById("lettersGuessed");
  gamesRemainingContent = document.getElementById("gamesRemaining");
  //link source of html content to actual html elements//
  resultTextContent.innerHTML = resultText;
  resultContent.innerHTML = resultArray.join(" ");
  stepsLeftContent.innerHTML = stepsLeft;
  currentWinsContent.innerHTML = currentWins;
  letterGuessedContent.innerHTML = letterGuessed;
  gamesRemainingContent.innerHTML = gameRemaining;
}

function getNextGame() {
  stepsLeft = 5;
  letterGuessed = [];
  animalIndex++;
}

function endOfGame() {
  isGameOn: false;
}
//function for changing game banner//
function bannerChange() {
  document.getElementById("bannerText").innerHTML = "GAME STARTED! JUST ENJOY!";
}

//press a button to change the status of the game to start//
document.onkeyup = function() {
  var userInput = event.key;

  if (!isGameOn) {
    game();
    //when game starts change the banner//
    bannerChange();
    animalIndex = 0;
  } else if (isGameOn == "true" && animal == "bear") {
  }
};

//set up initial figure for game stats including: guess left, game left, array for guessed words, current wins.//

//when status is game-on, set up underlined result clue//

//first function for first animal to be guessed: keyup function to check user guess with result, if matches, //

//reduce guess left by one for every click//

//set up first game word array and
