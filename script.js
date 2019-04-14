let playerPoint = 0;
let computerPoint = 0;
let roundNumber = 0;
let roundResult;
let resultShown = 0;


document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);


function rock(){
    playRound("rock");
    
}
function paper(){
    playRound("paper");
    
}
function scissors(){
    playRound("scissors");
    
}

function playRound (input) {

    let playerChoice = input;
    let computerChoice = computerPlay();

    
    console.log(computerChoice);
    console.log(playerChoice);

    

    if ((playerChoice === 'rock' && computerChoice === 'paper')||
        (playerChoice === 'paper' && computerChoice === 'scissors')|| 
        (playerChoice === 'scissors' && computerChoice === 'rock')) {
            computerPoint++;
            console.log(computerPoint);
            console.log(playerPoint);
            
            roundResult = `You Lose! ${computerChoice} beats ${playerChoice}`;
                
    }else if((playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock')){
            playerPoint++;
            console.log(computerPoint);
            console.log(playerPoint);
           
            roundResult = `You Win! ${playerChoice} beats ${computerChoice}`;  
    }else {
      
        roundResult = 'Tie!'
    } 
    roundNumber ++;

   

    showResult (computerChoice, roundResult);
}       


function showResult(computerChoice, roundResult){

    if(resultShown===1){
        clear();
    }

    const resultDiv = document.getElementById('resultDiv')
    const result = document.createElement('div');
    result.id = "result";
    let resultOut;



    if(computerPoint !== 5 && playerPoint !==5){
        resultOut = 'Round: ' +roundNumber+ '<br><br>Computer chose: ' +computerChoice+ '<br>' + roundResult+
        '<br><br>Player score: ' +playerPoint+ '<br>' + 'computer score: ' + computerPoint;
    }else if (playerPoint === 5 || computerPoint === 5) {
        if(playerPoint === 5){
            
            resultOut = `Congratulations, you have utterly defeated the robot overlords ${playerPoint} to ${computerPoint} `;
            reset();
        }else if(computerPoint === 5){
            
            resultOut = `Humanity will forever remember this terrible loss of ${computerPoint} to ${playerPoint} `;
            reset();
        }
        playerScore = 0;
        computerScore = 0;
    }


    result.innerHTML = resultOut;
    resultDiv.appendChild(result);
    resultShown = 1;
    
    
}

function computerPlay () {
    const choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        return 'rock';
    } else if (choiceNumber === 1) {
        return 'paper';
    }
    return 'scissors';
}

function reset(){
    computerPoint=0;
    playerPoint=0;
    roundNumber=0;
}
function clear(){
    const resultDiv = document.getElementById('resultDiv')
    const result = document.getElementById('result')
    resultDiv.removeChild(result);
}


        