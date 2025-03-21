document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");

    // Retrieve stored toggle state
    const savedToggleState = localStorage.getItem("toggleState");

    if (savedToggleState === "on") {
        toggleButton.checked = true;
        hiddentoggle(); // Activate function if state was ON before reload
    } else {
        toggleButton.checked = false;
    }

    // Update localStorage and activate function on change
    toggleButton.addEventListener("change", function () {
        if (toggleButton.checked) {
            localStorage.setItem("toggleState", "on");
            hiddentoggle();
        } else {
            localStorage.setItem("toggleState", "off");
            hiddentoggle();
        }
    });
});

// Example function that will be triggered when toggled
function hiddentoggle() {
    console.log("hiddentoggle() function activated!");
    // Add your custom logic here
}
