let TimerElement = document.getElementById("timer");
let seconds = parseInt(TimerElement.textContent);
function countdown () {
    seconds = seconds - 1;
    TimerElement.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(TimerInterval);
    alert("Вы победили!!!")
    }
}
let TimerInterval = setInterval(countdown,1000);