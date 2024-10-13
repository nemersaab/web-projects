function increase(){
    t=document.getElementById('myH');
    x=t.innerHTML;
    x=Number(x);
    t.innerHTML=x+1;
}
function decrease(){
    t=document.getElementById('myH');
    x=t.innerHTML;
    x=Number(x);
    t.innerHTML=x-1;
}
function reset(){
    t=document.getElementById('myH').innerHTML=0;
}