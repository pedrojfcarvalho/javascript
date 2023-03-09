function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomNumber];
}

function getPlayerChoice() {
    let choice = window.prompt("Choose between rock, paper or scissors:");
    return choice;
}

function playRound(playerChoice, computerChoice) {
    
    
    if(playerChoice.toLowerCase() == computerChoice) {
        return "Draw! You both chose " + computerChoice;
    } else if(playerChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        return "You win! " + playerChoice.toLowerCase() + " beats " + computerChoice;
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice == 'paper') {
        return "You lose! " + computerChoice + " beats " + playerChoice.toLowerCase();
    } else if(playerChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        return "You win! " + playerChoice.toLowerCase() + " beats " + computerChoice;
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice == 'scissors') {
        return "You lose! " + computerChoice + " beats " + playerChoice.toLowerCase();
    } else if(playerChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        return "You win! " + playerChoice.toLowerCase() + " beats " + computerChoice;
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice == 'rock') {
        return "You lose! " + computerChoice + " beats " + playerChoice.toLowerCase();
    }
}


console.log(playRound(getPlayerChoice(), getComputerChoice()));