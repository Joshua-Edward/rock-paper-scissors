//Globals
let wins = 0;
let gamesPlayed = 0;
let losses = 0;

//get a random number and use it to determine computers choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = undefined;

  //assign the random number to a pick for the game
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  //output the computers choice
  return(computerChoice);
}

//run a single round of rock paper scissors
function playRound(event) {
  const playerSelection = event.target.innerText.toLowerCase();
  const computerSelection = getComputerChoice();
  let gameResult = undefined;
  let winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  let drawMessage = "It's a draw. Nobody loses. Replay the round.";
  let loserMessage = `You lose! ${computerSelection} beats ${playerSelection}`;

  //determine if the round will result in a win, loss, or draw
  if (playerSelection === "rock" && computerSelection === "scissors") {
    gameResult = "winner";
    gameMessage = winnerMessage;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    gameResult = "winner";
    gameMessage = winnerMessage;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    gameResult = "winner";
    gameMessage = winnerMessage;
  } else if (playerSelection === computerSelection) {
    gameResult = "draw";
    gameMessage = drawMessage;
  } else {
    gameResult = "loser";
    gameMessage = loserMessage;
  }

  //output results of the round
  let resultDisplay = document.querySelector('#roundResults')
  let playerDisplay = document.querySelector('#playerChoice')
  let computerDisplay = document.querySelector('#computerChoice')

  resultDisplay.innerText = gameMessage;
  playerDisplay.innerText = `Player: ${playerSelection}`;
  computerDisplay.innerText = `Computer: ${computerSelection}`;

  if (gameResult === "winner") {
    gamesPlayed = ++gamesPlayed;
    wins = ++wins;
  } else if (gameResult === "loser") {
    gamesPlayed = ++gamesPlayed;
    losses = ++losses;
  }
  
  winCount.innerText = `Wins: ${wins}`;
  lossCount.innerText = `Losses: ${losses}`;

  var endGameScore = document.querySelector('.endScore');
  var endGameResults = document.querySelector('.endResults');

  if (gamesPlayed == 5 & wins > losses) {
    endGameDisplay.style.display = 'flex';
    endGameResults.innerText = "Congrats! You win the game.";
    endGameScore.innerText = `Final Score = Wins: ${wins}   Losses: ${losses}`;
  } else if (gamesPlayed == 5 & wins < losses){
    endGameDisplay.style.display = 'flex';
    endGameResults.innerText = "Tough luck. You lose the game.";
    endGameScore.innerText = `Final Score = Wins: ${wins}   Losses: ${losses}`;
  }
}

function gameReset() {
  wins = 0;
  losses = 0;
  gamesPlayed = 0;
  endGameDisplay.style.display = 'none';
  winCount.innerText = `Wins: ${wins}`;
  lossCount.innerText = `Losses: ${losses}`;
}

// Selectors
var winCount = document.querySelector('.wins');
var lossCount = document.querySelector('.losses');

// Add functionallity to Rock button
var btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', playRound);

// Add functionallity to Paper button
var btnRock = document.querySelector('.paper');
btnRock.addEventListener('click', playRound);

// Add functionallity to Scissors button
var btnRock = document.querySelector('.scissors');
btnRock.addEventListener('click', playRound);

// Game reset
var btnAgain = document.querySelector('.playAgain');
var endGameDisplay = document.querySelector('.endContainer');
btnAgain.addEventListener('click', gameReset)


