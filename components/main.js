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

refresh.addEventListener("click", () => {
  // refresh.style.animation = "spin 0.5s linear";
});
