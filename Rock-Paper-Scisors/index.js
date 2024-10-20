const choices=["rock","paper","scisors"];
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scisors = document.getElementById('Scisors');
const resultDisplay = document.getElementById('result');
const player=document.getElementById('playerChoice');
const cpu=document.getElementById('cpuChoice');
const cpuScoreDisplay=document.getElementById('cpuScore');
const playerScoreDisplay=document.getElementById('playerScore');
let playerScore=0;
let cpuScore=0;
rock.addEventListener('click',(event)=>{
    play(event.target.value)
})
paper.addEventListener('click',(event)=>{
    play(event.target.value)
})
scisors.addEventListener('click',(event)=>{
    play(event.target.value)
})
function play(choice){
    let cpuChoice =choices[Math.floor(Math.random()*3)];
    let result;
    player.textContent="You choosed: "+choice;
    cpu.textContent="CPU choosed: "+cpuChoice;
    switch(choice){
        case "rock":
            result = cpuChoice=="scisors"?"YOU WIN":"YOU LOSE";
            break;
        case "paper":
            result = cpuChoice=="rock"?"YOU WIN":"YOU LOSE";
            break;
        case "scisors":
            result = cpuChoice=="paper"?"YOU WIN":"YOU LOSE";
            break;            
    }
    resultDisplay.style.fontSize="3em"
    if(cpuChoice == choice){
        result="TIE"
        resultDisplay.style.color="#eeff00";
    }
    if(result === "YOU WIN"){
        playerScore++;
        resultDisplay.style.color="green";
    }
    else if(result=="YOU LOSE"){
        cpuScore++
        resultDisplay.style.color="red";
    }
    resultDisplay.classList.add("bordered")
    resultDisplay.textContent=result;
    if(playerScore > cpuScore){
        cpuScoreDisplay.style.color="red";
        playerScoreDisplay.style.color="green";
    }
    else if(cpuScore> playerScore){
        cpuScoreDisplay.style.color="green";
        playerScoreDisplay.style.color="red";
    }
    else{
        cpuScoreDisplay.style.color="#eeff00";
        playerScoreDisplay.style.color="#eeff00";
    }
    playerScoreDisplay.textContent="Your score: "+playerScore;
    cpuScoreDisplay.textContent="CPU score: "+cpuScore;
    
}