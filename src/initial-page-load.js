import './styles.css'

function initialPageLoad() {
    const contentElement = document.getElementById("content");
    const welcomeDiv = document.createElement("div"); 
    welcomeDiv.className = "welcomeDiv";
    const welcomeHeader = document.createElement("h1");
    welcomeHeader.textContent = "WELCOME TO THIS GREAT RESTAURANT";
    welcomeDiv.appendChild(welcomeHeader);
    contentElement.appendChild(welcomeDiv);

}

export {initialPageLoad};