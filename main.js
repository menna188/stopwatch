let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timer;

    function startStopwatch() {
        timer = setInterval(increment, 1000);
        disableButton('btn1');
    }

    function stopStopwatch() {
        clearInterval(timer);
        enableButton('btn1');
    }

    function resetStopwatch() {
        clearInterval(timer);
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateDisplay();
        enableButton('btn1');
    }

    function increment() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById('hrs').innerText = formatTime(hours);
        document.getElementById('min').innerText = formatTime(minutes);
        document.getElementById('sec').innerText = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function disableButton(buttonId) {
        document.getElementById(buttonId).disabled = true;
    }

    function enableButton(buttonId) {
        document.getElementById(buttonId).disabled = false;
    }
