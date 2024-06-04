// const container = document.querySelector("#container");

// const para1 = document.createElement("p");
// para1.textContent = "Hey I'm red!"; 
// para1.style.color = "red";

// const heading3 = document.createElement("h3");
// heading3.textContent = "I'm a blue h3";
// heading3.style.color = "blue";

// const div = document.createElement("div");
// const heading1 = document.createElement("h1");
// heading1.textContent = "I'm in a div";
// const para2 = document.createElement("p");
// para2.textContent = "ME TOO"; 
// div.appendChild(heading1);
// div.appendChild(para2);

// div.style.backgroundColor = "pink";
// div.style.border = "1px solid black";

// container.appendChild(para1);
// container.appendChild(heading3);
// container.appendChild(div);

// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });


let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 1){
        return "rock";
    }else if(num == 2){
        return "paper";
    }else {
        return "scissor";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice from rock, paper, and scissor");
    return humanChoice.toLowerCase();
}

function playRound(humanSelection, computerSelection){
    if(humanSelection === computerSelection){
        console.log("its a tie");
    }

    if(humanSelection == "rock" && computerSelection == "paper"){
        console.log("You lose, paper beats rock");
        computerScore++;
    }

    if(humanSelection == "rock" && computerSelection == "scissor"){
        console.log("You win, rock beats scissor");
        humanScore++;
    }

    if(humanSelection == "paper" && computerSelection == "rock"){
        console.log("You win, paper beats rock");
        humanScore++;
    }

    if(humanSelection == "paper" && computerSelection == "scissor"){
        console.log("You lose, scissor beats paper");
        computerScore++;
    }

    if(humanSelection == "scissor" && computerSelection == "rock"){
        console.log("You lose, rock beats scissor");
        computerScore++;
    }

    if(humanSelection == "scissor" && computerSelection == "paper"){
        console.log("You win, scissor beats paper");
        humanScore++;
    }
}

function playGame(){
    for(var i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Final Human Score: " + humanScore +  ", Final Computer Score: " + computerScore);
}

playGame();