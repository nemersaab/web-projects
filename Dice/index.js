function random(a,b){
    return Math.floor(Math.random() * (b-a))+a;
}

function roll(){
    let imgs = document.getElementById('imgs');
    let n=document.getElementById('myInp').value;
    imgs.innerHTML="";
    n=Number(n);
    for(let i=0; i<n ; i++){
        let x=random(1,6);
        let dice=document.createElement('img');
        dice.src="C:/programming/Web/Dice/dice_images/"+x+".png";
        dice.alt="dice: "+x;
        let br =document.createElement('br');
        imgs.appendChild(dice);
        imgs.appendChild(br)
    }
}