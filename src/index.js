import css from "./css/style.css";

const countDownDate = new Date("08.01.2023 18:12:43");

const timer = setInterval(function() {

  const now = new Date();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysL = document.getElementById('days').textContent = days;
  const hoursL = document.getElementById('hours').textContent = hours;
  const minutesL = document.getElementById('mins').textContent = minutes;
  const secondsL = document.getElementById('secs').textContent = seconds;
}, 1000);
