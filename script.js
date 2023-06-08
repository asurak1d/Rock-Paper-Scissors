// Function to get computer's choice randomly
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a single round
  function playRound(playerSelection, computerSelection) {
    const playerSelectionNormalized = playerSelection.toLowerCase();
  
    // Check for a tie
    if (playerSelectionNormalized === computerSelection.toLowerCase()) {
      return "It's a tie!";
    }
  
    // Check all possible win conditions for the player
    if (
      (playerSelectionNormalized === 'rock' && computerSelection === 'Scissors') ||
      (playerSelectionNormalized === 'paper' && computerSelection === 'Rock') ||
      (playerSelectionNormalized === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
  
    // If the player didn't win, they lose
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  
  // Function to play the game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
  
      console.log(`Round ${round}:`);
      console.log(`Player chooses: ${playerSelection}`);
      console.log(`Computer chooses: ${computerSelection}`);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    console.log("Game over!");
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Oops! You lose the game.");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  game();  