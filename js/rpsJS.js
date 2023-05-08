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