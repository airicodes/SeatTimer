/* I try to either change positions or go up from my chair every hour */

//Elements + Audio
var button = document.getElementById("button");
var timeText = document.getElementById("time");
var timerEndSound = new Audio('timerSound.mp3');

//Choose the time you wish the timer to run for in SECONDS.
var timeInSeconds = 10;

var time = 1 * timeInSeconds;
var seconds = time % 60;
var minutes = Math.floor(time / 60);
timeText.innerText = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');;
var timeout; 

function timer() {
    if (button.innerHTML == "🌸") {
        startTimer();
    } else if (button.innerHTML == "🌺") {
        pauseTimer();
    } else {
        startTimer();
    }
}
function startTimer() {
    button.innerHTML = '🌺';
    timeout = setTimeout(function() {
        time--;
        seconds = time % 60;
        minutes = Math.floor(time / 60);
        timeText.innerText = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
        if (time != 0) {
            startTimer();
        } else {
            stopTimer();
        }
    }, 1000)

}

function pauseTimer() {
    button.innerHTML = '🌸';
    clearTimeout(timeout);
}

function stopTimer() {
    button.innerHTML = '🌸';
    time = 1 * timeInSeconds;
    timeText.innerText = "Yoo";
    timerEndSound.play();
    
}