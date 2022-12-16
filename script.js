let mins=document.querySelector('#mm');
let secs=document.querySelector('#ss');
let msecs=document.querySelector('#ms');


let timer=0;
let timer1=0;
let timer2=0;

mins.textContent='00';
secs.textContent='00';
msecs.textContent='00';
let miliseconds;
let seconds;
let minutes;

function start(){
    stop();
    miliseconds=setInterval(() => {
        //will give ms in the range 1 to 100
        timer+=1/100;
        let msVal=Math.floor((timer-Math.floor(timer))*100);
        msecs.textContent=msVal<10?'0'+msVal:msVal;
    }, 1);



    seconds=setInterval(() => {
        //will give seconds
        timer1+=1;
        //floor(timer1/60) will return hours
        let secVal=timer1-Math.floor(timer1/60)*60;
        secs.textContent=secVal<10?'0'+secVal:secVal;
    }, 1000);



    minutes=setInterval(() => {
        timer2+=1;
        //time exceeds an hour then timer will be reset
        let minVal=timer2-Math.floor(timer2/60)*60;
        mins.textContent=minVal<10?'0'+minVal:minVal;
    }, 60000);
}




function stop(){
  
    clearInterval(miliseconds);
    clearInterval(seconds);
    clearInterval(minutes);

}

function reset(){
    stop();
    

    timer=0;
    timer1=0;
    timer2=0;

    mins.textContent='00';
    secs.textContent='00';
    msecs.textContent='00';
    document.getElementById("lap").textContent=null;
}

function save(){
    document.getElementById("lap").innerText+=mins.textContent+' : '+secs.textContent+' : '+msecs.textContent+'\n';
}