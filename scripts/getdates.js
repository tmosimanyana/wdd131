document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Get the last modified date of the document
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});

