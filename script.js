let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

function startStopwatch() {
  interval = setInterval(updateTime, 1000);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  stopStopwatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('hours').innerText = '00';
  document.getElementById('minutes').innerText = '00';
  document.getElementById('seconds').innerText = '00';
}

function updateTime() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  document.getElementById('hours').innerText = padZero(hours);
  document.getElementById('minutes').innerText = padZero(minutes);
  document.getElementById('seconds').innerText = padZero(seconds);
}

function padZero(time) {
  return (time < 10) ? `0${time}` : time;
}
