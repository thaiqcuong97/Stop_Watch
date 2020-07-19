//logo
function Logo() {
  const text = baffle(".logo");
  text.set({
    characters: "021 8793 2563 196 3678 215 698 748015",
    speed: 120,
  });
  text.start();
  text.reveal(4000);
}
Logo();


//stopwatch
let time = 0,
  /* holds incrementing value */
  centiseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0,
  /* Contains and outputs returned value of  function checkTime */
  cents = 0,
  secs = 0,
  mins = 0,
  hourOuts = 0;

/* Start */
function Start() {
  if(time){
    clearInterval(time);
  }
  time = setInterval(timer, 10);
}
/*Stop */
function Stop() {
  clearInterval(time);
}

/* Main Time */
function timer() {
  cents = checkTime(centiseconds);
  secs = checkTime(seconds);
  mins = checkTime(minutes);
  hourOuts = checkTime(hours);

  centiseconds = ++centiseconds;

  if (centiseconds === 100) {
    centiseconds = 0;
    seconds = ++seconds;
  }
  if (seconds === 60) {
    minutes = ++minutes;
    seconds = 0;
  }
  if (minutes === 60) {
    minutes = 0;
    hours = ++hours;
  }

  document.getElementById("centiseconds").innerHTML = cents;
  document.getElementById("seconds").innerHTML = secs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("hours").innerHTML = hourOuts;
}
/*Adds 0 when value is <10*/
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/* Reset  */
function Reset() {
  centiseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("centiseconds").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
}

/* 
Active Button
function activeBtn() {
  let controlBtn = document.getElementById("controlBtn");
  let btns = controlBtn.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}
activeBtn();
*/