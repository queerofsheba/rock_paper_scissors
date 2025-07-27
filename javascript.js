// DEFINE function to select random choice for computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3); // store random number from 0-2
    console.log("Computer chooses " + choices[number]); // state computer choice in console
    // need to update the dom with computer selection
    return choices[number]; // return computer choice
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// DEFINE function to play single round of game
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("Its a draw!");
        console.log(humanScore + " " + computerScore);
        return;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats rock.");
        console.log(humanScore + " " + computerScore);
        return;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors.");
        console.log(humanScore + " " + computerScore);
        return;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats rock.");
        console.log(humanScore + " " + computerScore);
        return;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beat paper.");
        console.log(humanScore + " " + computerScore);
        return;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors.");
        console.log(humanScore + " " + computerScore);
        return;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beat paper.");
        console.log(humanScore + " " + computerScore);
        return;
    }
}

// POPULATE scoreboard
const results = document.querySelector("#scoreboard");
const scoreBoard = document.createElement("h1"); 
scoreBoard.textContent = "Score";
results.appendChild(scoreBoard);
const player = document.createElement("h2");
results.appendChild(player);
const computer = document.createElement("h2");
results.appendChild(computer);

// UPDATE scoreboard & check for winning state
function updateScoreboard() {
    if (humanScore == 5) {
        player.textContent = `Player wins!!!`;
        endGame();
        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            gameOver = false;
            player.textContent = "";
            computer.textContent = "";
            results.removeChild(playAgain);
        })
        results.appendChild(playAgain);
        } else {player.textContent = `Player - ${humanScore}`;
    }
    if (computerScore == 5) {
        computer.textContent = `Computer wins!!!`;
        endGame();
        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            gameOver = false;
            player.textContent = "";
            computer.textContent = "";
            results.removeChild(playAgain);
        })
        results.appendChild(playAgain);
        } else {computer.textContent = `Computer - ${computerScore}`;
    }  
}

// DELEGATE interaction with choice buttons & check for winning state
let playerChoice = document.querySelector("#playerChoice");
playerChoice.addEventListener("click", (event) => {
    let target = event.target;
    if (gameOver === false) {
        switch(target.id) {
          case "rck":
              playRound("rock", getComputerChoice());
              updateScoreboard();
              break;
          case "ppr":
              playRound("paper", getComputerChoice());
              updateScoreboard();
              break;
          case "scs":
              playRound("scissors", getComputerChoice());
              updateScoreboard();
              break;
        }
    } else {playerChoice.removeEventListener}
});

// DEFINE game over state
function endGame() {
    gameOver = true;
};


// TODO - implement game over state