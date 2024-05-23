document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
});



