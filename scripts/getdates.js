// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the footer
document.getElementById('currentyear').innerText = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Update the last modified date in the footer
document.getElementById('lastModified').innerText = `Last modified: ${lastModified}`;
