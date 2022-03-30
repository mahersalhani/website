//go up
let up = document.getElementById("up");

window.onscroll = () => {
  if (window.pageYOffset >= 800) {
    up.style.right = "20px";
  } else {
    up.style.right = "-100%";
  }
};

up.onclick = () => {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
///////////////////////////////
//scrol and skills span function
let span = document.querySelectorAll(".our-skills .container .skills .box div span");
let skills = document.querySelector(".our-skills");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop - 100) {
    span.forEach((el) => {
      // console.log(el.parentElement.attributes[0].value);
      el.style.width = el.parentElement.attributes[0].value;
    });
  }
});

//time event

let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

console.log(days.innerHTML);
console.log(hours);
console.log(minutes);
console.log(seconds);
let eventDate = new Date("01 october 2022 18:37:24").getTime();

let time = window.setInterval(() => {
  let dateNow = Date.now();
  let theRemainingTime = eventDate - dateNow;
  //days
  let day = Math.ceil(theRemainingTime / (1000 * 60 * 60 * 24));
  days.innerHTML = day;
  //hours
  let hour = Math.floor((theRemainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours.innerHTML = hour;
  //minutes
  let minute = Math.floor((theRemainingTime % (1000 * 60 * 60)) / (1000 * 60));
  minutes.innerHTML = minute;
  // seconds
  let second = Math.floor((theRemainingTime % (1000 * 60)) / 1000);
  seconds.innerHTML = second;
  ////////////////////////////
  seconds.innerHTML < 10 ? (seconds.innerHTML = `0${second}`) : (seconds.innerHTML = second);
  minutes.innerHTML < 10 ? (minutes.innerHTML = `0${minute}`) : (minutes.innerHTML = minute);
  hours.innerHTML < 10 ? (hours.innerHTML = `0${hour}`) : (hours.innerHTML = hour);
  if (days.innerHTML <= 0) {
    window.clearInterval(time);
    days.innerHTML = "0";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}, 1000);
console.log("**********");
//conter

let counter = document.querySelectorAll(".count .num");
let stats = document.querySelector(".stats");
let stopFun = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 100) {
    if (!stopFun) {
      counter.forEach((el) => {
        startCount(el);
      });
    }
    stopFun = true;
  }
});

function startCount(el) {
  let cou = 0;
  let x = setInterval(() => {
    cou += 1;
    el.innerHTML = cou;
    if (cou == el.attributes[1].value) {
      clearInterval(x);
    }
  }, 2000 / el.attributes[1].value);
}
/*////////////////////////////////*/

let foot = document.querySelector(".foot");
foot.innerHTML = "Made With <3 By maher";
