const images = document.getElementsByClassName("image");
let flag=false;
let lastClickedChar=images[0];
let lastClickedName=lastClickedChar.lastChild.textContent;
for(let image of images){
    const value="\none peace \n pirate";
    const cap=image.lastChild;
    image.addEventListener('click',()=>{
        image.classList.toggle('hidden');
        if(flag){
            console.log("ok",lastClickedName);
            lastClickedChar.lastChild.textContent = lastClickedName;}
        lastClickedName=cap.textContent;
        lastClickedChar=image;
        cap.textContent += value; 
        flag=true;
    })

}
