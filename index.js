'use strict';
let gamePattern = [];
let buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    let randomChosenColor = buttonColors[randomNumber];
    // console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
}


