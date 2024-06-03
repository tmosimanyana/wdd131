// JavaScript File to get dates and modify the HTML dynamically

document.addEventListener("DOMContentLoaded", () => {
    // Set the current year in the footer
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set the last modified date in the footer
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
});
