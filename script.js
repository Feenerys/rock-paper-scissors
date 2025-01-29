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
        console.log("Draw!")
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

function playGame() {
    for (i = 0;i < 5;i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log(`Its a draw!\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`)
    } else if (humanScore > computerScore) {
        console.log(`Congrats you win!\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`)
    } else {
        console.log(`You lose!\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`)
    }
}

playGame();
