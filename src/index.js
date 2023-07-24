import { makeFooter, makeHeader, makeHomeContent } from "./pages/home.js";
import "./style.css";
import printMe from "./print.js";
import { makeMenu } from "./pages/menu.js";
import { makeAbout } from "./pages/about.js";

makeHeader();
makeAbout();
makeFooter();
printMe();

console.log("Hello");
