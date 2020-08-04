//Generate a random throw for the computer
export function getRandomThrow(computerNumber) {
    if (computerNumber === 1) {
        return 'rock';
    } 
    if (computerNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Check winner, update wins, losses, draws

export function checkResult(computerHand, hand) {
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
    else if (computerHand === 'scissors' && hand === 'rock') {
        return 'Rock crushes Scissors- You win!';
    }
}

// export function gameResult(computerHand, hand) {
//     if (computerHand === hand) {
//         draws++;
//     } 
//     if (computerHand === 'rock' && hand === 'paper') {
//         wins++;
//     }
//     if (computerHand === 'rock' && hand === 'scissors') {
//         losses++;
//     }
//     if (computerHand === 'paper' && hand === 'scissors') {
//         wins++;
//     }
//     if (computerHand === 'paper' && hand === 'rock') {
//         losses++;
//     }
//     if (computerHand === 'scissors' && hand === 'paper') {
//         losses++;
//     }
//     else if (computerHand === 'scissors' && hand === 'rock') {
//         wins++;
//     }
// }