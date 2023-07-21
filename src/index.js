import { makeFooter, makeHeader, makeHomeContent } from "./pages/home.js";
import "./style.css";
import printMe from "./print.js";

makeHeader();
makeHomeContent();
makeFooter();
printMe();

console.log("Hello");
