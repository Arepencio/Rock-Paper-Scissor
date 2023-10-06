function getComputerChoice() {
    let options = ["Rock",
        "Paper",
        "Scissor"
    ];
    let randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
};

const board = document.querySelector('.board');
const playerScore = document.querySelector('.playerScore');
const botScore = document.querySelector('.botScore');
const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissor = document.querySelector('#scissor');

let choices = [];
let playerCount = 0;
let botCount = 0;
playerScore.textContent = playerCount;
botScore.textContent = botCount;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        botCount++
    } else if (playerChoice === "Rock" && computerChoice === "Scissor") {
        playerCount++
    } else if (playerChoice === "Paper" && computerChoice === "Scissor") {
        botCount++
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerCount++
    } else if (playerChoice === "Scissor" && computerChoice === "Rock") {
        botCount++
    } else if (playerChoice === "Scissor" && computerChoice === "Paper") {
        playerCount++
    } else {
        console.log("Something went wrong");
    };
};

playerRock.addEventListener('click', () => {
    choices = ["Rock", getComputerChoice()];
    playRound(choices[0], choices[1])
});
playerPaper.addEventListener('click', () => {
    choices = ["Paper", getComputerChoice()];
    playRound(choices[0], choices[1])
});
playerScissor.addEventListener('click', () => {
    choices = ["Scissor", getComputerChoice()];
    playRound(choices[0], choices[1])
});

/*let rounds = 0;

function game() {
    for (let i = 0; i <= 4; i++) {
        round++;
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
};*/