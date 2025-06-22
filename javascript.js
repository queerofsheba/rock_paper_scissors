console.log("Hello, Jade GC!")

function getComputerChoice() {
// CREATE three choices - rock, paper, & scissors
    let choices = ["rock", "paper", "scissors"]; // create array of three options
// SELECT choice at random
    let number = Math.floor(Math.random() * 3); // stores random number from 0-2
// RETURN randomly selected choice
    return choices[number]; // returns option from choices indexed at number
}

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())