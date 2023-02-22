
let playerChoice = prompt("Please choose rock, paper, or scissors: ").toLowerCase();
console.log(playerChoice);
if (playerChoice === ("rock" || "paper" || "scissors")) {
    console.log(playerChoice);
    console.log("Congrats, you followed directions.")
    } else {
    youFuckedUp();
    console.log("Congrats, you finally did it.");
    }

function youFuckedUp() {
    let fuckedUpState = 1;
    while (fuckedUpState === 1) {
        let playerChoice = prompt("Please choose rock, paper, or scissors...or else: ").toLowerCase();
        switch (playerChoice) {
            case "rock":
                fuckedUpState = 0;
                break;
            case "paper":
                fuckedUpState = 0;
                break;
            case "scissors":
                fuckedUpState = 0;
                break;
        }
    }
    return playerChoice;
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
