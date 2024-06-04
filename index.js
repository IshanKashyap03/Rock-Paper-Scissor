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
    if(num == 0){
        return "rock";
    }else if(num == 1){
        return "paper";
    }else {
        return "scissor";
    }
}

function playRound(humanSelection, computerSelection){
    if(humanSelection === computerSelection){
        return "It's a tie!";
    }

    if(humanSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "You lose! Paper beats Rock";
    }

    if(humanSelection == "rock" && computerSelection == "scissor"){
        humanScore++;
        return "You win! Rock beats Scissor";
    }

    if(humanSelection == "paper" && computerSelection == "rock"){
        humanScore++;
        return "You win! Paper beats Rock";
    }

    if(humanSelection == "paper" && computerSelection == "scissor"){
        computerScore++;
        return "You lose! Scissor beats Paper";
    }

    if(humanSelection == "scissor" && computerSelection == "rock"){
        computerScore++;
        return "You lose! Rock beats Scissor";
    }

    if(humanSelection == "scissor" && computerSelection == "paper"){
        humanScore++;
        return "You win! Scissor beats Paper";
    }
}

const container = document.querySelector("#container");
const buttons = document.querySelectorAll('button');
const scoreDiv = document.createElement("div");
const resultDiv = document.createElement("div");
const finalResultDiv = document.createElement("div");

container.appendChild(scoreDiv);
container.appendChild(resultDiv);
container.appendChild(finalResultDiv);

function updateScore(){
    scoreDiv.textContent = "Human Score: " + humanScore +  ", Computer Score: " + computerScore;
}

function announceWinner(){
    if(humanScore > computerScore){
        finalResultDiv.textContent = "The Winner Is Human!";
    }else{
        finalResultDiv.textContent = "The Winner Is Computer!"; 
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, getComputerChoice());
        resultDiv.textContent = result;
        updateScore();
        if(humanScore == 5 || computerScore == 5){
            announceWinner();
            // Disable buttons after a winner is announced
            buttons.forEach((button) => button.disabled = true);
        }
    });
});

updateScore();  // Initialize the score display
