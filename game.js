let result;
let choice;
let par;
let myScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let compPick = Math.floor(Math.random() * 3)
    switch(compPick) {
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
            break;
    }
}
function round(playerSelection, computerSelection) {
    if(playerSelection === "Rock" && computerSelection === "Rock") {
        par = "Tie";
    } else if(playerSelection === "Rock" && computerSelection === "Paper") {
        par = "You lose.";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        par = "You win!";
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        par = "You win!";
    } else if(playerSelection === "Paper" && computerSelection === "Paper") {
        par = "Tie";
    } else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        par = "You lose.";
    } else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        par = "You lose."
    } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        par = "You win!";
    } else if(playerSelection === "Scissors" && computerSelection === "Scissors") {
        par = "Tie";
    } else {
        par = "Ops, something went wrong.";
    }
}
function rockButton() {
    choice = "Rock";
    game();
}
function paperButton() {
    choice = "Paper";
    game();
}
function scissorsButton() {
    choice = "Scissors";
    game();
}

function game() {
        getComputerChoice();
        round(choice, result);
        document.getElementById("outcome").innerHTML = par;
        if(par === "You win!") {
            myScore++;
        } else if(par === "You lose.") {
            computerScore++;
        }
        document.getElementById("score").innerHTML = "Score: " + myScore + " - " + computerScore;
}