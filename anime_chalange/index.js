const images = document.getElementsByClassName("image");
for(let image of images){
    image.addEventListener('click',()=>{
        image.classList.toggle('hidden');
        console.log('added');
        
    })
}
