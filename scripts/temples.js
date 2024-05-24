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
    var nav = document.querySelector("nav");

    // Initially hide navigation menu
    nav.style.display = "none";

    // Add click event listener to hamburger button
    hamburger.addEventListener("click", function() {
        if (nav.style.display === "none") {
            nav.style.display = "flex";
        } else {
            nav.style.display = "none";
        }
    });
});
