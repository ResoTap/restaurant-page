import puzzles from "./assets/puzzles.jpg";
export { makeHeader, makeHomeContent };

const contentContainer = document.querySelector("#content");

function makeHeader() {
  const header = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const aboutBtn = document.createElement("button");

  header.classList.add("headerContainer");
  homeBtn.classList.add("homeBtn");
  menuBtn.classList.add("menuBtn");
  aboutBtn.classList.add("aboutBtn");

  contentContainer.appendChild(header);
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
  const puzzlesImg = document.createElement("img");
  const homeContentBlurb = document.createElement("div");

  homeContentContainer.classList.add("homeContentContainer");
  homeContentTitle.classList.add("homeContentTitle");
  homeContentImgContainer.classList.add("homeContentImgContainer");
  puzzlesImg.classList.add("puzzlesImg");
  homeContentBlurb.classList.add("homeContentBlurb");

  contentContainer.appendChild(homeContentContainer);
  homeContentContainer.appendChild(homeContentTitle);
  homeContentContainer.appendChild(homeContentImgContainer);
  homeContentContainer.appendChild(puzzlesImg);
  homeContentContainer.appendChild(homeContentBlurb);

  homeContentTitle.innerHTML = "<h1>Puzzles Bar & Grill</h1>";
  puzzlesImg.src = puzzles;
}
