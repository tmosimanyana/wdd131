// Get the current year and update the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').innerText = currentYear;

// Get the last modified date of the document and update the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').innerText = "Last Modified: " + lastModified;

