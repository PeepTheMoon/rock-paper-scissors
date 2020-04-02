import { computerThrow } from './computerThrow.js';
import { playerSelection } from './computerThrow.js';

//Get DOM elements
const playButton = document.getElementById('play-button');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawsSpan = document.getElementById('draws');
const computerNumber = Math.ceil(Math.random() * 3);
const computerThrowSection = document.getElementById('computer');
const result = document.getElementById('result');

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
    const result = ()
});

//Display result of game

//Update wins, losses, draws

//STRETCH to add event listner to restart game