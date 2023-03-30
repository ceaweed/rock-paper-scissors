/* Function that gets a random choice from the computer */
function getComputerChoice() {
    let randomMin = Math.ceil(1);
    let randomMax = Math.floor(3);
    let compChoice = Math.floor(Math.random() * (randomMax - randomMin + 1) + randomMin);
    let rockPaperOrScissor = "";

    switch (compChoice) {
        case 1:
            rockPaperOrScissor = "rock";
            break;
        case 2:
            rockPaperOrScissor = "paper";
            break;
        case 3:
            rockPaperOrScissor = "scissors";
            break;
    }
    return rockPaperOrScissor;
}

/* Function to play a round against computer */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie game!";
    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
               (playerSelection == "paper" && computerSelection == "scissors") ||
               (playerSelection == "scissors" && computerSelection == "rock")) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

/* Function to play a whole game with 5 rounds */
function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Playing 5 rounds");

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter: Rock, Paper, or Scissors");
        playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("Tie")) {
            console.log("Nobody gained a point!");
        } else if (roundResult.includes("Lose")) {
            computerScore++;
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else {
            playerScore++;
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);        
        }
    }

    if (playerScore == computerScore) {
        console.log("You Tied! Nobody wins");
    } else if (playerScore > computerScore) {
        console.log("You won! Congrats");
    } else {
        console.log("You lost! LOL");
    }
}

game();


