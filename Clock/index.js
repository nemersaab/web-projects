function updateClock(){
    const clock = document.getElementById("clock");
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ext = h>12?"PM":"AM";
    h = h%12;
    h=String(h).padStart(2,0);
    m=String(m).padStart(2,0);
    s=String(s).padStart(2,0);
    let par = h+":"+m+":"+s+" "+ext;
    clock.value = par    
}
setInterval(updateClock,1000)