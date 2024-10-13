function random(a,b){
    return Math.floor(Math.random() * (b-a))+a;}

let lettersL = ['q','w','e','r','t','y','u','i','o','p','a','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let lettersU=lettersL.join("").toUpperCase();
lettersU=lettersU.split("");
let characters =['!','@','#','$','&','?']
function generate(){
let pass="";
let n=window.prompt("enter the length of you password");
n=Number(n);
let all=[...lettersL,...lettersU,...characters];
for(let i =0 ; i<n ;i++){
    pass+=all[random(0,all.length)];
}
let inp = document.getElementById('pass');
inp.value=pass;
}