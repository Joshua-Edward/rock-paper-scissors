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

  return(gameResult);
}
//globals??
  let wins = 0;
  let gamesPlayed = 0;
  let losses = 0;

//run a 5 game set
function game() {
  while (gamesPlayed < 5) {
    result = playRound();

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
// game();

// Add functionallity to Rock button
var btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', playRound);

// Add functionallity to Paper button
var btnRock = document.querySelector('.paper');
btnRock.addEventListener('click', playRound);

// Add functionallity to Scissors button
var btnRock = document.querySelector('.scissors');
btnRock.addEventListener('click', playRound);