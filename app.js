import { computerThrow } from './computerThrow.js';
import { checkResult } from './computerThrow.js';

//Get DOM elements
const playButton = document.getElementById('play-button');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawsSpan = document.getElementById('draws');
const computerNumber = Math.ceil(Math.random() * 3);
const computerSpan = document.getElementById('computer');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset-button');

//Initilize state
let wins = 0;
let losses = 0;
let draws = 0;

//Add event listener for play button
playButton.addEventListener('click', () => {
//Go get user choice from radio button
    const radioSelection = document.querySelector('input[type=radio]:checked');
    let playerSelection = radioSelection.value;
//Generates computer's hand
    const compThrow = computerThrow(computerNumber);
//How to pick a winner in a given throw(game)
    checkResult(compThrow, playerSelection); 
    //Display result of game
    computerSpan.textContent = compThrow;
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;
});

//STRETCH to add event listner to restart game
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;

    // update view
    computerSpan.textContent = ''; 
    //winsSpan.textContent = '';
    //lossesSpan.textContent = '';
    //drawsSpan.textContent = ''; 
});
