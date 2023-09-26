function getComputerChoice() {
    let options = ["Rock",
        "Paper",
        "Scissor"
    ];
    let randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
};

function getPlayerChoice() {
    const playerRock = document.querySelector('#playerRock');
    playerRock.addEventListener('click', function(e) {
        return 'Rock'
    });
    return playerRock
}

let choices = [getComputerChoice(), getPlayerChoice()]

const botRock = document.querySelector('#botRock');
const botPaper = document.querySelector('#botPaper');
const botScissor = document.querySelector('#botScissor');

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        return "You Lose! Paper Beats Rock";
    } else if (playerChoice === "Rock" && computerChoice === "Scissor") {
        return "You Win! Rock beats Scissor";
    } else if (playerChoice === "Paper" && computerChoice === "Scissor") {
        return "You Lose! Scicssor beats Paper";
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerChoice === "Scissor" && computerChoice === "Rock") {
        return "You Lose! Rock beats Scissor";
    } else if (playerChoice === "Scissor" && computerChoice === "Paper") {
        return "You Win! Scissor beats Paper";
    } else if (playerChoice === computerChoice) {
        return "It's a Tie! No one wins";
    } else {
        return "Something went wrong";
    };
};

console.log(getPlayerChoice())
    /*let rounds = 0;

    function game() {
        for (let i = 0; i <= 4; i++) {
            round++;
            console.log(playRound(getPlayerChoice(), getComputerChoice()));
        }
    };*/