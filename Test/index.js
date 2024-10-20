const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mouseover',(event)=>{
    myDiv.textContent = "dont do that 🙄"
    myDiv.style.backgroundColor='blue';
})
myDiv.addEventListener('mouseout',(event)=>{
    myDiv.textContent = "click me 😀"
    myDiv.style.backgroundColor='lightgreen';
})
myDiv.addEventListener('click',(event)=>{
    myDiv.textContent = "ouch!🤕"
    myDiv.style.backgroundColor='tomato';
})
let step=10;
let y=0;
let x = 0;
document.addEventListener('keydown',(event)=>{
    console.log(event.key)
    if(event.key.startsWith("Arrow")){
    switch(event.key){
        case "ArrowLeft":
            x-=step;
            break;
        case "ArrowRight":
            x+=step;
            break  
        case "ArrowDown":
            y+=step;
            break  
        case "ArrowUp":
            y-=step;
            break                
    }    
    myDiv.style.top += `${y}px`;
    myDiv.style.left += `${x}px`;}
})
