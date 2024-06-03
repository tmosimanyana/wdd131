// getdates.js

document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modified: " + lastModified;
});
