//get a random number and use it to determine computers choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = undefined;

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("computer: " + computerChoice);
  return(computerChoice);
}

//get players choice and run validity check function
function getPlayerChoice() {
  let playerChoice = prompt("Please select Rock, Paper, or Scissors.");
  isValid = checkIsValid(playerChoice);

  while (!isValid) {
    playerChoice = prompt("Something went wrong. Please select Rock, Paper, or Scissors again.");
    isValid = checkIsValid(playerChoice);
  } 

  console.log("player: " + playerChoice);
  return(playerChoice.toLowerCase());
}

//check if player choice is valid
function checkIsValid(choiceToCheck) {
  let isValid = choiceToCheck.toLowerCase() === "rock" || 
  choiceToCheck.toLowerCase() === "paper" ||
  choiceToCheck.toLowerCase() === "scissors";
  return(isValid)
}

//run a game of rock paper scissors
function rockPaperScissors(playerSelection, computerSelection) {
  let gameResult = undefined;
  let winner = `You Win! ${playerSelection} beats ${computerSelection}`;
  let draw = "It's a draw. Nobody loses.";
  let loser = `You lose! ${computerSelection} beats ${playerSelection}`;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    gameResult = winner;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    gameResult = winner;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    gameResult = winner;
  } else if (playerSelection === computerSelection) {
    gameResult = draw;
  } else {
    gameResult = loser;
  }

  return(gameResult);
}
console.log(rockPaperScissors(getPlayerChoice(), getComputerChoice()));