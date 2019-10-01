// example of onkeyup function from last assignment:
// document.onkeyup = function() {
//     var key = event.key;
//     if (key === "a") {
//       car.driveToWork();
//     } else if (key === "b") {
//       car.driveAroundWorld();
//     } else if (key === "c") {
//       car.getTuneUp();
//     } else if (key === "d") {
//       car.honk();
//     }
//   };

//set up initial state of the game//
var isGameOn = "false";
//set up initial steps left//
var stepsLeft = 15;
//set up initial current wins//
var wins = 0;
//set up initial letter guessed for each round//
var letterGuessed = [];
//set up games remaining//
var gameRemaining = 3;
//set up initial animal on guess (non-visible//
var animal = "bear";
//set up initial animal on guess (visible)//
var result = "____";

//press a button to change the status of the game to start//
//when game starts change the banner//

//set up initial figure for game stats including: guess left, game left, array for guessed words, current wins.//

//when status is game-on, set up underlined result clue//

//first function for first animal to be guessed: keyup function to check user guess with result, if matches, //

//reduce guess left by one for every click//

//set up first game word array and
