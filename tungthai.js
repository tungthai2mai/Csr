/* 1) Function to update the main display when the mouse hovers over a thumbnail */
function upDate(previewPic) {
    // Check if the event is triggering and what data we have
    console.log("Event Triggered"); 
    console.log("Alt Text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Select the element with the id 'image'
    var imageDiv = document.getElementById("image");

    // Change the text of the element to the alt text of the previewPic
    imageDiv.innerHTML = previewPic.alt;

    // Change the background image of the element using the source of the previewPic
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 2) Function to reset the main display when the mouse leaves the thumbnail */
function undo() {
    // Select the element with the id 'image'
    var imageDiv = document.getElementById("image");

    // Update the url for the background image back to the original value
    imageDiv.style.backgroundImage = "url('')";

    // Update the text back to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
