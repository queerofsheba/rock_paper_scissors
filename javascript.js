console.log("Hello, Jade GC!")

function getComputerChoice() {
// CREATE three choices - rock, paper, & scissors
    let choices = ["rock", "paper", "scissors"]; // create array of three options
// SELECT choice at random
    let number = Math.floor(Math.random() * 3); // store random number from 0-2
// RETURN randomly selected choice
    console.log("Computer chooses " + choices[number]);
    return choices[number]; // return option from choices indexed at number
}

function getHumanChoice() {
// PROMPT user to input choice    
    let choice = prompt("Rock, paper, or scissors?"); // store user answer in variable

// RESPOND to user choice, assuming it is valid    
    if (choice.toLowerCase() === "rock") {
        console.log("You choose rock!") // return message for rock
    } else if (choice.toLowerCase() === "paper") {
        console.log("You choose paper!") // return message for paper
    } else if (choice.toLowerCase() === "scissors") {
        console.log("You choose scissors!") // return message for scissors
    }
// CLOSE function and return user answer    
    return choice
}

let humanScore = 0 // create variable for human score
let computerScore = 0 // create variable for computer score

function playGame () {
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

let roundOne = playRound(getHumanChoice(), getComputerChoice())
console.log("Human: " + humanScore)
console.log("Computer: " + computerScore)
let roundTwo = playRound(getHumanChoice(), getComputerChoice())
console.log("Human: " + humanScore)
console.log("Computer: " + computerScore)
let roundThree = playRound(getHumanChoice(), getComputerChoice())
console.log("Human: " + humanScore)
console.log("Computer: " + computerScore)
let roundFour = playRound(getHumanChoice(), getComputerChoice())
console.log("Human: " + humanScore)
console.log("Computer: " + computerScore)
let roundFive = playRound(getHumanChoice(), getComputerChoice())
console.log("Final score - Human " + humanScore + ", Computer " + computerScore)
if (humanScore > computerScore) {
    console.log("Congrats best friend, you did that!")
} else if (humanScore < computerScore) {
    console.log("Tough luck, bookie, the computer is smarter.")
} else if (humanScore === computerScore) {
    console.log("Victor undetermined, new game suggested")
}
// console.log("Human: " + humanScore)
// console.log("Computer: " + computerScore)
}

console.log(playGame())