let userScore=0;
let computerScore =0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p=document.querySelector(".result p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r' , 'p' , 's'];
    const randomNumber =Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToword(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice , computerChoice){
    const smallUserWord1="user".fontsize(3);
    const smallUserWord="comp".fontsize(3);
    const userChoice_div=document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML=`${convertToword(userChoice)}${smallUserWord1}  beats ${convertToword(computerChoice)}${smallUserWord} .You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),500);
}



function lose(userChoice, computerChoice){
    const smallUserWord1="user".fontsize(3).sub();
    const smallUserWord="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML=`${convertToword(userChoice)}${smallUserWord1}  loses to ${convertToword(computerChoice)}${smallUserWord} .You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(()=> userChoice_div.classList.remove('red-glow'),500)
}

function draw(userChoice, computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord1="user".fontsize(3).sub();
    const smallUserWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToword(userChoice)}${smallUserWord1}  equals ${convertToword(computerChoice)}${smallUserWord} .It's a draw!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(()=> userChoice_div.classList.remove('grey-glow'),500)
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice , computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice , computerChoice)
            break;
    }
}



function main() {
    rock_div.addEventListener('click',()=>game("r"));
    paper_div.addEventListener('click',()=>game("p"));
    scissors_div.addEventListener('click',()=>game("s"));
}
main();