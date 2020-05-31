'use strict';
let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let level = 0;

// reset game
function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => nextSequence(), 1000);
            userClickedPattern = [];
        }
        
    } else {
        let wrong = new Audio('./sounds/wrong.mp3');
        wrong.play();
        $('body').addClass('game-over');
        setTimeout(() => $('body').removeClass('game-over'), 200);
        $('h1').text('Game Over, Press Any Key to restart');
        startOver();
    }
}

function playSound(name) {
    switch (name) {
        case 'blue':
            let blue = new Audio('./sounds/blue.mp3');
            blue.play();
            break;
        case 'green':
            let green = new Audio('./sounds/green.mp3');
            green.play();
            break;
        case 'red':
            let red = new Audio('./sounds/red.mp3');
            red.play();
            break;
        case 'yellow':
            let yellow = new Audio('./sounds/yellow.mp3');
            yellow.play();
            break;
        default:
            console.log(randomChosenColor);
    }
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass('pressed');
    setTimeout(() => {
        $(`#${currentColor}`).removeClass('pressed');
    }, 200);
}

// generate Simon says sequence of colors, increase level
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    level++;
    $('h1').text(`Level ${level}`);
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}

// user button click
$('.btn').on('click', (e) => {
    let userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

//start new game on key down
$(document).on('keydown', () => {
    if (gamePattern.length > 0) {
        return '';
    } else {     
        $('h1').text(`Level 1`);
        setTimeout(() => nextSequence(), 1000);
    }
});


