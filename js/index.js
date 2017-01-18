var pauseDuration= 0;
var timer = 0;
var breaks;
var work;
var endpoint;
var time;
  var secDisp;
  var minutesDisp;
 var elapsed ;
  var fadeTime;

var pomoCount = 0;
var paused= false;



function up1(){
  var number = document.getElementById("workLength").textContent;
  number++;
  document.getElementById("workLength").textContent = number;
  }
function up(){
  var number = document.getElementById("breakLength").textContent;
  number++;
  document.getElementById("breakLength").textContent = number;
  }
function down1(){
 var number = document.getElementById("workLength").textContent;
  if (number>0){number--;};
  document.getElementById("workLength").textContent = number;
}
function down(){
 var number = document.getElementById("breakLength").textContent;
 if (number>0){number--;};
  document.getElementById("breakLength").textContent = number;
}


function setTime (){
  breaks = document.getElementById("breakLength").textContent*60000;
  work = document.getElementById("workLength").textContent*60000;
  document.getElementById("water").style.backgroundColor = "white"
  timer = true;
  var myElement = document.querySelector("#water"); 
  document.querySelector(".settings").style.opacity = 0;
  document.querySelector("#start").style.display = "none";
  document.querySelector(".secondscreen").style.visibility = "visible";
  setTimeout(function(){
    document.querySelector(".settings").style.display = "none" 
    document.querySelector(".display").style.display = "inline-block";
    time = Date.now();
    starttiming();
  }, 1000);
};

function cancel (){
  document.querySelector(".settings").style.display = "inline-block";
  document.querySelector(".settings").style.opacity = 1;
  document.querySelector(".display").style.display = "none";
  document.querySelector(".secondscreen").style.visibility = "hidden";
  document.querySelector("#start").style.display = "inline-block";
  document.querySelector("#timeBox").style.color = "black";
  document.getElementById("displayBox").style.opacity = 1;
  pomoCount = 0;
  pauseDuration = 0;
  paused = false;
  document.getElementById("pause").textContent = "Pause";
  document.getElementById("indicator").textContent = ("")
  clearInterval(catsTimer);
  document.getElementById("water").style.backgroundColor = "black";
  document.getElementById("water").style.backgroundImage = "url('http://i32.photobucket.com/albums/d49/gtrabbit/DSC_0758_zpsdpklbccq.jpg')";
}

function pause(){
  document.getElementById("displayBox").style.opacity = 1;
  pauseStart = Date.now();
  paused = !paused;
  if (paused) 
    {document.getElementById("pause").textContent = "Resume";
    pauseDuration = 0;
    }
  else { document.getElementById("pause").textContent = "Pause";
    time += pauseDuration;
    }
}


function starttiming (){
 var flash = 0;
  catsTimer = setInterval (function (){
   var myElement = document.querySelector("#water"); 
 
  
  if (timer){
  session = work;
   document.getElementById("indicator").className = "working"  
  document.getElementById("indicator").textContent = "WORK!"  
} else {
   session = breaks;
  document.getElementById("indicator").textContent = "Relax..."
  document.getElementById("indicator").className = "relaxing"
  } //sets BG according to session
 
  var change = document.querySelector("#timeBox");

   if (paused){
    flash++;
     if (flash>4){
      document.getElementById("displayBox").style.opacity = 0;
     }
     if (flash>7){
       document.getElementById("displayBox").style.opacity = 1;
       flash=0;
     }
     pauseDuration = (Date.now()-pauseStart);
       } 
   
   
   
  if (!paused){
   var elapsed = session -  (Date.now()-time);
  };
  
   
   var seconds = elapsed/1000;
  var minutes = Math.ceil(seconds/60)-1;
  var secs = (seconds%60).toFixed(0);
if (elapsed < 5000){
  change.style.color = "red"

}
  
if (elapsed<=0){

  timer = !timer;
 change.style.color = "black";   
  switch (timer){
    case false:
      pomoCount++;
      myElement.style.backgroundImage = "url('http://i32.photobucket.com/albums/d49/gtrabbit/DSC_0885_zpssndgkdjc.jpg')";
      break;
      
    case true:
          myElement.style.backgroundImage = "url('http://i32.photobucket.com/albums/d49/gtrabbit/DSC_0758_zpsdpklbccq.jpg')";
      break;
  }
  time = Date.now();
}
  
  
  
  if (secs<10){
    if (secs<1){secDisp = "00"} else{
    secDisp = "0"+secs;}
  } else {secDisp = secs};
  if (minutes<10){
    if (minutes<1){minutesDisp = "00";} else {
    minutesDisp = "0"+minutes;}
  } else {minutesDisp = minutes;};
  
  
if (!paused){
  document.getElementById("pomoCounter").textContent = (pomoCount);
  document.getElementById("timeBoxSec").textContent = (secDisp);
  document.getElementById("timeBoxMin").textContent = (minutesDisp);
} 
}, 150);
  catsTimer;
};