// Get the button and popup elements
const wishButton = document.getElementById("wish-button");
const wishPopup = document.getElementById("wish-popup");
const closeBtn = document.querySelector(".close-btn");

// Show the popup when the button is clicked
wishButton.addEventListener("click", function() {
    wishPopup.style.display = "flex"; // Show the popup
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", function() {
    wishPopup.style.display = "none"; // Hide the popup
});

// Close the popup when clicking outside of the popup content
window.addEventListener("click", function(event) {
    if (event.target === wishPopup) {
        wishPopup.style.display = "none"; // Hide the popup
    }
});

