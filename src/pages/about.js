import content from "./home";

function makeAbout() {
  const aboutTitle = document.createElement("div");
  aboutTitle.classList.add("aboutTitle");
  content.appendChild(aboutTitle);

  const aboutPuzzlesPicCon = document.createElement("div");
  aboutPuzzlesPicCon.classList.add("aboutPuzzlesPicCon");
  content.appendChild(aboutPuzzlesPicCon);
}
