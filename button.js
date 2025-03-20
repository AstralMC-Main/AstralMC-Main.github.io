document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const toggleStatus = document.getElementById("toggleStatus");

    // Retrieve stored toggle state
    const savedToggleState = localStorage.getItem("toggleState");

    if (savedToggleState === "on") {
        toggleButton.checked = true;
        toggleStatus.textContent = "ON";
    } else {
        toggleButton.checked = false;
        toggleStatus.textContent = "OFF";
    }

    // Update localStorage when the toggle changes
    toggleButton.addEventListener("change", function () {
        if (toggleButton.checked) {
            localStorage.setItem("toggleState", "on");
            toggleStatus.textContent = "ON";
        } else {
            localStorage.setItem("toggleState", "off");
            toggleStatus.textContent = "OFF";
        }
    });
});