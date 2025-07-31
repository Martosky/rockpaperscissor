const resetBtn = document.getElementById("reset-btn");
const resultMsg = document.getElementById("result-msg");
const winnerMsg = document.getElementById("winner-msg");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const optionsContainer = document.getElementById("options-container");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");


const playerScore = 0;
const computerScore = 0;

const rendomComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ramdomNum = Math.floor(Math.random()* options.length)
    return options[ramdomNum];
 }

const gameRules = (player, computer) => {
    return (player === "rock" && computer === "scissor") ||
           (player === "scissors" && computer === "paper") ||
           (player === "paper" && computer === "rock");
}

 const playGame = (playerChoice) => {
    const computerChoice = rendomComputerChoice();
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

 const gameResult = (userOption) => {
    resultMsg.innerText = playGame(userOption)
      playerScoreSpan.innerText = playerScore;
      computerScoreSpan.innerText = computerScore;

    if(playerScore === 3 || computerScore === 3) {
      winnerMsg.innerText = `${playerScore === 3 ? "Player" : "Computer!"} has won the game!`;
      optionsContainer.style.display = 'none';
      resetBtn.style.display = "block";
    }
 }

 resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    resultMsg.innerText = "";
    winnerMsg.innerText = "";
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;
    optionsContainer.style.display = 'block';
    resetBtn.style.display = "none";
 });

 rockBtn.addEventListener("click", () => gameResult("rock"));
 paperBtn.addEventListener("click", () => gameResult("paper"));
 scissorBtn.addEventListener("click", () => gameResult("scissor"));