
let playerScore = 0;
let computerScore = 0;
const computerP = document.querySelector("#computer-score");
const playerp = document.querySelector("#player-score");
const div = document.querySelector(".result");

function playGame(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "rock" ){
        
        addResultText("Draw! both picked Rock");
    }

    else if(playerSelection === "rock" && computerSelection === "paper"){
        
        computerScore++;
        addPoints(computerP,computerScore); 
        addResultText("You lose! Paper beats Rock");
    }

    else if(playerSelection === "rock" && computerSelection === "sciccors"){
        
        playerScore++;
        addPoints(playerp,playerScore);
        addResultText("You won! Rock beats sciccors");
    }

    else if(playerSelection === "sciccors" && computerSelection === "paper"){
        
        playerScore++;
        addResultText("You won! Sciccors beats Paper");
    }

    else if(playerSelection === "sciccors" && computerSelection === "rock"){
        
        computerScore++;
        addPoints(computerP,computerScore);
        addResultText("You Lose! Rock beats sciccors");
    }

    else if(playerSelection === "sciccors" && computerSelection ==="sciccors"){
        addResultText("Draw, both picked sciccors");
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        
        playerScore++;
        addPoints(playerp,playerScore);
        addResultText("You won! Paper beats Rock");
    }

    else if(playerSelection === "paper" && computerSelection === "sciccors"){
        
        computerScore++;
        addPoints(computerP,computerScore);
        addResultText("You lost! Sciccors beats Paper");
    }

    else if(playerSelection === "paper" && computerSelection === "paper"){
        addResultText("Draw! both picked Paper");
    }

}


function addPoints(winner,currentScore){

    let tempText = document.createTextNode(currentScore);
    winner.innerHTML = currentScore;
    
    if(computerScore === 5){
        announceWinner("Computer");
        return;
    }

    else if(playerScore === 5){
        announceWinner("Player");
        return;
    }
    

}


function addResultText(text){ //Adding text to result div
    const result = document.createElement("p");
    const resultText = document.createTextNode(text);
    result.appendChild(resultText);
    div.appendChild(result);

}

function removeText(){

   if(document.querySelectorAll(".result> p").length === 2){
    document.querySelectorAll(".result > p")[0].remove();
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


function announceWinner(winner){
    const winnerH1 = document.createElement("h1");
    const winnerText = document.createTextNode(winner +" is the winner!");

    winnerH1.appendChild(winnerText);

    winnerH1.style ="color:green";

    div.appendChild(winnerH1);

}


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

       

        playGame(button.id,getComputerChoise());
        removeText();
        
    });
});


