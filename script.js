"use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const buttons = document.querySelectorAll("button");

const PbR = "Paper beats Rock!";
const SbP = "Scissors beat Paper!";
const RbS = "Rock beats Scissors!";
let playerSelection = "";
let cScore = 0;
let pScore = 0;
let round = 0;

for (const btn of buttons) {
    btn.addEventListener("click", function(e) {
        playerSelection = playRound(e);
    });
}



function playRound(e) {
    if (round >= 5) {       
        let winner;
        if (pScore > cScore) {
            winner = "<br><strong>Player wins the game with "+pScore+" to "+cScore+" rounds</strong>";
        }
        else {
            winner = "<br><strong>Computer wins the game with "+cScore+" to "+pScore+" rounds</strong>";        
        }
        updateHTML("score", winner);
        round = 0;
        pScore = 0;
        cScore = 0;
    }
    else {


        if (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors") {
            playerSelection = e.target.id;   
            let choice = compSel()     
            let res = evalChoice(playerSelection, choice);
            updateHTML("restext", "You chose: "+playerSelection+". <br>"+"The computer chose: "+choice+". <br><br> <strong>"+res+"</strong>", "pad");

            updateHTML("score", "Round: "+round+"<br><br>Player: "+pScore+"  -  Computer: "+cScore);
        }        
    }
}   

function compSel() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function evalChoice(playerSelection, computerSelection) {
    let roundMsg = "";
    // evaluate selections and return results
    if (playerSelection == computerSelection) {
        roundMsg = "Draw! Both have chosen the same item ("+playerSelection+")."; 
        round--;
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        roundMsg = "You lose! "+PbR;
        cScore++;
    }    
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        roundMsg = "You lose! "+SbP;
        cScore++;
    }        
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        roundMsg = "You lose! "+RbS;   
        cScore++;
    }        
    else if ((computerSelection == "rock") && (playerSelection == "paper")) {
        roundMsg = "Computer loses! "+PbR;
        pScore++;
    }    
    else if ((computerSelection == "paper") && (playerSelection == "scissors")) {
        roundMsg = "Computer loses! "+SbP;
        pScore++;
    }
    else if ((computerSelection == "scissors") && (playerSelection == "rock")) {
        roundMsg = "Computer loses! "+RbS; 
        pScore++;
    }
    // Should not happen...
    else {
        console.log("ERROR! - compSel: "+computerSelection+" and playSel: "+playerSelection);
    }
    round++;
    return roundMsg;  
}


function updateHTML(section, info, opt) {
    if (section == "restext") {
        let resParent = document.getElementById("results"); 
        let resChild = resParent.firstElementChild;
        let newText = document.createElement("div");    
        if (opt == "pad") {
            info = info+"<br>";
        }
        newText.innerHTML = "<br>"+info;  
        if (opt != "clear") {  
            resParent.replaceChild(newText, resChild);
        }
        else {
            resParent.appendChild(newText);
        }
    }
    else if (section = "score") {
        let scoreParent = document.getElementById("score"); 
        let scoreChild = scoreParent.firstElementChild;
        let newText = document.createElement("div");   
        newText.innerHTML = "<br>"+info;  
        scoreParent.replaceChild(newText, scoreChild);
    }

    
}