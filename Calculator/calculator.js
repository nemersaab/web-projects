const myScreen = document.getElementById('screen');
let current ="";
function f(n) {
    current+=n;
    myScreen.value=current;
}

function fdel()
{
    current="";
    myScreen.value =current;
}
function fenter(){
    try{
        let value = eval(current);
        current="";
        myScreen.value = value}
    catch(error){
        myScreen.value="ERROR";
    }
    
}
