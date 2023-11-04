import {initialPageLoad} from "./initial-page-load.js";

initialPageLoad(); 

const contentElement = document.getElementById("content"); 
const theContactTab = document.createElement("button"); 
theContactTab.textContent = "CONTACT";
const theHomeTab = document.createElement("button");
theHomeTab.textContent = "HOME";
const theMenuTab = document.createElement("button");
theMenuTab.textContent = "MENU"; 
const tabDiv = document.createElement("div"); 
tabDiv.className = "tabDiv";
tabDiv.appendChild(theHomeTab);
tabDiv.appendChild(theMenuTab);
tabDiv.appendChild(theContactTab);
contentElement.appendChild(tabDiv);
