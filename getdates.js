document.addEventListener('DOMContentLoaded', function() {
    // Get current year and update the span element
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Get last modified date and update the paragraph element
    document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
});
