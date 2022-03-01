

function ComputerPlay(){
    const computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[Math.floor(Math.random() * 3)];
}


function playRound(){

let computerChoice = ComputerPlay();
let playerChoice;
playerChoice = prompt("Enter your choice of Rock, Paper or Scissors!");
playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
console.log("Computer plays " +computerChoice);

function versus(){
    if (playerChoice == "Rock"){
    
        if (computerChoice == "Scissors"){
    
            console.log("You Win!")
            return "w";
    
        } else if (computerChoice == "Paper"){
    
            console.log("You Lose!");
            return "l";
    
        } else if (computerChoice == "Rock"){
    
            console.log("TIE!");
            return "t";
        }
    
        else {
    
            console.log("Something went dreadfully wrong");
    
        }
    
    } else if (playerChoice == "Paper") {
    
        if (computerChoice == "Rock") {
    
            console.log("You Win!");
            return "w";
    
        } else if (computerChoice == "Paper"){
    
            console.log("TIE!");
            return "t";
    
        } else if (computerChoice == "Scissors"){
    
            console.log("You Lose!");
            return "l";
        }
    
        else {
    
            console.log("Something went dreadfully wrong");
    
        }
    
    } else if (playerChoice == "Scissors"){
    
        if (computerChoice == "Rock"){
    
            console.log("You Lose!");
            return "l";
    
        } else if (computerChoice == "Paper"){
    
            console.log("You Win!");
            return "w";
    
        } else if (computerChoice == "Scissors"){
    
            console.log("TIE!");
            return "t";
    
        }
    
        else {
    
            console.log("Something went dreadfully wrong");
    
        }
    }
    }

let score = versus();

if (score === "w"){
    playerScore++;
} else if (score === "l"){
    computerScore++;
} else if (score === "t"){

} else {console.log("What happened?"); }

console.log("Player Score = " +playerScore);
console.log("Computer Score = " +computerScore);
}

let computerScore = 0;
let playerScore = 0;

for (let i = 0; i < 5; i++) {
    playRound();
 }

 if (playerScore > computerScore){
     console.log("YOU ARE THE CHAMPION!");
 } else if (playerScore = computerScore){
     console.log("OVERALL TIE!");
 } else {
     console.log("YOU LOSE SIR. GOOD DAY.");
 }
