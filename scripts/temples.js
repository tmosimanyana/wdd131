// temples.js
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navUl = document.querySelector('nav ul');
  
    // Set the current year
    yearSpan.textContent = new Date().getFullYear();
  
    // Set the last modified date
    lastModifiedSpan.textContent = document.lastModified;
  
    // Hamburger menu toggle
    hamburgerMenu.addEventListener('click', () => {
      navUl.classList.toggle('show');
      if (navUl.classList.contains('show')) {
        hamburgerMenu.textContent = '✖';
      } else {
        hamburgerMenu.textContent = '☰';
      }
    });
  });
  