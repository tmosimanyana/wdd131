document.addEventListener("DOMContentLoaded", () => {
    // Set the current year
    const yearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent += lastModified;
});
