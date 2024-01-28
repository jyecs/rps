function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    console.log(`${playerChoice} ${computerSelection}`);
    if (playerChoice == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock!");
        return 1;
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors!");
        return -1;
    }

    if (playerChoice == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper!");
        return 1;
    } else if (playerChoice == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock!");
        return -1;
    }

    if (playerChoice == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors!");
        return 1;
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper!");
        return -1;
    }

    //replay during tie;
    console.log("It's a tie! Playing again.");
    playRound(playerSelection, getComputerChoice());
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    console.log("reached");
    button.addEventListener('click', (e) => {
        playRound(e.target.innerHTML, getComputerChoice());
    });
});