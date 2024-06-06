document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Set the current year in the footer
    yearSpan.textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    lastModifiedSpan.textContent = document.lastModified;

    // Toggle navigation menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
    });
});
