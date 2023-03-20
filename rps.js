function getPlayerChoice() {
    let getPlayerChoice = prompt("Round ${round} Rock, Paper or Scissor?");
    let playerChoice = getPlayerChoice.toLowerCase();
    let firstLetter = getPlayerChoice.charAt(0);
    let realPlayerChoice = firstLetter.toUpperCase() + playerChoice.slice(1);
    return realPlayerChoice;
};

function getComputerChoice() {
    let choices = ["Rock",
        "Paper",
        "Scissor"
    ];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playRound(realPlayerChoice, computerChoice) {
    if (realPlayerChoice === "Rock" && computerChoice === "Paper") {
        return "You Lose! Paper Beats Rock";
    } else if (realPlayerChoice === "Rock" && computerChoice === "Scissor") {
        return "You Win! Rock beats Scissor";
    } else if (realPlayerChoice === "Paper" && computerChoice === "Scissor") {
        return "You Lose! Scicssor beats Paper";
    } else if (realPlayerChoice === "Paper" && computerChoice === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (realPlayerChoice === "Scissor" && computerChoice === "Rock") {
        return "You Lose! Rock beats Scissor";
    } else if (realPlayerChoice === "Scissor" && computerChoice === "Paper") {
        return "You Win! Scissor beats Paper";
    } else if (realPlayerChoice === computerChoice) {
        return "It's a Tie! No one wins";
    } else {
        return "Something went wrong";
    };
};

let rounds = 0;

function game() {
    for (let i = 0; i <= 4; i++) {
        round++;
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
};

game();