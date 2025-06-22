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

console.log(getComputerChoice());
console.log(getHumanChoice());