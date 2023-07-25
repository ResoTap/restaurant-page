import { makeFooter, makeHeader, makeHomeContent } from "./pages/home.js";
import "./style.css";
import { makeMenu } from "./pages/menu.js";
import { makeAbout } from "./pages/about.js";
import { homeBtn, aboutBtn, menuBtn } from "./pages/home.js";
import content from "./pages/home.js";

document.addEventListener("DOMContentLoaded", () => {
  makeHeader();
  makeHomeContent();
  makeFooter();
});

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  makeHeader();
  makeHomeContent();
  makeFooter();
});

aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  makeHeader();
  makeAbout();
  makeFooter();
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  makeHeader();
  makeMenu();
  makeFooter();
});

console.log("Hello");
