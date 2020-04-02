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


export function playerSelection(hand, computerHand) {
    if (computerHand === hand) {
        return 'Draw!';
    } 
    if (computerHand === 'rock' && hand === 'paper') {
        return 'Paper covers Rock- You win!';
    } 
    if (computerHand === 'rock' && hand === 'scissors') {
        return 'Rock crushes Scissors- You lose!';
    }
    if (computerHand === 'paper' && hand === 'scissors') {
        return 'Scissors cuts Paper- You win!';
    }
    if (computerHand === 'paper' && hand === 'rock') {
        return 'Paper covers Rock- You lose!';
    }
    if (computerHand === 'scissors' && hand === 'paper') {
        return 'Scissors cuts paper- You lose!';
    }
    if (computerHand === 'scissors' && hand === 'rock') {
        return 'Rock crushes Scissors- You win';
    }
}