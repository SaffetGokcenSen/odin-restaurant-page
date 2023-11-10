// the function to implement the contact tab
function contactTab() {
    // access to the content element
    const contentElement = document.getElementById("content"); 
    // access to the tabContent div
    const tabContentArray = contentElement.getElementsByClassName("tabContent"); 
    const tabContent = tabContentArray[0];
    // tabContent is a flex container
    tabContent.style.display = "flex";
    // const addressDiv = document.createElement("div");
    // addressDiv.textContent = "Address: ";
    tabContent.textContent = "Address: Restaurants District Soup Street. 18/7 Lovelycountry";
    tabContent.style.justifyContent = "center";
}

// contactTab function is exported
export {contactTab};