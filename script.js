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
    let choice = +prompt("Choose one by typing 1, 2, or 3:\n1. Rock\n2. Paper\n3. Scissors\n");
    return choice;
}

let humanScore = 0;
let computerScore = 0;