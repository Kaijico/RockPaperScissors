let HumanScore = 0
let ComputerScore = 0

/* This function generates a random choice for the computer */
function getComputerChoice(Computergen = 1) {
    Computergen = Math.random(Computergen)
        if (Computergen <0.33) {
            String(Computergen)
            Computergen = "rock"
            return(Computergen)
    }
        if (Computergen >0.66) {
            String(Computergen)
            Computergen = "paper"
            return(Computergen)
    }
        if (Computergen >=0.33 && Computergen <=0.66) {
            String(Computergen)
            Computergen = "scissors"
            return(Computergen)
    }
}

/* This Function asks the player for their Choice*/
function getHumanChoice (Humanask = " ") {
    Humanask = prompt("Rock Paper or Scissors", " ")
    Humanask = Humanask.toLowerCase()
    return(Humanask)
}

/* This Function plays a round based of the game */
function playRound (HumanChoice, ComputerChoice) {
    if (HumanChoice === "scissors") {
        switch (ComputerChoice) {
            case "rock":
                console.log("You lose! Scissors beats rock!");
                ComputerScore = ComputerScore + 1;
                break;
            case "scissors":
                console.log("It's a Draw!");
                break;
            case "paper":
                console.log("You Win! Scissors beats paper!")
                HumanScore = HumanScore + 1;
                break;
        }
    }
    if (HumanChoice === "rock") {
        switch (ComputerChoice) {
            case "rock":
                console.log("It's a Draw!");
                break;
            case "scissors":
                console.log("You Win! Rock beats Scissors!");
                HumanScore = HumanScore + 1;
                break;
            case "paper":
                console.log("You lose! Paper beats rock!")
                ComputerScore = ComputerScore + 1;
                break;
        }
    }
    if (HumanChoice === "paper") {
        switch (ComputerChoice) {
            case "rock":
                console.log("You Win! Paper beats Rock!");
                HumanScore = HumanScore + 1;
                break;
            case "scissors":
                console.log("You lose! Scissors beats Paper!");
                ComputerScore = ComputerScore + 1;
                break;
            case "paper":
                console.log("It's a Draw!")
                break;
        }
    }
    if (HumanChoice != "paper" && HumanChoice != "rock" && HumanChoice != "scissors") {
        console.log("that was not an option")
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Human score is " + HumanScore);
    console.log("Computer score is " + ComputerScore);
    
}

playGame();
playGame();
playGame();
playGame();
playGame();


