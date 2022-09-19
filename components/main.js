"use strict";
const main = document.querySelector("main");
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
