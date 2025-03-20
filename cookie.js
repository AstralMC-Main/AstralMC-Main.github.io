// Check if cookies are accepted
function checkCookieConsent() {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (cookieConsent === "true") {
        document.getElementById("cookie-banner").style.display = "none";
    }
}

// Handle the "Got it!" button click
function acceptCookies() {
    localStorage.setItem("cookie-consent", "true");
    document.getElementById("cookie-banner").style.display = "none";
}

// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    checkCookieConsent();

    const acceptButton = document.getElementById("accept-cookies");
    if (acceptButton) {
        acceptButton.addEventListener("click", acceptCookies);
    }
});
