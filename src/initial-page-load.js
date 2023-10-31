import './styles.css'

function initialPageLoad() {
    const contentElement = document.getElementById("content");

    const welcomeHeader = document.createElement("h1");
    welcomeHeader.textContent = "WELCOME TO THIS GREAT RESTAURANT";
    contentElement.appendChild(welcomeHeader);

}

export {initialPageLoad};