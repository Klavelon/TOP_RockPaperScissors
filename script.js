let computerChoice;
let playerChoice;


const container = document.querySelector('#container');

const title = document.createElement('h3');
title.textContent = "Welcome to Rock Paper Scissors!";
title.classList.add('heading');

const promptPlayer = document.createElement('div');
promptPlayer.classList.add('gameText');
promptPlayer.textContent = "Please click a button below to begin playing!";

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');


const userChoices = document.createElement('div');
userChoices.classList.add('gameText');

const roundWinner = document.createElement('div');
roundWinner.classList.add('gameText');


const gameState = document.createElement('div');
gameState.classList.add('gameText');
gameState.textContent = "Player Score, Computer Score, Rounds Played here";

container.appendChild(title);
container.appendChild(promptPlayer);
container.appendChild(buttonContainer);
container.appendChild(userChoices);
container.appendChild(roundWinner);
container.appendChild(gameState);

const btnContainerChildren = document.querySelector('.buttonContainer');

const rockButton = document.createElement('button');
rockButton.classList.add('gameButton');
rockButton.textContent = "Rock";

const paperButton = document.createElement('button');
paperButton.classList.add('gameButton');
paperButton.textContent = "Paper";

const scissorsButton = document.createElement('button');
scissorsButton.classList.add('gameButton');
scissorsButton.textContent =  "Scissors";

btnContainerChildren.appendChild(rockButton);
btnContainerChildren.appendChild(paperButton);
btnContainerChildren.appendChild(scissorsButton);





function ComputerPlay(){
    const computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[Math.floor(Math.random() * 3)];
}


function playRound(pChoiceText){
    computerChoice = ComputerPlay();
    playerChoice = pChoiceText;
    
}


function versus() {

    if (playerChoice == "Rock"){
    
        if (computerChoice == "Scissors"){
                return "w";
    
        } else if (computerChoice == "Paper"){
                return "l";
    
        } else if (computerChoice == "Rock"){
                return "t";
        }
    
    } else if (playerChoice == "Paper") {
    
        if (computerChoice == "Rock") {
                return "w";
    
        } else if (computerChoice == "Paper"){
                return "t";
    
        } else if (computerChoice == "Scissors"){
                return "l";
        }
    
    } else if (playerChoice == "Scissors"){
    
        if (computerChoice == "Rock"){
                return "l";
    
        } else if (computerChoice == "Paper"){
                return "w";
    
        } else if (computerChoice == "Scissors"){
                return "t";
        }
    
    }
 }

let computerScore = 0;
let playerScore = 0;
let roundNumber = 0;

function calculateResults(result) {

    if (result === "w"){
        playerScore++;
        roundNumber++;
        return "You win this round!";
    } else if (result === "l"){
        computerScore++;
        roundNumber++;
        return "Computer wins this round!";
    }
    else if (result === "t"){
        roundNumber++;
        return "This round is a DRAW!";
    }
}




const buttons = document.querySelectorAll('.gameButton');

buttons.forEach((button) => {
    button.addEventListener('click', function (e)  {
        playRound(button.textContent);
        userChoices.textContent = `Your: ${playerChoice} VS The Computer's ${computerChoice}`
        let roundText = calculateResults(versus());
        roundWinner.textContent = roundText;
        gameState.textContent = `Your Score: ${playerScore} VS Computer Score: ${computerScore} - Round Number: ${roundNumber}`;

    })
})

window.addEventListener('click', () => {
        if (computerScore >= 5){
            gameState.textContent = "COMPUTER WINS THE GAME";
            promptPlayer.textContent = "";
            userChoices.textContent = "";
            roundWinner.textContent = "";
            container.removeChild(buttonContainer );

        } else if (playerScore >= 5){
            gameState.textContent = "PLAYER WINS THE GAME";
            promptPlayer.textContent = "";
            userChoices.textContent = "";
            roundWinner.textContent = "";
            container.removeChild(buttonContainer);

        }

})

