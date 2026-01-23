/* 1. Function to update the main display area */
function upDate(previewPic) {
    // Console log to check trigger
    console.log("Event Triggered: upDate");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Get the element with id "image"
    let displayDiv = document.getElementById("image");

    // Change the text of the div to the alt text of the image
    displayDiv.innerHTML = previewPic.alt;

    // Change the background image of the div
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Reset line-height so text doesn't look weird if it wraps
    displayDiv.style.lineHeight = "normal";
    displayDiv.style.padding = "20px";
}

/* 2. Function to undo the changes */
function unDo() {
    // Console log to check trigger
    console.log("Event Triggered: unDo");

    let displayDiv = document.getElementById("image");

    // Reset back to original text
    displayDiv.innerHTML = "Hover over or tab to an image below to display here.";

    // Remove the background image
    displayDiv.style.backgroundImage = "url('')";
    
    // Reset styling
    displayDiv.style.lineHeight = "400px";
}

/* 3. The new Load function to add tabindex */
function initializeGallery() {
    console.log("Page Loaded: Initializing Gallery");

    // Get all images with the class "preview"
    let images = document.querySelectorAll(".preview");

    // Loop through each image
    for (let i = 0; i < images.length; i++) {
        // Add tabindex="0" to make it focusable via keyboard
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image " + (i + 1));
    }
}
