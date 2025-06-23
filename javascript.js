console.log("Hello, Jade GC!")

function getComputerChoice() {
// CREATE three choices - rock, paper, & scissors
    let choices = ["rock", "paper", "scissors"]; // create array of three options
// SELECT choice at random
    let number = Math.floor(Math.random() * 3); // store random number from 0-2
// RETURN randomly selected choice
    return choices[number]; // return option from choices indexed at number
}

function getHumanChoice() {
// PROMPT user to input choice    
    let choice = prompt("Rock, paper, or scissors?"); // store user answer in variable

// RESPOND to user choice, assuming it is valid    
    if (choice.toLowerCase() === "rock") {
        return "You choose rock!" // return message for rock
    } else if (choice.toLowerCase() === "paper") {
        return "You choose paper!" // return message for paper
    } else if (choice.toLowerCase() === "scissors") {
        return "You choose scissors!" // return message for scissors
    }
}

let humanScore = 0 // create variable for human score
let computerScore = 0 // create variable for computer score

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        return "It's a draw!"
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        computerScore += 1
        return "You lose! Paper beats rock."
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        humanScore += 1
        return "You win! Rock beats scissors."
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        humanScore += 1
        return "You win! Paper beats rock."
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        computerScore += 1
        return "You lose! Scissors beat paper."
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        computerScore += 1
        return "You lose! Rock beats scissors."
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        humanScore += 1
        return "You win! Scissors beat paper."
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
console.log(playRound("paper", "rock"));
console.log(humanScore, computerScore);