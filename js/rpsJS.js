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
        return `YOU TIED: both picked ${player}`;
    }
    else if((player == "ROCK" && cpu == "SCISSORS") || (player == "PAPER" && cpu == "ROCK") || (player == "SCISSORS" && cpu == "PAPER")){
        return `YOU WIN: ${player} beats ${cpu}`;
    }
    return `YOU LOSE: ${player} loses to ${cpu}`;
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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        let result = playRound(button.getAttribute('class'), cpuChoice);
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