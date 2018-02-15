//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
//sets a random letter for the computerGuess
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//sets guesses remaining to 10
var remainingGuesses = 10;
//sets empty guessedLetters array
var guessedLetters = [];
//set wins and losses to 0
var wins = 0;
var losses = 0;
  
//function that we call after we win or lose to reset game
function gameConditions() {
  computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  remainingGuesses = 10;
  guessedLetters = [];
}

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function gameStart(event) {
  // reset our win/lose message
  document.getElementById("you-lost").innerHTML = " ";
  //sets userguess to key only if key is a letter
  if (alphabet.includes(event.key)) {
    var userGuess = event.key;
    //adds guess to array (new letters only) and subtracts from remaining guesses
    if (guessedLetters.includes(userGuess)) {
      alert("you already guessed " + userGuess + "!")
    } else {
      guessedLetters.push(userGuess);
      remainingGuesses--;
    }
  } else {
    alert("please select a letter");
  }
    //win condition
    if (userGuess === computerGuess && remainingGuesses > 0) {
      //increase score by one, display win msg, reset game conditions
      wins++;
      document.getElementById("you-lost").innerHTML = "You Won! Play again";
      gameConditions();
     // lose conditions
    } else if (remainingGuesses === 0){
      losses++;
      document.getElementById("you-lost").innerHTML = "You Lost! Play again";
      gameConditions();
    }
    //display everything 
    var html =
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses " + losses + "</p>" +
      "<p>Guesses Left: " + remainingGuesses + "</p>" +
      "<p>Your guesses so far: " + guessedLetters + "</p>" ;

    document.querySelector("#game").innerHTML = html; 
  };


  