function getComputerChoice() {
    let choices = ["Piedra",
        "Papel",
        "Tijera"
    ];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function realGame(computerChoices) {
    let getPlayerChoices = prompt("Rock, Paper or Scissor?");
    let playerChoice = getPlayerChoices.toLowerCase();
    let firstLetter = getPlayerChoices.charAt(0);
    let realPlayerChoice = firstLetter.toUpperCase() + playerChoice.slice(1);
    switch (true) {
        case realPlayerChoice === "Rock" && computerChoices === "Paper":
            console.log("You Lose! Paper Beats Rock");
            break;
        case realPlayerChoice === "Rock" && computerChoices === "Scissor":
            console.log("You Win! Rock beats Scissor");
            break;
        case realPlayerChoice === "Paper" && computerChoices === "Scissor":
            console.log("You Lose! Scicssor beats Paper");
            break;
        case realPlayerChoice === "Paper" && computerChoices === "Rock":
            console.log("You Win! Paper beats Rock");
            break;
        case realPlayerChoice === "Scissor" && computerChoices === "Rock":
            console.log("You Lose! Rock beats Scissor");
            break;
        case realPlayerChoice === "Scissor" && computerChoices === "Paper":
            console.log("You Win! Scissor beats Paper");
            break;
        case realPlayerChoice === computerChoices:
            console.log("It's a Tie! No one wins")
            break;
    }
}

realGame(getComputerChoice())