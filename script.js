function getComputerChoice() {
    // randomly return rock, paper, or scissors as strings
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    // ask user a choice of rock, paper, or scissors and returns it
    let choice = prompt("Choose Rock, Paper, or, Scissors:");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        results.textContent = "Draw!"
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")) {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
}

function playGame(humanChoice) {
    
    playRound(humanChoice, getComputerChoice());
    
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === computerScore) {
            results.textContent += `\n\nIts a draw!\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`;
        } else if (humanScore > computerScore) {
            results.textContent += `\n\nCongrats you win!\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`;
        } else {
            results.textContent += `\n\nYou lose!\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`;
        }

        humanScore = 0;
        computerScore = 0;
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const results = document.querySelector("div");

const [ROCK,PAPER,SCISSORS] = ["rock", "paper", "scissors"];

rockButton.addEventListener('click', () => playGame(ROCK));
paperButton.addEventListener('click', () => playGame(PAPER));
scissorsButton.addEventListener('click', () => playGame(SCISSORS));




