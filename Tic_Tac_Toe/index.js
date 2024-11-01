const board = document.getElementById('board')
const result = document.getElementById('result')
for(let boardChild of board.childNodes){
    boardChild.addEventListener('click',event=>giveValue(event,check))

}
let anyOneWins = false
let clickedBefore=[[false,false,false]
                  ,[false,false,false]
                  ,[false,false,false]]
let boardValues =  [[1,2,3]
                  ,[4,5,6] 
                  ,[7,8,9]]      
let boardInputs = board.children
let i = 0
function giveValue(event,callback){
    if(anyOneWins)
        return
    let XO = (i%2==0)?'X':'O'
    let [x,y] =event.target.id.split('-')
    if(!clickedBefore[x][y]){
        event.target.innerHTML=XO
        boardValues[x][y]=XO
        event.target.style.backgroundColor = (XO=='X')?"lightseagreen":"lightcoral"
        i++
        callback()
    }
    clickedBefore[x][y]=true   
}

function check(){
    for(let i = 0 ; i<3 ;i++){
        //column check
        if(boardValues[i][0] == boardValues [i][1] && boardValues [i][1] == boardValues [i][2]){
            boardInputs[i*3+0].style.backgroundColor = "green"
            boardInputs[i*3+1].style.backgroundColor = "green"
            boardInputs[i*3+2].style.backgroundColor = "green"
            anyOneWins=true
            result.textContent = `${boardValues[i][0]} Wins`
            result.hidden = false
        }
        //row check
        if(boardValues[0][i] == boardValues [1][i] && boardValues [1][i] == boardValues [2][i]){
            boardInputs[0*3+i].style.backgroundColor = "green"
            boardInputs[1*3+i].style.backgroundColor = "green"
            boardInputs[2*3+i].style.backgroundColor = "green"
            anyOneWins=true
            result.textContent = `${boardValues[0][i]} Wins`
            result.hidden = false
        }

    }
    if(boardValues[0][0] == boardValues [1][1] && boardValues [1][1] == boardValues [2][2]){
        boardInputs[0*3+0].style.backgroundColor = "green"
        boardInputs[1*3+1].style.backgroundColor = "green"
        boardInputs[2*3+2].style.backgroundColor = "green"
        anyOneWins=true
        result.textContent = `${boardValues[0][0]} Wins`
        result.hidden = false
    }
    if(boardValues[0][2] == boardValues [1][1] && boardValues [1][1] == boardValues [2][0]){
        boardInputs[0*3+2].style.backgroundColor = "green"
        boardInputs[1*3+1].style.backgroundColor = "green"
        boardInputs[2*3+0].style.backgroundColor = "green"
        anyOneWins=true
        result.textContent = `${boardValues[1][1]} Wins`
        result.hidden = false
    }
}