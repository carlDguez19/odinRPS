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
        outcomeP.textContent = `YOU TIED: both picked ${player}\r\nYou: ${wins}\r\nCPU: ${losses}\r\nTie: ${ties}`;
        return `YOU TIED: both picked ${player}`;
    }
    else if((player == "ROCK" && cpu == "SCISSORS") || (player == "PAPER" && cpu == "ROCK") || (player == "SCISSORS" && cpu == "PAPER")){
        wins++;
        outcomeP.textContent = "";
        outcomeP.textContent = `YOU WIN: ${player} beats ${cpu}\r\n You: ${wins}\r\nCPU: ${losses}\r\nTie: ${ties}`;
        if(wins === 5) announceWinner("PLAYER");
        return `YOU WIN: ${player} beats ${cpu}`;
    }
    else{
        losses++;
        outcomeP.textContent = "";
        outcomeP.textContent = `YOU LOSE: ${player} loses to ${cpu}\r\n You: ${wins}\r\nCPU: ${losses}\r\nTie: ${ties}`;
        if(losses === 5) announceWinner("CPU");
        return `YOU LOSE: ${player} loses to ${cpu}`;
    }
}

function announceWinner(winner){
    const gameArea = document.querySelector('.gameArea');
    const buttonArea = document.querySelector('.buttonArea');
    const results = document.querySelector('.results');
    gameArea.removeChild(buttonArea);
    const winnerArea = document.createElement('div');
    const winnerText = document.createElement('p');
    winnerText.textContent = `${winner} WINS!!`;
    winnerArea.classList.add('winnerArea');
    winnerText.classList.add('winner');
    winnerArea.appendChild(winnerText);
    gameArea.insertBefore(winnerArea, results);

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