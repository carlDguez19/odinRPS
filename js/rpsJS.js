function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

function cpuChoice(){
    let choice = getRandomNumber();
    if(choice === 0){
        return "ROCK";
    }
    else if(choice === 1){
        return "PAPER";
    }
    return "SCISSORS";
}

let playRound = (player, cpu) => {
    if(player === cpu){
        ties++;
        outcomeP.textContent = "";
        outcomeP.textContent = `YOU TIED: both picked ${player}`;
        return `YOU TIED: both picked ${player}`;
    }
    else if((player == "ROCK" && cpu == "SCISSORS") || (player == "PAPER" && cpu == "ROCK") || (player == "SCISSORS" && cpu == "PAPER")){
        wins++;
        outcomeP.textContent = "";
        outcomeP.textContent = `YOU WIN: ${player} beats ${cpu}`;
        return `YOU WIN: ${player} beats ${cpu}`;
    }
    else{
        losses++;
        outcomeP.textContent = "";
        outcomeP.textContent = `YOU LOSE: ${player} loses to ${cpu}`;
        return `YOU LOSE: ${player} loses to ${cpu}`;
    }
}

function determineWinner(tie, win, loss){
    if(win > loss){
        console.log(`You win; ties: ${tie}, wins: ${win}, loss: ${loss}`);
    }
    else if(win == loss){
        console.log(`You tied; t: ${tie}, wins: ${win}, loss: ${loss}`);
    }
    else{
        console.log(`You lose; t: ${tie}, wins: ${win}, loss: ${loss}`);
    }
}

let wins = 0;
let losses = 0;
let ties = 0;

const outcomeP = document.querySelector('.outcome');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        playRound(button.getAttribute('class').toUpperCase(), cpuChoice()); //clever ??? i get the class atribute from each button and uppecase it and use it as the param for play round player side (smiley side eye)
        console.log(result);
    });
});
// function playerSelection(){
//     let choice = prompt("Enter choice:");
//     choice = choice.toUpperCase();
//     if(choice == "SCISSOR"){
//         choice = "SCISSORS";
//     }
//     return choice;
// }

// let playGame = () => {
//     let round = "";
//     let tied = 0;
//     let wins = 0;
//     let loss = 0;
//     for(let i = 0; i < 5; i++){
//         round = playRound(playerSelection(), cpuChoice());
//         console.log(round);
//         if(round.charAt(4) == "T"){
//             tied++;
//         }else if(round.charAt(4) == "W"){
//             wins++;
//         }else{
//             loss++;
//         }
//     }
//     determineWinner(tied, wins, loss);
// }

// playGame();