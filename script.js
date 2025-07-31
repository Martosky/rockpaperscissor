const resetBtn = document.getElementById("reset-btn");
const resultMsg = document.getElementById("result-msg");
const winnerMsg = document.getElementById("winner-msg");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const options = ["rock", "paper", "scissor"];

const playerScore = 0;
const computerScore = 0;

const rendomCOmputerChoice = () => {
    const ramdomNum = Math.floor(Math.random()* options.length)
    return options[ramdomNum];
 }

const gameRules = (player, computer) => {
    return (player === "rock" && computer === "scissor") ||
           (player === "scissors" && computer === "paper") ||
           (player === "paper" && computer === "rock");
}

 const playGame = (playerChoice) => {
    const computerChoice = rendomCOmputerChoice();
    if (gameRules(playerChoice, computerChoice)){
        playerScore += 1;
        return `You win. ${playerChoice} beats ${computerChoice}`
    }
    else if (playerChoice === computerChoice) {
        return `It's a tie. You both chose ${playerChoice}`;
    } else {
        computerScore += 1;
        return `You lose. ${computerChoice} beats ${playerChoice}`;
    }
 }

 const gameResult = () => {
    if(playerScore === 3){
      resultMsg.innerText = playGame()
      playerScoreSpan.innerText = playerScore;
      computerScoreSpan.innerText = computerScore;
    }
 }