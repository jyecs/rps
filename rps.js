function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Could use some clean up, only test playerChoice once.
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    console.log(`${playerChoice} ${computerSelection}`);
    let displayMessage = document.querySelector("#display");
    if (playerChoice == "rock" && computerSelection == "paper") {
        displayMessage.innerHTML = "You Lose! Paper beats Rock!";
        return 1;
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        displayMessage.innerHTML = "You win! Rock beats Scissors!";
        return -1;
    }

    if (playerChoice == "paper" && computerSelection == "scissors") {
        displayMessage.innerHTML = "You Lose! Scissors beats Paper!";
        return 1;
    } else if (playerChoice == "paper" && computerSelection == "rock") {
        displayMessage.innerHTML = "You win! Paper beats Rock!";
        return -1;
    }

    if (playerChoice == "scissors" && computerSelection == "rock") {
        displayMessage.innerHTML = "You Lose! Rock beats Scissors!";
        return 1;
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        displayMessage.innerHTML = "You win! Scissors beats Paper!";
        return -1;
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