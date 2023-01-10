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
  return(computerChoice);
}
console.log(getComputerChoice());

//get players choice
function getPlayerChoice() {
  let playerChoice = prompt("Please select Rock, Paper, or Scissors.");
  let isValid = playerChoice.toLowerCase === "rock" || 
                playerChoice.toLowerCase === "paper" ||
                playerChoice.toLowerCase === "scissors";

  // if (isValid) {
  //   return(playerChoice.toLowerCase);
  // } else {
  //   console.log("Incorrect entry.");
  //   getPlayerChoice();    
  // }

  while (!isValid) {
    playerChoice = prompt("Something went wrong. Please select Rock, Paper, or Scissors again.")
  } 

  return(playerChoice);
}
console.log(getPlayerChoice());