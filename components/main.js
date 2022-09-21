"use strict";
const main = document.querySelector("main");
const refresh = document.querySelector(".refresh");
const more = document.querySelector(".more-info");
const viewMore = document.querySelector(".more");
const moreText = document.querySelector(".more span");
const arrow = document.querySelector(".arrow");

viewMore.addEventListener("click", () => {
  arrow.classList.toggle("rotate");
  if (arrow.classList.contains("rotate")) {
    moreText.textContent = "less";
  } else {
    moreText.textContent = "more";
  }
  main.classList.toggle("shift");
});

// QUOTE GENERATOR
const quote = document.querySelector("q");
const author = document.querySelector(".author");
async function fetchQuote() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();

  quote.textContent = data.content;
  author.textContent = data.author;
}

fetchQuote();

//GET TIMEZONES-----------------------------------
const zone = document.querySelector(".zone");
const zoneAbbr = document.querySelector(".zoneAbbr");
const weekNum = document.querySelector(".weeknum");
const weekDay = document.querySelector(".weekday");
const yearDay = document.querySelector(".yearday");

// -----------
async function fetchTime() {
  let response = await fetch("http://worldtimeapi.org/api/ip");
  let data = await response.json();

  zone.textContent = data.timezone;
  weekDay.textContent = data.day_of_week;
  weekNum.textContent = data.week_number;
  yearDay.textContent = data.day_of_year;
  zoneAbbr.textContent = data.abbreviation;
}
// console.log(clientIp);

fetchTime();

refresh.addEventListener("click", () => {
  fetchQuote();
  // refresh.style.animation = "spin 0.5s linear";
});

// GET CITY/COUNTRY-----------------------------
const city = document.querySelector(".city");
const country = document.querySelector(".country");
async function fetchLocation() {
  let response = await fetch(
    "https://api.ipbase.com/v2/info?apikey=7xh59lN3vHZUQPXJyXuCp5hLer9KyhZeWYPEUBqf&ip=1.1.1.1"
  );
  let data = await response.json();
  // console.log(data);
  country.textContent = data.data.location.country.alpha3;
  city.textContent = data.data.location.city.name;
}

fetchLocation();

//GET TIME----------------------------------

const date = new Date();

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const daytime = document.querySelector(".greet");
const icon = document.querySelector(".greeting img");

function timer() {
  let hr = date.getHours();
  let min = date.getMinutes();

  hour.textContent = hr;
  minute.textContent = min;

  //TASKS--------------------------------

  // - The greeting changes depending on the time of day.

  if (hr >= 5 && hr <= 11) {
    daytime.textContent = "morning";
  } else if (hr >= 12 && hr <= 17) {
    daytime.textContent = "afternoon";
  } else {
    daytime.textContent = "evening";
  }

  // - The greeting icon and background image also changes depending on the time of day.
  if (hr >= 5 && hr <= 18) {
    icon.src = "assets/desktop/icon-sun.svg";
  } else {
    document.body.style.backgroundImage = `url("../assets/desktop/bg-image-nighttime.jpg")`;
    icon.src = "assets/desktop/icon-moon.svg";
    icon.setAttribute("alt", "moon icon");
  }
  setInterval(timer, 1000);
}

timer();


//AUTOMATICALLY UPDATE THE TIME-----------------------------------
