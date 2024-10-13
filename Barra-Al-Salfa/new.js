function add_Player(){
    let Player_name=window.prompt("enter the new name","");
    if(Player_name == "" || Player_name == null)
        return;
    form=document.getElementById('formy');
    inp=document.createElement('input');
    br=document.createElement('br')
    inp.value=Player_name;
    form.appendChild(inp)
    form.appendChild(br)
}
function saveData(callBack){
    form=document.getElementById('formy');
    inputs=form.elements;
    players=[];
    for(let i=0 ; i<inputs.length ;i++){
        players.push(inputs[i].value)
    }
    let final=document.getElementById('hidIn');
    final.value=players;
    let body = document.getElementById('body');
    let buttons= document.getElementById('buttons');
    body.removeChild(form);
    buttons.innerHTML="";
    document.getElementById('Next').hidden=false;
    callBack()

}
function gameStarts(){
    let sel = document.getElementById('gA');
    let football_players=["Ronaldo","messi","neymar","vini jr","mbappe","ramos"];
    let food = ["crespy","burger","tabooleh","labneh","cheese","rice","potato","beans"];
    let category;
    if(sel.value == "football"){
        category=football_players;
    }
    else if(sel.value == "food"){
        category=food
    }
    sel.hidden=true;
    let players=document.getElementById('hidIn').value;
    players = players.split(",");
    if(players.length<3){
        document.write("<h1>no enough players entered</h1>");
        return;
    }
    let index = Math.floor(Math.random() * (category.length))
    let similar_player= category[index];
    index = Math.floor(Math.random() * (players.length))
    let diff=players[index];
    document.getElementById('barra').value = diff;
    let l= [];
    for(player of players){
        if(player == diff){
            l.push([player,"you are barra al salfa"]);
        }
        else{
            l.push([player,"the salfa is about "+similar_player])
        }
    }
    document.getElementById('roles').value = l;
}
function reveal(){
    let roles = document.getElementById('roles').value;
    roles= roles.split(",");
    let index= document.getElementById('i').value;
    index=Number(index);
    if(index%2 == 0){
        par = "give the pc to "+roles[index];
    }
    else{
        par = roles[index];
    }
    if(index==roles.length){
        par= "Press next to reveal the barra al salfa player";
    }
    else if(index == roles.length + 1){
        par= "the player is "+document.getElementById('barra').value;
    }
    else if(index >= roles.length+2){
        return;
    }
    index+=1;
    document.getElementById('i').value = index;
    document.getElementById('revealing').innerHTML=par;
   
    
}

