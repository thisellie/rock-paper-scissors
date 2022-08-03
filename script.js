let computerScore = 0
let playerScore = 0

// will randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() { 
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === choices[0].toLowerCase()) {
        if (computerSelection.toLowerCase() === choices[1].toLowerCase()) { 
            computerScore++
            return 'You Lose! Paper beats Rock'
        } else if (computerSelection.toLowerCase() === choices[2].toLowerCase()) {
            playerScore++
            return 'You Win! Rock beat Scissors'
        } else {
            return 'Draw! Both played ' + playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) 
        }
    } else if (playerSelection.toLowerCase() === choices[1].toLowerCase()) {
        if (computerSelection.toLowerCase() === choices[0].toLowerCase()) {
            playerScore++
            return 'You Win! Paper beats Rock'
        } else if (computerSelection.toLowerCase() === choices[2].toLowerCase()){
            computerScore++
            return 'You Lose! Scissors beats Paper'
        } else {
            return 'Draw! Both played ' + playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1)  
        }
    } else if (playerSelection.toLowerCase() === choices[2].toLowerCase()) {
        if (computerSelection.toLowerCase() === choices[0].toLowerCase()) {
            computerScore++
            return 'You Lose! Rock beat Scissors'
        } else if (computerSelection.toLowerCase() === choices[1].toLowerCase()) {
            playerScore++
            return 'You Win! Scissors beats Rock!'
        } else {
            return 'Draw! Both played ' + playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1) 
        }
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt('Rock, Paper, or Scissors'), getComputerChoice()) + '\nPlayer: ' + playerScore + ' Computer: ' + computerScore)
    }

    if (playerScore > computerScore) {
        console.log('You Win!')
    } else if (playerScore === computerScore) {
        console.log('Draw!')
    } else {
        console.log('Game Over')
    }
}

game()