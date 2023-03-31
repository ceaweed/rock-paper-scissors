/* Going to set some global variables for UI stuff */
const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const playerScoreParaTag = document.getElementById('playerScore');
const computerScoreParaTag = document.getElementById('computerScore');
const resultOfRoundParaTag = document.getElementById('resultOfRound');
const resultOfMatchParaTag = document.getElementById('resultOfMatch');
const restartButton = document.getElementById('restart');

buttonRock.addEventListener('click', () => handleClick('rock'));
buttonPaper.addEventListener('click', () => handleClick('paper'));
buttonScissors.addEventListener('click', () => handleClick('scissors'));
restartButton.addEventListener('click', () => restartMatch());

let computerScore = 0;
let playerScore = 0;

function handleClick(playerSelection) {

    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);
    resultOfRoundParaTag.textContent = `Round Result: ${roundResult}`;
        if (roundResult.includes("Tie")) {

        } else if (roundResult.includes("Lose")) {
            computerScore++;
            playerScoreParaTag.textContent = `Player: ${playerScore}`;
            computerScoreParaTag.textContent = `Computer: ${computerScore}`;
        } else {
            playerScore++;
            playerScoreParaTag.textContent = `Player: ${playerScore}`;
            computerScoreParaTag.textContent = `Computer: ${computerScore}`;        
        }
        
        if (computerScore == 5) {
            resultOfMatchParaTag.textContent = "COMPUTER WINS!";
            restartMatch();
        } else if (playerScore == 5){
            resultOfMatchParaTag.textContent = "PLAYER WINS!";
            restartMatch();
        }
}

    

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

function restartMatch() {
    playerScore = 0;
    computerScore = 0;
    playerScoreParaTag.textContent = "Player: 0";
    computerScoreParaTag.textContent = "Computer: 0";
    resultOfMatchParaTag.textContent = "";
    resultOfRoundParaTag.textContent = "";
}

/* Function to play a whole game with 5 rounds 
function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Playing 5 rounds");

    for (let i = 0; i < 5; i++) {
    /*    let playerSelection = prompt("Please enter: Rock, Paper, or Scissors");
        playerSelection.toLowerCase(); 
        console.log("Please click a button!");

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
} */
