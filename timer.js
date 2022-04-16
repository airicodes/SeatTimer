//I try to either change positions or go up from my chair every hour
var button = document.getElementById("button");
var time = document.getElementById("time");
var timerEndSound = new Audio('timerSound.mp3');
//var time = 60 * 60;
//var minutes = Math.floor(time / 60);
//var seconds = time % 60;
// var setTime = hour / 60 + ":" + minutes / 60;
var setTime = 60 * 60;
var timeout; 

function timer() {
    if (button.innerHTML == "🌸") {
        startTimer();
    } else {
        pauseTimer();
    }
}
function startTimer() {
    button.innerHTML = '⏸';
    timeout = setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        setTime--;
        time.innerText = setTime;                   //  increment the counter
        if (setTime != 0) {           //  if the counter < 10, call the loop function
            startTimer();          //  ..  again which will trigger another 
        } else {
            stopTimer();
        }                       //  ..  setTimeout()
      }, 1000)
}

function pauseTimer() {
    button.innerHTML = '🌸';
    clearTimeout(timeout);
}

function stopTimer() {
    button.innerHTML = '🌸';
    setTime = 60;
    time.innerText = setTime
    timerEndSound.play();
    
}