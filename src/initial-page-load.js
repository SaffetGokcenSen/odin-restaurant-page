import './styles.css' // the styling file is imported

// this function makes the initial page load
function initialPageLoad() {
    // the element with the content of the webpage is accessed
    const contentElement = document.getElementById("content");
    // the div where the welcome header is written is created
    const welcomeDiv = document.createElement("div"); 
    // the class of the welcome div is set
    welcomeDiv.className = "welcomeDiv";
    // the welcome header is created
    const welcomeHeader = document.createElement("h1");
    // the welcome message is defined
    welcomeHeader.textContent = "WELCOME TO THIS GREAT RESTAURANT";
    // the welcome message is added to the welcome div 
    welcomeDiv.appendChild(welcomeHeader);
    // the welcome div is added to the content
    contentElement.appendChild(welcomeDiv);
}

// initialPageLoad function is exported to be used
export {initialPageLoad};