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

//run a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  let gameResult = undefined;
  let winnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  let drawMessage = "It's a draw. Nobody loses.";
  let loserMessage = `You lose! ${computerSelection} beats ${playerSelection}`;

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
  
  console.log(gameMessage);
  return(gameResult);
}

//run a 5 game set
function game() {
  let wins = 0;
  let gamesPlayed = 0;
  let losses = gamesPlayed - wins;
  while (gamesPlayed < 5) {
    result = playRound(getPlayerChoice(), getComputerChoice());

    if (result === "winner") {
      games = ++gamesPlayed;
      wins = ++wins;
    } else if (result === "loser") {
      games = ++gamesPlayed;
    } 
    console.log(`games: ${gamesPlayed}`);
    console.log(`The score is: ${wins} wins and ${losses} losses.`)
  }

  if (wins > losses) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

console.log(game());