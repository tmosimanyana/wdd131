// getdates.js
document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    const currentYearElement = document.getElementById("currentyear");
    currentYearElement.textContent = new Date().getFullYear();
  
    // Set the last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
  });
  