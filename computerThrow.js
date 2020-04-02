//Generate a random throw for the computer
export function computerThrow(computerNumber) {
    if (computerNumber === 1) {
        return 'rock';
    } 
    if (computerNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
//Initilize state
let wins = 0;
let losses = 0;
let draws = 0;

//Check winner, update wins, losses, draws

export function checkResult(hand, computerHand) {
    if (computerHand === hand) {
        return 'Draw!', draws++;
    } 
    if (computerHand === 'rock' && hand === 'paper') {
        return 'Paper covers Rock- You win!', wins++;
    }
    if (computerHand === 'rock' && hand === 'scissors') {
        return 'Rock crushes Scissors- You lose!', losses++;
    }
    if (computerHand === 'paper' && hand === 'scissors') {
        return 'Scissors cuts Paper- You win!', wins++;
    }
    if (computerHand === 'paper' && hand === 'rock') {
        return 'Paper covers Rock- You lose!', losses++;
    }
    if (computerHand === 'scissors' && hand === 'paper') {
        return 'Scissors cuts paper- You lose!', losses++;
    }
    if (computerHand === 'scissors' && hand === 'rock') {
        return 'Rock crushes Scissors- You win', wins++;
    }
}