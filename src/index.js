// initialPageLoad function is imported
import {initialPageLoad} from "./initial-page-load.js"; 
// contactTab function is imported 
import { contactTab } from "./contact-tab.js";

// initialPageLoad function is run
initialPageLoad(); 

// the content element is accessed
const contentElement = document.getElementById("content"); 
// the contact tab button is created
const theContactTab = document.createElement("button"); 
// the contact tab button text is defined
theContactTab.textContent = "CONTACT";
// the class of the contact tab button is set
theContactTab.className = "tabButton";
// the home tab button is created
const theHomeTab = document.createElement("button");
// the home tab button text is defined
theHomeTab.textContent = "HOME";
// the class of the home tab button is set
theHomeTab.className = "tabButton";
// the menu tab button is created
const theMenuTab = document.createElement("button");
// the menu tab button text is defined
theMenuTab.textContent = "MENU"; 
// the class of the menu tab button is set
theMenuTab.className = "tabButton";
// the div to hold the tab buttons is created
const tabDiv = document.createElement("div"); 
// the class of the tab div is set
tabDiv.className = "tabDiv"; 
// the tab buttons are added to their div
tabDiv.appendChild(theHomeTab);
tabDiv.appendChild(theMenuTab);
tabDiv.appendChild(theContactTab);
// the tab div is added to the content
contentElement.appendChild(tabDiv);

// the div which will hold the tab content is created
const tabContent = document.createElement('div');
// the class of the tabContent is set
tabContent.className = "tabContent";
contentElement.appendChild(tabContent);

function contactTabPressed() {
    // the content of the tabContent div is erased
    tabContent.style.display = "none";
    // contact tab function is called
    contactTab();
}
// catches the click on the contact tab
theContactTab.addEventListener('click', contactTabPressed);