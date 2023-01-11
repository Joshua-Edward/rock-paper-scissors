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
  console.log("computer: " + computerChoice);
  return(computerChoice);
}


//get players choice and run validity check function
function getPlayerChoice() {
  let playerChoice = prompt("Please select Rock, Paper, or Scissors.");
  isValid = checkIsValid(playerChoice);

  //if the input from the player is not valid ask again
  while (!isValid) {
    playerChoice = prompt("Something went wrong. Please select Rock, Paper, or Scissors again.");
    isValid = checkIsValid(playerChoice);
  } 

  //out players choice
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
  console.log(gameMessage);
  return(gameResult);
}

//run a 5 game set
function game() {
  let wins = 0;
  let gamesPlayed = 0;
  let losses = 0;
  while (gamesPlayed < 5) {
    result = playRound(getPlayerChoice(), getComputerChoice());

    //increment up wins, losses, and games played
    if (result === "winner") {
      gamesPlayed = ++gamesPlayed;
      wins = ++wins;
    } else if (result === "loser") {
      gamesPlayed = ++gamesPlayed;
      losses = ++losses;
    }
    //show current score and games played
    console.log(`games: ${gamesPlayed}`);
    console.log(`The score is: ${wins} wins and ${losses} losses.`)
  }

  //determine the victor
  if (wins > losses) {
    console.log("Congrats! You win the game.");
  } else {
    console.log("Tough luck. You lose the game.");
  }
}

//launch the game
game();