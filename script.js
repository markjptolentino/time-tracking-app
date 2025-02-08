let timerInterval;
let isRunning = false;
let elapsedTime = 0;
const timerDisplay = document.getElementById('timer');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const logList = document.getElementById('logList');

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    isRunning = true;
    startStopButton.textContent = 'Stop';
    timerInterval = setInterval(() => {
        elapsedTime++;
        timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startStopButton.textContent = 'Start';
    const logEntry = document.createElement('li');
    logEntry.textContent = `Time logged: ${formatTime(elapsedTime)}`;
    logList.appendChild(logEntry);
    elapsedTime = 0; // Reset the time
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    timerDisplay.textContent = formatTime(elapsedTime);
    startStopButton.textContent = 'Start';
});
