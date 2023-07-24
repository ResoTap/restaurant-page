import content from "./home";
import puzzlesAbout from "../assets/puzzles-about.jpg";
export { makeAbout };

function makeAbout() {
  const aboutTitle = document.createElement("div");
  aboutTitle.classList.add("aboutTitle");
  content.appendChild(aboutTitle);
  aboutTitle.innerHTML = "<h1>Who are we you ask?</h1>";

  const aboutPuzzlesPicCon = document.createElement("div");
  aboutPuzzlesPicCon.classList.add("aboutPuzzlesPicCon");
  content.appendChild(aboutPuzzlesPicCon);

  const img = new Image();
  img.src = puzzlesAbout;
  img.classList.add("puzzlesAbout");
  aboutPuzzlesPicCon.appendChild(img);

  const aboutBlurb = document.createElement("div");
  aboutBlurb.classList.add("aboutBlurb");
  content.appendChild(aboutBlurb);
  aboutBlurb.innerHTML =
    "From a pipe dream, thought up in a local establishment, Puzzles is where YOU are one of us. Friends out of town? Looking for a friendly smile? Down on your luck and looking for a god time? We got you covered! Here at Puzzles we strive to make sure you leave telling your friends about that magical place where there was no last call and the drinks never stopped flowing. Our goal is no matter how you feel walking through our doors that you leave having had a legen - WAIT FOR IT - ...dary time!";
}
