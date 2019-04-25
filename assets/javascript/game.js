// Create the pool of letters for the computer to use
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

var wins = 0;
var losses = 0;

var guesses = 10;

// Array to store previously guessed letters
var usedLetters = []

// To write things to the page
var gameHTML = document.getElementById("game")

// Have computer select letter
var random = [Math.floor(Math.random() * computerChoice.length)];
var selection = computerChoice[random]

function newRound () {
  guesses = 10;
  random = [Math.floor(Math.random() * computerChoice.length)];
  selection = computerChoice[random];
  usedLetters = [];
  
}

// Create input method
$("#go").on("click", function(event) {
  event.preventDefault();

  // Determines which key was pressed.
  var userGuess = $("#userGuess").val().toLowerCase().trim();


  if(!computerChoice.includes(userGuess)){
  alert("What the heck is THAT? Whatever it is, it's certainly not right...");
  return false
  }
// check the guess - if it was right:
if (userGuess === selection && wins < 50) {
alert("You got it! Wanna try again?");
wins++;
// Reset the game
guesses = 10;
usedLetters = [];
random = [Math.floor(Math.random() * computerChoice.length)];
selection = computerChoice[random];
}
// If guess was wrong:
else {
  guesses--;
  usedLetters.push(userGuess);
  $("#userGuess").val(null)
}
// End round and reset if guess limit reached
if(guesses === 0) {
alert("Game over! The correct answer was " + selection + ". Maybe we should give it another go?");
losses++;
guesses = 10;
usedLetters = [];
random = [Math.floor(Math.random() * computerChoice.length)];
selection = computerChoice[random];
}
// IF USER GETS TO 10 WINS OR LOSSES, RESET EVERYTHING

// Show user pertinent info
gameHTML.innerHTML = `
Letters guessed: ${usedLetters.join(", ")}<br>
Guesses remaining: ${guesses}<br>
Wins: ${wins}<br>
Losses: ${losses}
`
}
)
