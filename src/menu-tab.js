// the images for the dishes are imported
import Dish1 from './dish1.png'; 
import Dish2 from './dish2.png'; 
import Dish3 from './dish3.png'; 

// the function to implement the menu tab
function menuTab() {
    // access to the content element
    const contentElement = document.getElementById("content"); 
    // access to the tabContent div
    const tabContentArray = contentElement.getElementsByClassName("tabContent"); 
    const tabContent = tabContentArray[0];
    // tabContent is a flex container
    tabContent.style.display = "flex";
    // the styling for the tabContent
    tabContent.style.flexDirection = "column";
    tabContent.style.justifyContent = "center";
    tabContent.style.alignItems = "center";
    tabContent.style.gap = "1.0rem";
    tabContent.style.fontSize = "1.5rem";
    tabContent.style.color = "yellowgreen";
    tabContent.style.fontWeight = "bold"; 
} 

// the menu tab function is exported
export { menuTab };