import {initialPageLoad} from "./initial-page-load.js";

initialPageLoad(); 

const contentElement = document.getElementById("content"); 
const theContactTab = document.createElement("button"); 
theContactTab.textContent = "CONTACT";
const theHomeTab = document.createElement("button");
theHomeTab.textContent = "HOME";
const theMenuTab = document.createElement("button");
theMenuTab.textContent = "MENU"; 
contentElement.appendChild(theHomeTab);
contentElement.appendChild(theMenuTab);
contentElement.appendChild(theContactTab);
