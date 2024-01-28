function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Could use some clean up, only test playerChoice once.
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let displayMessage = document.querySelector("#display");
    let computerScore = document.querySelector("#computer-score");
    let playerScore = document.querySelector("#player-score");

    if (playerChoice == "rock" && computerSelection == "paper") {
        displayMessage.innerHTML = "You Lose! Paper beats Rock!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
        return;

    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        displayMessage.innerHTML = "You win! Rock beats Scissors!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
        return;
    }

    if (playerChoice == "paper" && computerSelection == "scissors") {
        displayMessage.innerHTML = "You Lose! Scissors beats Paper!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
        return;

    } else if (playerChoice == "paper" && computerSelection == "rock") {
        displayMessage.innerHTML = "You win! Paper beats Rock!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
        return;
    }

    if (playerChoice == "scissors" && computerSelection == "rock") {
        displayMessage.innerHTML = "You Lose! Rock beats Scissors!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
        return;

    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        displayMessage.innerHTML = "You win! Scissors beats Paper!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
        return;
    }

    displayMessage.innerHTML = "It was a tie!";
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    console.log("reached");
    button.addEventListener('click', (e) => {
        playRound(e.target.innerHTML, getComputerChoice());
    });
});