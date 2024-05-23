document.addEventListener("DOMContentLoaded", function() {
    // Populate the current year
    const currentYearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Populate the last modified date
    const lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
});

