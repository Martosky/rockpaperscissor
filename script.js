const resetBtn = document.getElementById("reset-btn");
const resultMsg = document.getElementById("result-msg");
const winnerMsg = document.getElementById("winner-msg");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const options = ["rock", "paper", "scissor"];

const rendomCOmputerChoice = () => {
    const ramdomNum = Math.floor(Math.random()* options.length)
    return options[ramdomNum];
 }
