import { makeFooter, makeHeader, makeHomeContent } from "./pages/home.js";
import "./style.css";
import printMe from "./print.js";
import { makeMenu } from "./pages/menu.js";

makeHeader();
makeMenu();
makeFooter();
printMe();

console.log("Hello");
