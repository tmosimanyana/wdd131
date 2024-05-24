// scripts/getdates.js

document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    // Get the current year
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Get the last modified date of the document
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedP.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
});




