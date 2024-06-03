document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    
    // Update the current year in the footer
    var currentYearSpan = document.getElementById("currentyear");
    currentYearSpan.textContent = currentYear;

    // Get the last modified date of the document
    var lastModifiedDate = document.lastModified;
    
    // Update the last modified date in the footer
    var lastModifiedParagraph = document.getElementById("lastModified");
    lastModifiedParagraph.textContent = "Last Modified: " + lastModifiedDate;
});
