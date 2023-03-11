function getComputerChoice() {
    let choices = ["Piedra",
        "Papel",
        "Tijera"
    ];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function realGame(computerChoices, playerChoices) {
    let getPlayerChoice = prompt("Rock, Paper or Scissor?");
    let playerChoice = getPlayerChoice.toLowerCase();
    let letra = getPlayerChoice.charAt(0);
    return letra.toUpperCase() + playerChoice.slice(1);
}