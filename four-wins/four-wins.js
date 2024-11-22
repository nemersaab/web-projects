const buttons = document.getElementById('buttons').children
const result  = document.getElementById('result');
const col1 = document.getElementById('col1').children
const col2 = document.getElementById('col2').children
const col3 = document.getElementById('col3').children
const col4 = document.getElementById('col4').children
const col5 = document.getElementById('col5').children
const col6 = document.getElementById('col6').children
const col7 = document.getElementById('col7').children

let i=0
let anyOneWins=false
buttons[0].addEventListener('click',()=>insert(col1,0))
buttons[1].addEventListener('click',()=>insert(col2,1))
buttons[2].addEventListener('click',()=>insert(col3,2))
buttons[3].addEventListener('click',()=>insert(col4,3))
buttons[4].addEventListener('click',()=>insert(col5,4))
buttons[5].addEventListener('click',()=>insert(col6,5))
buttons[6].addEventListener('click',()=>insert(col7,6))
let boardValues=[[false,false,false,false,false,false,false],
                 [false,false,false,false,false,false,false],
                 [false,false,false,false,false,false,false],
                 [false,false,false,false,false,false,false],
                 [false,false,false,false,false,false,false],
                 [false,false,false,false,false,false,false]]
function insert(column,index){
    if(anyOneWins)
        return
    let color = (i%2==0)?"red":"green"
    let j = 5;
    while(column[j].style.backgroundColor == "red" || column[j].style.backgroundColor == "green" ){
        j--
    }
    if(j<0){
        return
    }
    column[j].style.backgroundColor=color
    i++
    boardValues[j][index]=color
    if(colomnCheck(boardValues,index,color) || rowCheck(boardValues,j,color)|| diagonalCheck(boardValues,j,index,color)|| antiDiagonalCheck(boardValues,j,index,color)){
        anyOneWins=true
        result.hidden = false
        result.style.backgroundColor=color
        result.textContent = `${color.toUpperCase()} WINS`
    }
    
    
}
function rowCheck(matrix, y, addedColor) {
    let currentOccurences = 0;
    let maxOccurences = 0;
    for (let i = 0; i < 7; i++) {  
        if (matrix[y][i] === addedColor) {
            currentOccurences++;
            maxOccurences = Math.max(maxOccurences, currentOccurences);
        } else {
            currentOccurences = 0;
        }
    }
    return maxOccurences >= 4;
}

function colomnCheck(matrix,x,addedColor){
    let currentOccurences=0
    let maxOccurences=0
    for(let i = 5 ;i>=0 ;i--){
        if(matrix[i][x] == addedColor){

            currentOccurences++
        }
        else{
            if(maxOccurences<currentOccurences){
                maxOccurences=currentOccurences
            }
            currentOccurences=0
        }
    }
    return maxOccurences>=4 
}
function diagonalCheck(matrix, x, y, addedColor) {
    while (x > 0 && y > 0) {
        x--;
        y--;
    }

    let currentOccurences = 0;
    let maxOccurences = 0;
    while (x < 6 && y < 7) {
        if (matrix[x][y] === addedColor) {
            currentOccurences++;
            maxOccurences = Math.max(maxOccurences, currentOccurences);
        } else {
            currentOccurences = 0;
        }
        x++;
        y++;
    }
    return maxOccurences >= 4;
}
function antiDiagonalCheck(matrix, x, y, addedColor) {
    while (x > 0 && y < 6) {
        x--;
        y++;
    }
    let currentOccurences = 0;
    let maxOccurences = 0;
    while (x < 6 && y >= 0) {
        if (matrix[x][y] === addedColor) {
            currentOccurences++;
            maxOccurences = Math.max(maxOccurences, currentOccurences);
        } else {
            currentOccurences = 0;
        }
        x++;
        y--;
    }
    return maxOccurences >= 4;
}

