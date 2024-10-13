function f(n) {
    screen = document.getElementById('scrn');
    value = screen.value;
    if (screen.value == "") {
        value = n;
    }
    else {
        value *= 10;
        value += n;
    }
    screen.value = value;
}

function fdel()
{
    document.getElementById('scrn').value/=10;
    document.getElementById('scrn').value=parseInt(document.getElementById('scrn').value);
}
function fac()
{
    while(document.getElementById('scrn').value!=0)
    {fdel()}
}
function f2(sign) {
document.getElementById('val1').value=document.getElementById('scrn').value;
document.getElementById('scrn').value=0;
document.getElementById('sign').value=sign;
}
function fenter(){
    sign=document.getElementById('sign').value;
    screen=document.getElementById('scrn');
    hidden=document.getElementById('val1');
    scval=parseInt(screen.value);
    hdval=parseInt(hidden.value);
    if(sign=="+")
    {
        screen.value=hdval+scval;
        hidden.value=0;
    }
    if(sign=="-")
    {
        screen.value=hdval-scval;
        hidden.value=0;
    }
    if(sign=="*")
    {
        screen.value=hdval*scval;
        hidden.value=0;
    }
    if(sign=="/")
    {
        screen.value=hdval/scval;
        hidden.value=0;
    }
}