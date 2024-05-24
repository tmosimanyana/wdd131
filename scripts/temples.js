document.addEventListener("DOMContentLoaded", function() {
    // Update footer copyright year
    var footerYear = document.querySelector("#footer-year");
    var currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;

    // Update last modified date
    var lastModified = document.querySelector("#last-modified");
    var lastModifiedDate = new Date(document.lastModified);
    lastModified.textContent = lastModifiedDate.toLocaleDateString();

    // Responsive hamburger menu
    var hamburger = document.querySelector("#hamburger");
    var nav = document.querySelector

