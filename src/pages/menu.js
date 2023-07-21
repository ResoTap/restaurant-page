import content from "./home.js";
import image1 from "../assets/burger1.jpeg";
import image2 from "../assets/chicken-strips.png";
import image3 from "../assets/grilled-cheese.jpeg";
import image4 from "../assets/lasagna.jpg";
import image5 from "../assets/pasta.jpg";
import image6 from "../assets/salad.jpg";
export { makeMenu };

const menuImages = [image1, image2, image3, image4, image5, image6];

function makeMenu() {
  const menuContent = document.createElement("div");
  for (let i = 0; i < 6; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    menuContent.appendChild(menuItem);
    for (const item of menuImages) {
      const img = new Image();
      img.src = item;
      img.classList.add("img");
      menuItem[i].appendChild(img);
    }
  }
}
