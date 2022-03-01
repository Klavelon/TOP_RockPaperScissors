

function ComputerPlay(){
    const computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[Math.floor(Math.random() * 3)];
}

let computerChoice = ComputerPlay();
console.log(computerChoice);

let playerChoice;

playerChoice = prompt("Enter your choice of Rock, Paper or Scissors!");

playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);



console.log(playerChoice);

if (playerChoice == "Rock" && computerChoice == "Scissors"){
    console.log("You Win!")
} else if (playerChoice == "Rock" && computerChoice == "Paper"){
    console.log("You Lose!");
} else if (playerChoice == "Rock" && computerChoice == "Rock"){
    console.log("TIE!");
}
else {
    console.log("Something went dreadfully wrong");
}