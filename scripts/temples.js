document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Set current year and last modified date
    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = document.lastModified;

    // Toggle navigation menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

