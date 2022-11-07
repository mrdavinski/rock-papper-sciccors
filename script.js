
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "rock" ){
        return "Draw! both picked Rock";
    }

    else if(playerSelection === "rock" && computerSelection === "paper"){
        
        computerScore++;
        return "You lose! Paper beats Rock";
    }

    else if(playerSelection === "rock" && computerSelection === "sciccors"){
        
        playerScore++;
        return "You won! Rock beats sciccors";
    }

    else if(playerSelection === "sciccors" && computerSelection === "paper"){
        
        playerScore++;
        return "You won! Sciccors beats Paper";
    }

    else if(playerSelection === "sciccors" && computerSelection === "rock"){
        
        computerScore++;
        return "You Lose! Rock beats sciccors";
    }

    else if(playerSelection === "sciccors" && computerSelection ==="sciccors"){
        return "Draw, both picked sciccors";
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        
        playerScore++;
        return "You won! Paper beats Rock";
    }

    else if(playerSelection === "paper" && computerSelection === "sciccors"){
        
        computerScore++;
        return "You lost! Sciccors beats Paper";
    }

    else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Draw! both picked Paper";
    }

}


function getComputerChoise()
{
    let choise = Math.floor(Math.random() * 3);

    switch(choise){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "sciccors";
            break;
        default:
            return "Something went wrong";
            break;
    }
    
}



function game(){

    

    for(let i = 0; i<5;i++){
        let playerChoise = prompt("Choise rock paper or scciccors");
        let computerChoise = getComputerChoise();

        console.log(playRound(playerChoise,computerChoise));

    }


    if(playerScore > computerScore){
        let scoreDiff = playerScore - computerScore;
        console.log(`You win with ${scoreDiff} points`);

    }

    else if(playerScore){
        let scoreDiff = computerScore - playerScore;
        
        console.log(`You lost with ${scoreDiff} points`);
    }

    else{
        console.log(computerScore + " " + playerScore );
        console.log("Draw in total");
    }

    playerScore = 0;
    computerScore = 0;
}
