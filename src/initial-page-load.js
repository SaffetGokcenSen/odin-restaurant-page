import Picture1 from './src/anna-pelzer-IGfIGP5ONV0-unsplash.jpg' 

function initialPageLoad() {
    const contentElement = document.getElementById("content");

    // Photo by <a href="https://unsplash.com/@annapelzer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Pelzer</a> on <a href="https://unsplash.com/photos/IGfIGP5ONV0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    const thePicture = new Image();
    thePicture.src = Picture1;
    contentElement.appendChild(thePicture);

    return contentElement;
}

document.body.appendChild(initialPageLoad());