
let roundNum = 0;
let yourScore = 0;
let compScore = 0;
let playState = "y";
let playerChoice = " ";
let compChoice = " ";
let gameOver = 0;
/*let roundProgresser = 0;*/



while (playState === "y") {
    while (gameOver != 1) {
        playerChoice = String(prompt("Please choose rock, paper, or scissors: ").toLowerCase());
        /*console.log(playerChoice);*/
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"/*&& (roundProgresser === 0) */) {
            console.log(playerChoice);
            console.log("You chose: " + playerChoice);
        } else {
            /*roundProgresser = 1; *//*This will set the flag to 1 and prevent the game from asking you for another choice after you come back from youFuckedUp() */
            playerChoice = String(youFuckedUp());
            console.log("You chose: " + playerChoice);
        }
        compChoice = computerChoice();    
        switch (playerChoice) {
            case "rock":
                youChoseRock(compChoice);
                break;
            case "paper":
                youChosePaper(compChoice);
                break;
            case "scissors":
                youChoseScissors(compChoice);
                break;
        }
        if (yourScore === 6) {
            gameOver = 1;
        } else if (compScore === 6) {
            gameOver = 1;
        }
    }

    if (yourScore > compScore) {
        console.log("You won with a score of " + yourScore + "-" + compScore);
    } else {
        console.log("You lost with a score of " + yourScore + "-" + compScore);
    }

    playState = String(prompt("Would you like to play again? Type y to play again or any other letter to quit").toLowerCase()); 
    
    if (playState === 'y') {
        gameOver = 0;
        yourScore = 0;
        compScore = 0;
        roundNum = 0;
    } 
}

function youChoseRock(computerChoice) {
    switch (computerChoice) {
        case "scissors":
            yourScore += 1;
            console.log("You won round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
        case "rock":
            console.log("You're both drawed for round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
        case "paper":
            compScore += 1;
            console.log("You lost round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
    }
}

function youChosePaper(computerChoice) {
    switch (computerChoice) {
        case "rock":
            yourScore += 1;
            console.log("You won round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
        case "paper":
            console.log("You're both drawed for round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
        case "scissors":
            compScore += 1;
            console.log("You lost round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
    }
}

function youChoseScissors(computerChoice) {
    switch (computerChoice) {
        case "paper":
            yourScore += 1;
            console.log("You won round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
        case "scissors":
            console.log("You're both drawed for round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
        case "rock":
            compScore += 1;
            console.log("You lost round " + roundNum + ", the score is " + yourScore + "-" + compScore + "(You-Opponent)");
            roundNum += 1;
            break;
    }
}

function youFuckedUp() {
    let fuckedUpState = 1;
    let newPlayerChoice = " ";
    while (fuckedUpState === 1) {
        newPlayerChoice = String(prompt("Please choose rock, paper, or scissors...or else: ").toLowerCase());
        switch (newPlayerChoice) {
            case "rock":
                fuckedUpState = 0;
                break;
            case "paper":
                fuckedUpState = 0;
                break;
            case "scissors":
                fuckedUpState = 0;
                break;
            default:
                console.log("Choose one of the three options");
                break;
        }
    }
    return newPlayerChoice;
}
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    compAnswer = computerRNG(randomNumber);
    return compAnswer;
}

function computerRNG(randomNumber) {
    let compChoice = 'placeholder';
    if ((randomNumber >=0) && (randomNumber <=32)) {
        compChoice = 'rock';
    } else if ((randomNumber >= 33) && (randomNumber <= 65)) {
        compChoice = 'paper';
    } else if ((randomNumber >= 66) && (randomNumber <= 99)) {
        compChoice = 'scissors';
    }
    return compChoice;
}
