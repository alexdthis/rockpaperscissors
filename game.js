
let roundNum = 0;
let yourScore = 0;
let compScore = 0;
let playState = "y";
let playerChoice = " ";
let compChoice = " ";
/*let gameOver = 0;*/
let result = "";
/*let roundProgresser = 0;*/

/*const selectRock = document.querySelector(".rock");
const selectPaper = document.querySelector(".paper");
const selectScissors = document.querySelector(".scissors"); */
const output = document.querySelector(".output");
let you = document.querySelector(".You");
let them = document.querySelector(".Them");
let round = document.querySelector(".Round");

document.querySelector(".scissors").addEventListener("click", youChoseScissors);
document.querySelector(".paper").addEventListener("click", youChosePaper);
document.querySelector(".rock").addEventListener("click", youChoseRock);

/* Needed to test my event listeners */

/* function test(e){
    console.log(e);
} */

/* Function has been removed beacause there is currently
    no round limit implemented, this is an artifact from
    when the game used a prompt and outputted everything
    to the console */

/*        if (yourScore > compScore) {
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
*/ /*Obsolete code from when the entire game was played via
the console and the max number of rounds was 5 */

/*function outputScore(result) {
    output += "test";
    document.getElementsByClassName("output").innerHTML = "test";
    ("<p>You " + result + " this round, the score is You: " + 
    yourScore + ", Computer: " + compScore + ", it is currently round " + roundNum + "</p>");
} */

function outputScore(result) {
    let newScore = document.createElement('p');
    newScore.appendChild(document.createTextNode(`You ${result} this round, 
            the score is You: ${yourScore}, Computer: ${compScore},
            it is currently round ${roundNum}`));
    output.appendChild(newScore);

}

function youChoseRock(e) {
    let opponentChoice = computerChoice();
    switch (opponentChoice) {
        case "scissors":
            yourScore += 1;
            roundNum += 1;
            result = "won";
            outputScore(result);
            break;
        case "rock":
            roundNum += 1;
            result = "drew";
            outputScore(result);
            break;
        case "paper":
            compScore += 1;
            roundNum += 1;
            outputScore(result);
            break;
    }
}

function youChosePaper(e) {
    let opponentChoice = computerChoice();
    console.log(opponentChoice);
    switch (opponentChoice) {
        case "rock":
            yourScore += 1;
            roundNum += 1;
            result = "won";
            outputScore(result);
            break;
        case "paper":
            roundNum += 1;
            result = "drew";
            outputScore(result);
            break;
        case "scissors":
            compScore += 1;
            roundNum += 1;
            result = "lost";
            outputScore(result);
            break;
    }
}

function youChoseScissors(e) {
    let opponentChoice = computerChoice();
    switch (opponentChoice) {
        case "paper":
            yourScore += 1;
            roundNum += 1;
            result = "won";
            outputScore(result);
            break;
        case "scissors":
            roundNum += 1;
            result = "drew";
            outputScore(result);
            break;
        case "rock":
            compScore += 1;
            roundNum += 1;
            result = "lost";
            outputScore(result);
            break;
    }
}

/*function youFuckedUp() {
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

*/ /* Has been made obsolete now that three buttons have been added to simulate choosing */

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
