const ITEMS = ["rock", "paper", "scissors"];

function computerPlay() { 
    let selection = 0;
    let index = Math.floor(Math.random()*3);
    selection = ITEMS[index];
    return selection;
}

// player choice and evaluation against computer choice
function playRound(playerSelection = "", computerSelection = computerPlay()) {
    const PbR = "Paper beats Rock!";
    const SbP = "Scissors beat Paper!";
    const RbS = "Rock beats Scissors!";
    let result = "";

    // validate player input
    let inputValid = false;
    while (inputValid === false) {
        playerSelection = prompt("Enter 'rock', 'paper' or 'scissors'");    
        playerSelection = playerSelection.toLowerCase();
        if (ITEMS.includes(playerSelection)) {
            inputValid = true;
            break;
        }
        else {
            console.log("no valid input: playerInput = '"+playerSelection+"' asking again...");       
        }
    }
    
    // evaluate selections and return results
    if (playerSelection == computerSelection) {
        result = "Draw! Both have chosen the same item ("+playerSelection+")."; 
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        result = "You lose! "+PbR;
    }    
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        result = "You lose! "+SbP;
    }        
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        result = "You lose! "+RbS;   
    }        
    else if ((computerSelection == "rock") && (playerSelection == "paper")) {
        result = "Computer loses! "+PbR;
    }    
    else if ((computerSelection == "paper") && (playerSelection == "scissors")) {
        result = "Computer loses! "+SbP;
    }
    else if ((computerSelection == "scissors") && (playerSelection == "rock")) {
        result = "Computer loses! "+RbS; 
    }
    // Should not happen...
    else {
        console.log("ERROR! - CompSel: "+computerSelection+" and playSel: "+playerSelection);
    }
    console.log(result);
    return result;
}

function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (round = 1; round <= 5; round++) {
        let result = playRound();
        // make the round not count if it is a draw
        if (result[0] == "D") {            
            round--;        
        }
        else {
            // "You lose" -> score +1 for computer
            if (result[0] == "Y") {
                computerScore++;
            }
            // "Computer loses" -> score +1 for player
            else {
                playerScore++;
            }
        }
    }
    let resstrg = "Final result: Player: "+playerScore+" and computer: "+computerScore;
    if (playerScore > computerScore) {
        resstrg = "Player wins Game - "+resstrg;
    }
    else {
        resstrg = "Computer wins Game - "+resstrg;
     }
    console.log(resstrg);
}

game()
