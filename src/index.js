import {initialPageLoad} from "./initial-page-load.js";

initialPageLoad(); 

const contentElement = document.getElementById("content"); 
const theContactTab = document.createElement("button"); 
theContactTab.textContent = "CONTACT";
theContactTab.className = "tabButton";
const theHomeTab = document.createElement("button");
theHomeTab.textContent = "HOME";
theHomeTab.className = "tabButton";
const theMenuTab = document.createElement("button");
theMenuTab.textContent = "MENU"; 
theMenuTab.className = "tabButton";
const tabDiv = document.createElement("div"); 
tabDiv.className = "tabDiv";
tabDiv.appendChild(theHomeTab);
tabDiv.appendChild(theMenuTab);
tabDiv.appendChild(theContactTab);
contentElement.appendChild(tabDiv);
