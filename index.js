'use strict';
let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ['red', 'blue', 'green', 'yellow'];

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
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    let randomChosenColor = buttonColors[randomNumber];
    // console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    console.log($(`#${randomChosenColor}`)[0].id);

    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}

$('.btn').on('click', (e) => {
    let userChosenColor = e.target.id;
    console.log(this);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    animatePress(userChosenColor);
    playSound(userChosenColor);
});


