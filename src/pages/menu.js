import content from "./home.js";
import image0 from "../assets/burger1.jpeg";
import image1 from "../assets/chicken-strips.png";
import image2 from "../assets/grilled-cheese.jpeg";
import image3 from "../assets/lasagna.jpg";
import image4 from "../assets/pasta.jpg";
import image5 from "../assets/salad.jpg";
export { makeMenu };

let menuImages = [image0, image1, image2, image3, image4, image5];

function makeMenu() {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");
  content.appendChild(menuContent);
  for (let i = 0; i < 6; i++) {
    const menuItem = document.createElement("div");
    menuItem.setAttribute("id", `menuItem${i}`);
    menuContent.appendChild(menuItem);

    const img = new Image();
    img.src = menuImages[i];
    img.classList.add(`img${[i]}`);
    menuItem.appendChild(img);

    const menuItemText = document.createElement("div");
    menuItemText.classList.add(`menuItemText${[i]}`);
    menuItem.appendChild(menuItemText);
  }
  const menuItemText0 = document.querySelector(".menuItemText0");
  menuItemText0.innerHTML = "Burger and fries.";

  const menuItemText1 = document.querySelector(".menuItemText1");
  menuItemText1.innerHTML = "Chicken Strips.";

  const menuItemText2 = document.querySelector(".menuItemText2");
  menuItemText2.innerHTML = "Grilled Cheese.";

  const menuItemText3 = document.querySelector(".menuItemText3");
  menuItemText3.innerHTML = "Lasagna.";

  const menuItemText4 = document.querySelector(".menuItemText4");
  menuItemText4.innerHTML = "Pasta.";

  const menuItemText5 = document.querySelector(".menuItemText5");
  menuItemText5.innerHTML = "Salad.";
}
