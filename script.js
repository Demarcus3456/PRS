"use strict";

function getComputerChoice() {
    const chocie = Math.floor(Math.random() * 3) - 1;

    if (chocie === 0) {
        console.log('paper')
    } else if (chocie === 1) {
        console.log('rock')
    } else {
        console.log('scissors')
    }
};

function startGame(player, computer) {
    if (player === 0 || computer === 1) {
        console.log('You win, paper beats rock')
    } else if (player === 1 || computer === 0) {
        console.log("You lose, paper beats rock")
    } else if (player === 1 || computer === 2) {
        console.log('You win, rock beats scissors')
    } else if (player === 2 || computer === 1) {
        console.log("you lose, rock beats scissors")
    } else if (player === 2 || computer === 0) {
        console.log('You win, scissors beats paper')
    } else if (player === 0 || computer === 2) {
        console.log("You lose, scissors beats paper")
    } else {
        console.log('Its a draw!');
    }
};

function game() {
    for (let i = 1; i < 6; i++) {
        startGame();
    }
};

game();