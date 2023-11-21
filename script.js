let compScore = 0;
let playerScore = 0;

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()*3)
    computerChoice = arrOfChoices[randomNum]
    return computerChoice
}

const playRound = (playerSelection, computerSelection) =>{
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        return "Draw!"
    }
    else if(playerSelection == 'paper' && computerSelection == 'paper'){
        return "Draw!"
    }
    else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return "Draw!"
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        compScore++
        return "You lose! Paper wraps Rock"
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++
        return "You win! Paper wraps Rock"
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++
        return "You win! Rock beats scissors"
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        compScore++
        return "You lose! Rock beats scissors"
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        compScore++
        return "You lose! Scissors cuts paper"
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++
        return "You win! Scissors cuts paper"
    }
}



const game = () =>{
    for(i=0; i<5; i++){
        const playerSelection = prompt('choose what you want', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }
    if(playerScore>compScore){
        return 'player won'
    }
    else if(compScore>playerScore){
        return 'computer won'
    }
    else
    return 'draw'
    }

console.log(game());