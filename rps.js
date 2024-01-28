function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock!");
        return 1;
    } else if (computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors!");
        return -1;
    }

    if (playerChoice == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper!");
        return 1;
    } else if (computerSelection == "rock") {
        console.log("You win! Paper beats Rock!");
        return -1;
    }

    // We already know that the player choice is scissors (assuming they played by the rules)
    // If this was a real life app I would first validate their choices.
    if (computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors!");
        return 1;
    } else if (computerSelection == "paper") {
        console.log("You win! Scissors beats Paper!");
        return -1;
    }

    //replay during tie;
    console.log("It's a tie!");
    playRound(playerSelection, computerSelection);
}

function game() {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        count += playRound(prompt("Rock, papers, or scissors?", "rock"), getComputerChoice());
    }
    if (count > 2) {
        console.log("You beat the computer!");
    } else {
        console.log("You lost against the computer!");
    }
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    console.log("reached");
    button.addEventListener('click', function(e) {
        console.log(e.target);
    });
});