// the function to implement the home tab
function homeTab() {
    // access to the content element
    const contentElement = document.getElementById("content"); 
    // access to the tabContent div
    const tabContentArray = contentElement.getElementsByClassName("tabContent"); 
    const tabContent = tabContentArray[0];
    // tabContent is a flex container
    tabContent.style.display = "flex";
    tabContent.style.flexDirection = "column";
    tabContent.style.justifyContent = "center";
    tabContent.style.alignItems = "center";
    tabContent.style.gap = "1.0rem";
    tabContent.style.fontSize = "1.2rem";
    tabContent.style.color = "yellowgreen";
    tabContent.style.fontWeight = "bold"; 
    // restauran name div is created 
    const introductionDiv = document.createElement("div");
    introductionDiv.style.width = "33vw";
    const theText = `Şen's Vegan Heaven offers the best vegan menu. Fresh, 
    healthy and delicious food look forward to you. Of course, there are tasty 
    drinks, as well. Do not hesitate to come to the address in the contact tab 
    whenever you request a really great vegan menu.`;
    introductionDiv.textContent = theText; 
    tabContent.appendChild(introductionDiv);
}

export {homeTab};