import content from "./home.js";
import image0 from "../assets/burger1.jpeg";
import image1 from "../assets/chicken-strips.png";
import image2 from "../assets/grilled-cheese.jpeg";
import image3 from "../assets/lasagna.jpg";
import image4 from "../assets/pasta.jpg";
import image5 from "../assets/salad.jpg";
export { makeMenu };

const menuImages = [image0, image1, image2, image3, image4, image5];

function makeMenu() {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");
  content.appendChild(menuContent);
  for (let i = 0; i < 6; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    menuContent.appendChild(menuItem);
    for (const item of menuImages) {
      const img = new Image();
      img.src = item;
      img.classList.add(`img${[i]}`);
      menuItem.appendChild(img);
    }
  }
}
