//Globals
let wins = 0;
let losses = 0;

//get a random number and use it to determine computers choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
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
  const drawMessage = "It's a draw. Nobody loses. Replay the round.";
  let loserMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
  let gameMessage = undefined;

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
  resultDisplay.innerText = gameMessage;
  playerDisplay.innerText = `Player: ${playerSelection}`;
  computerDisplay.innerText = `Computer: ${computerSelection}`;

  if (gameResult === "winner") {
    wins = ++wins;
  } else if (gameResult === "loser") {
    losses = ++losses;
  }
  
  winCount.innerText = `Wins: ${wins}`;
  lossCount.innerText = `Losses: ${losses}`;

  winDetector(); 
}

// Checks to see if the game is finished
function winDetector() {
  if (wins === 5) {
    endGameDisplay.style.display = 'flex';
    endGameResults.innerText = "Congrats! You have won the game.";
    endGameScore.innerText = `Final Score = Wins: ${wins}   Losses: ${losses}`;
  } else if (losses === 5){
    endGameDisplay.style.display = 'flex';
    endGameResults.innerText = "Tough luck. You have lost the game.";
    endGameScore.innerText = `Final Score = Wins: ${wins}   Losses: ${losses}`;
  }
}

// Resets the game to the original state if play again is selected
function gameReset() {
  wins = 0;
  losses = 0;
  endGameDisplay.style.display = 'none';
  winCount.innerText = `Wins: ${wins}`;
  lossCount.innerText = `Losses: ${losses}`;
  resultDisplay.innerText = 'Pick Your Weapon';
  playerDisplay.innerText = '';
  computerDisplay.innerText = '';
}

// Selectors
const winCount = document.querySelector('.wins');
const lossCount = document.querySelector('.losses');
const resultDisplay = document.querySelector('#roundResults');
const playerDisplay = document.querySelector('#playerChoice');
const computerDisplay = document.querySelector('#computerChoice');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const btnAgain = document.querySelector('.playAgain');
const endGameDisplay = document.querySelector('.endContainer');
const endGameScore = document.querySelector('.endScore');
const endGameResults = document.querySelector('.endResults');

// Add click events to buttons
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);
btnAgain.addEventListener('click', gameReset);