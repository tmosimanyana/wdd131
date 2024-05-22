// getdates.js

// Function to set the current year in the footer
function setCurrentYear() {
    const currentYearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Function to set the last modified date in the footer
function setLastModified() {
    const lastModifiedParagraph = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
}

// Call the functions to set the dates
setCurrentYear();
setLastModified();

