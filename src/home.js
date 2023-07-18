const contentContainer = getElementByID("content");

function makeHeader() {
  const header = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const aboutBtn = document.createElement("button");

  header.classList.add("headerContainer");
  homeBtn.classList.add("bomeBtn");
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
