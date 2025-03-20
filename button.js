document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");

    // Retrieve stored toggle state
    const savedToggleState = localStorage.getItem("toggleState");

    console.log("Saved Toggle State:", savedToggleState); // Debugging log

    if (savedToggleState === "on") {
        toggleButton.checked = true;
    } else if (savedToggleState === "off") {
        toggleButton.checked = false;
    }

    // Update localStorage when the toggle changes
    toggleButton.addEventListener("change", function () {
        if (toggleButton.checked) {
            localStorage.setItem("toggleState", "on");
        } else {
            localStorage.setItem("toggleState", "off");
        }
    });
});
