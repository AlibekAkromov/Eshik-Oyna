var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

var open_burger = document.getElementById("open_burger");
var main = document.querySelector("#main");
var footer = document.querySelector("#footer");
var header = document.querySelector("#header");
var burger_anim = document.getElementById("burger_anim");
var burger_close = document.getElementById("close_burger");
var opacity_50 = document.getElementById("opacity-50");

open_burger.addEventListener("click", function () {
  burger_anim.classList.toggle("translate-x-full");
  burger_anim.classList.toggle("translate-x-0");
  burger_anim.classList.toggle("scale-0");
  burger_anim.classList.toggle("scale-90");
  burger_anim.classList.toggle("z-30");
  burger_anim.classList.toggle("z-0");
  opacity_50.classList.toggle("h-0");
  opacity_50.classList.toggle("h-screen");
});

burger_close.addEventListener("click", function () {
  burger_anim.classList.toggle("translate-x-full");
  burger_anim.classList.toggle("translate-x-0");
  burger_anim.classList.toggle("scale-0");
  burger_anim.classList.toggle("scale-90");
  burger_anim.classList.toggle("z-30");
  burger_anim.classList.toggle("z-0");
  opacity_50.classList.toggle("h-0");
  opacity_50.classList.toggle("h-screen");
  opacity_50.classList.toggle("transition-all");
  opacity_50.classList.toggle("duration-500");
});
