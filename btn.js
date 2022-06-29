"use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const buttons = document.querySelectorAll("button");
const PbR = "Paper beats Rock!";
const SbP = "Scissors beat Paper!";
const RbS = "Rock beats Scissors!";
let pressed = "";

for (const btn of buttons) {
    btn.addEventListener("click", function(e) {
        pressed = myFunction(e);
    });
}

function myFunction(e) {
    if (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors") {
        pressed = e.target.id;        
        console.log("You chose: "+pressed);
        let choice = compSel();
        let res = evalChoice(pressed, choice);
        console.log(res);
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
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        roundMsg = "You lose! "+PbR;
    }    
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        roundMsg = "You lose! "+SbP;
    }        
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        roundMsg = "You lose! "+RbS;   
    }        
    else if ((computerSelection == "rock") && (playerSelection == "paper")) {
        roundMsg = "Computer loses! "+PbR;
    }    
    else if ((computerSelection == "paper") && (playerSelection == "scissors")) {
        roundMsg = "Computer loses! "+SbP;
    }
    else if ((computerSelection == "scissors") && (playerSelection == "rock")) {
        roundMsg = "Computer loses! "+RbS; 
    }
    // Should not happen...
    else {
        console.log("ERROR! - compSel: "+computerSelection+" and playSel: "+playerSelection);
    }
    return roundMsg;  
}
