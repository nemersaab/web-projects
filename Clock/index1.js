function date2str(d){
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds()
    ms=String(ms).padStart(3,0);
    m=String(m).padStart(2,0);
    s=String(s).padStart(2,0);
    return m+":"+s+":"+ms;
}
const stopWatch = document.getElementById('stopWatch');
let startDate;
let initalDate;
let isFirst = true;
let stoppedMS=0;
let stoppedDate=0;
let timeId;
let isRunning = false;
function startTime(){
    if(isRunning)
        return;
    startDate = new Date();
    if(isFirst){
        initalDate = startDate;
        isFirst = false;
    }
    if(startDate != initalDate)
        stoppedMS+=startDate-stoppedDate;
    isRunning = true;
    timeId = setInterval(updateStopWatch,10);
}
function updateStopWatch(){
    let currentDate= new Date();
    let Date2convert = new Date(currentDate-initalDate-stoppedMS)
    let par = date2str(Date2convert)
    stopWatch.textContent = par;
}

function stopTime(){
    clearInterval(timeId);
    isRunning = false;
    stoppedDate = new Date();
}
function resetTime(){
    stoppedMS = 0;
    clearInterval(timeId);
    isRunning = false;
    isFirst = true;
    stopWatch.textContent = "00:00:000"

}