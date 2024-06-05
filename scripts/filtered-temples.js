// filtered-temples.js
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const gallery = document.getElementById('gallery');
  
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
  
    // Temple data array
    const temples = [
      { name: "Temple 1", location: "Location 1", dedication: "1900-01-01", area: 50000, imgSrc: "https://example.com/images/temple1.jpg" },
      { name: "Temple 2", location: "Location 2", dedication: "1910-01-01", area: 120000, imgSrc: "https://example.com/images/temple2.jpg" },
      { name: "Temple 3", location: "Location 3", dedication: "2005-01-01", area: 80000, imgSrc: "https://example.com/images/temple3.jpg" },
      { name: "Temple 4", location: "Location 4", dedication: "1980-01-01", area: 95000, imgSrc: "https://example.com/images/temple4.jpg" },
      { name: "Temple 5", location: "Location 5", dedication: "2015-01-01", area: 110000, imgSrc: "https://example.com/images/temple5.jpg" },
      { name: "Temple 6", location: "Location 6", dedication: "1890-01-01", area: 40000, imgSrc: "https://example.com/images/temple6.jpg" },
      { name: "Temple 7", location: "Location 7", dedication: "2020-01-01", area: 150000, imgSrc: "https://example.com/images/temple7.jpg" },
      { name: "Temple 8", location: "Location 8", dedication: "2022-01-01", area: 30000, imgSrc: "https://example.com/images/temple8.jpg" },
      { name: "Temple 9", location: "Location 9", dedication: "1990-01-01", area: 60000, imgSrc: "https://example.com/images/temple9.jpg" },
      { name: "Temple 10", location: "Location 10", dedication: "2023-01-01", area: 70000, imgSrc: "https://example.com/images/temple10.jpg" }
    ];
  
    // Function to create and display temple cards
    const displayTemples = (temples) => {
      gallery.innerHTML = '';
      temples.forEach(temple => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        
        img.src = temple.imgSrc;
        img.alt = temple.name;
        img.loading = 'lazy';
        figcaption.innerHTML = `
          <h3>${temple.name}</h3>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedication}</p>
          <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        `;
        
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
      });
    };
  
    // Display all temples initially
    displayTemples(temples);
  
    // Filter functions
    const filterOld = () => {
      const filtered = temples.filter(temple => new Date(temple.dedication) < new Date('1900-01-01'));
      displayTemples(filtered);
    };
  
    const filterNew = () => {
      const filtered = temples.filter(temple => new Date(temple.dedication) > new Date('2000-01-01'));
      displayTemples(filtered);
    };
  
    const filterLarge = () => {
      const filtered = temples.filter(temple => temple.area > 90000);
      displayTemples(filtered);
    };
  
    const filterSmall = () => {
      const filtered = temples.filter(temple => temple.area < 10000);
      displayTemples(filtered);
    };
  
    const filterHome
  