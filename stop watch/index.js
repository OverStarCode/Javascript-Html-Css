var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var stopBtn = document.getElementById("stop");

var days =  document.getElementById("days");
var hours =  document.getElementById("hours");
var minutes =  document.getElementById("minutes");
var seconds =  document.getElementById("seconds");

var timer;
var time = 10000;

startBtn.addEventListener("click", function() {
    timer = setInterval(updateTimer(time--), 1000);
});

resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    updateTimer(time--);
})

stopBtn.addEventListener("click", function() {
    clearInterval(timer);
})
var times = updateTimer(time)

function updateTimer(time) {
    // var now = new Date().getTime();

    var remainingTime = time;
    var daysValue = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    remainingTime %= (1000 * 60 * 60 * 24);

    var hoursValue = Math.floor(remainingTime / (1000 * 60 * 60));
    remainingTime %= (1000 * 60 * 60);

    var minutesValue = Math.floor(remainingTime / (1000 * 60));
    remainingTime %= (1000 * 60);

    var secondsValue = Math.floor(remainingTime / 1000);

    days.textContent = daysValue;
    hours.textContent = formatTime(hoursValue);
    minutes.textContent = formatTime(minutesValue);
    seconds.textContent = formatTime(secondsValue);

    function formatTime(value) {
        return value < 10? "0" + value : value;
    }
    if (time <= 0) {
        clearInterval(timer);
        alert("Time's up!");
    }


 

    return remainingTime;
}