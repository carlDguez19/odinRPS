function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

let cpuChoice = () => {
    let choice = getRandomNumber();
    if(choice === 0){
        return "ROCK";
    }
    else if(choice === 1){
        return "PAPER";
    }
    return "SCISSORS";
}

function playerSelection(){
    let choice = prompt("Enter choice:");
    choice = choice.toUpperCase();
    if(choice == "SCISSOR"){
        choice = "SCISSORS";
    }
    return choice;
}

let playRound = (player, cpu) => {
    if(player === cpu){
        return `TIE: both picked ${player}`;
    }
    else if((player == "ROCK" && cpu == "SCISSORS") || (player == "PAPER" && cpu == "ROCK") || (player == "SCISSORS" && cpu == "PAPER")){
        return `YOU WIN: ${player} beats ${cpu}`;
    }
    return `YOU LOSE: ${player} loses to ${cpu}`;
}

 let round = playRound(playerSelection(), cpuChoice());
 console.log(round);