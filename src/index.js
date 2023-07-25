import { makeFooter, makeHeader, makeHomeContent } from "./pages/home.js";
import "./style.css";
import printMe from "./print.js";
import { makeMenu } from "./pages/menu.js";
import { makeAbout } from "./pages/about.js";
import { homeBtn, aboutBtn, menuBtn } from "./pages/home.js";

document.addEventListener("DOMContentLoaded", () => {
  makeHeader();
  makeHomeContent();
  makeFooter();
});

homeBtn.addEventListener("click", () => {
  makeHeader();
  makeHomeContent();
  makeFooter();
});

aboutBtn.addEventListener("click", () => {
  makeHeader();
  makeAbout();
  makeFooter();
});

menuBtn.addEventListener("click", () => {
  makeHeader();
  makeMenu();
  makeFooter();
});

console.log("Hello");
