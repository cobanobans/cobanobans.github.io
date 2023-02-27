"use strict";
const hamburek = document.querySelector(".hamburek");
const navLinks = document.querySelector(".nav-links");
const expander = document.querySelector(".expander");
const hidden = document.querySelectorAll(".hidden");
const showMore = document.querySelector(".more");
const showLess = document.querySelector(".less-hidden");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");

hamburek.addEventListener("click", function () {
  navLinks.classList.toggle("nav-links-active");
  hamburek.classList.toggle("hamburek-active");
});
console.log(5);

expander.addEventListener("click", function () {
  hidden.forEach((hidden) => hidden.classList.toggle("hidden"));
  showMore.classList.toggle("show-more-hidden");
  // showLess.classList.toggle("show-less-hidden");
  showLess.classList.toggle("less-active");
  arrowDown.classList.toggle("arrow-down-hidden");
  arrowUp.classList.toggle("arrow-up-active");
});
