const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

const relogio = setInterval(function time() {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  horas.innerHTML = hour;
  minutos.innerHTML = minutes;
  segundos.innerHTML = seconds;
});
