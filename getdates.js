// Function to update the copyright year
function updateYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Function to update the last modified date
function updateLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = document.lastModified;
}

// Call the functions to update the year and last modified date
updateYear();
updateLastModified();
