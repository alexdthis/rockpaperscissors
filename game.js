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