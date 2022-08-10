const choices = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() { 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === choices[0]) {
        if (computerSelection === choices[1]) { 
            computerScore++;
            return 'You Lose! Paper beats Rock';
        } else if (computerSelection === choices[2]) {
            playerScore++;
            return 'You Win! Rock beat Scissors';
        } else {
            return `Draw! Both played ${playerSelection}`;
        }
    } else if (playerSelection === choices[1]) {
        if (computerSelection === choices[0]) {
            playerScore++;
            return 'You Win! Paper beats Rock';
        } else if (computerSelection === choices[2]){
            computerScore++;
            return 'You Lose! Scissors beats Paper';
        } else {
            return `Draw! Both played ${playerSelection}`;
        }
    } else if (playerSelection === choices[2]) {
        if (computerSelection === choices[0]) {
            computerScore++;
            return 'You Lose! Rock beat Scissors';
        } else if (computerSelection === choices[1]) {
            playerScore++;
            return 'You Win! Scissors beats Rock!';
        } else {
            return `Draw! Both played ${playerSelection}`;
        }
    } 
}

const score = document.querySelector('#score');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = choices[+button.id];
        const result = document.querySelector('#result');
        result.textContent = playRound(playerSelection, getComputerChoice());
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

        if (playerScore == 5) {
            result.textContent = 'You win the game!';
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            result.textContent = 'Game over!';
            playerScore = 0;
            computerScore = 0;
        }
    });
});

console.log('Hello World!');