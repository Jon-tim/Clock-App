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
setInterval(fetchQuote, 5000);

//GET TIMEZONES-----------------------------------
const zone = document.querySelector(".zone");
const zoneAbbr = document.querySelector(".zoneAbbr");
const weekNum = document.querySelector(".weeknum");
const weekDay = document.querySelector(".weekday");
const yearDay = document.querySelector(".yearday");

// -----------
async function fetchTime() {
  let response = await fetch("https://worldtimeapi.org/api/ip");
  let data = await response.json();
  // console.log(data);
  zone.textContent = data.timezone;
  weekDay.textContent = data.day_of_week;
  weekNum.textContent = data.week_number;
  yearDay.textContent = data.day_of_year;
  zoneAbbr.textContent = data.abbreviation;
}

fetchTime();

refresh.addEventListener("click", () => {
  fetchQuote();
});

// GET CITY/COUNTRY-----------------------------
const city = document.querySelector(".city");
const country = document.querySelector(".country");
async function fetchLocation() {
  let response = await fetch(
    "https://api.ipbase.com/v2/info?apikey=7xh59lN3vHZUQPXJyXuCp5hLer9KyhZeWYPEUBqf"
  );
  let data = await response.json();
  // console.log(data);
  country.textContent = data.data.location.country.name;
  city.textContent = data.data.location.city.name;
}

fetchLocation();

//GET TIME----------------------------------

//var dt = new Date();var hours = dt.getHours() ;
// gives the value in 24 hours formatvar AmOrPm = hours >= 12 ? 'pm' : 'am';
//hours = (hours % 12) || 12;var minutes = dt.getMinutes() ;
//var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm;
//finalTime // final time Time - 22:10

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const daytime = document.querySelector(".greet");
const icon = document.querySelector(".greeting img");

function timer() {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();

  //TASKS--------------------------------

  // - The greeting changes depending on the time of day.

  if (hr >= 5 && hr <= 11) {
    daytime.textContent = "morning";
  } else if (hr >= 12 && hr <= 17) {
    daytime.textContent = "afternoon";
  } else {
    daytime.textContent = "evening";
  }
  //-------------- -------

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;

  //-------------- -------
  hour.textContent = hr;
  minute.textContent = min;
  //-------------- -------

  // - The greeting icon and background image also changes depending on the time of day.
  if (hr >= 5 && hr <= 18) {
    icon.src = "assets/desktop/icon-sun.svg";
  } else {
    /* change this depending on the screen size */
    document.body.style.backgroundImage = `url("../assets/mobile/bg-image-nighttime.jpg")`;
    icon.src = "assets/desktop/icon-moon.svg";
    icon.setAttribute("alt", "moon icon");
  }
}

timer();

//AUTOMATICALLY UPDATE THE TIME-------------------------------------------------------------
setInterval(timer, 1000);
