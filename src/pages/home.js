export { makeHeader, makeHomeContent, makeFooter };
import Puzzles from "../assets/puzzles.jpg";

const content = document.createElement("div");
export default content;

export const homeBtn = document.createElement("button");
export const menuBtn = document.createElement("button");
export const aboutBtn = document.createElement("button");

function makeHeader() {
  const header = document.createElement("div");

  header.classList.add("headerContainer");
  homeBtn.classList.add("homeBtn");
  menuBtn.classList.add("menuBtn");
  aboutBtn.classList.add("aboutBtn");
  content.id = "content";

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(homeBtn);
  header.appendChild(menuBtn);
  header.appendChild(aboutBtn);

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  aboutBtn.textContent = "About";
}

function makeHomeContent() {
  const homeContentContainer = document.createElement("div");
  const homeContentTitle = document.createElement("div");
  const homeContentImgContainer = document.createElement("div");
  const puzzlesImg = new Image();
  const homeContentBlurb = document.createElement("div");

  homeContentContainer.classList.add("homeContentContainer");
  homeContentTitle.classList.add("homeContentTitle");
  homeContentImgContainer.classList.add("homeContentImgContainer");
  puzzlesImg.classList.add("puzzlesImg");
  homeContentBlurb.classList.add("homeContentBlurb");

  content.appendChild(homeContentContainer);
  homeContentContainer.appendChild(homeContentTitle);
  homeContentContainer.appendChild(homeContentImgContainer);
  homeContentContainer.appendChild(puzzlesImg);
  homeContentContainer.appendChild(homeContentBlurb);

  homeContentTitle.innerHTML = "<h1>Puzzles Bar & Grill</h1>";
  puzzlesImg.src = Puzzles;
  homeContentBlurb.textContent =
    'Welcome to your favorite neighborhood establishment to drink, be merry, and make memories! Looking for a drink? Food? A friendly face? Come on down to Puzzles where the only question you will be left with is... "Why is the name of this place Puzzles?';
}

function makeFooter() {
  const footer = document.createElement("div");
  const footerContent = document.createElement("div");

  footer.classList.add("footer");
  footerContent.classList.add("footerContent");

  content.appendChild(footer);
  footer.appendChild(footerContent);

  footerContent.innerHTML = "<em>What up?</em>";
}
