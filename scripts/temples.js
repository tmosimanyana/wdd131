document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navUl = document.querySelector('nav ul');
  const gallery = document.querySelector('.gallery');

  // Set the current year
  yearSpan.textContent = new Date().getFullYear();

  // Set the last modified date
  lastModifiedSpan.textContent = document.lastModified;

  // Sample array of temple objects
  const temples = [
      {
          name: 'Sample Temple 1',
          location: 'Sample Location 1',
          dedicationDate: '01/01/2000',
          totalArea: '10000 sq ft',
          imageUrl: 'images/sample1.jpg',
          alt: 'Sample Temple 1'
      },
      {
          name: 'Sample Temple 2',
          location: 'Sample Location 2',
          dedicationDate: '01/01/2010',
          totalArea: '80000 sq ft',
          imageUrl: 'images/sample2.jpg',
          alt: 'Sample Temple 2'
      },
      // Add more temple objects here
  ];

  // Function to create temple card HTML
  function createTempleCard(temple) {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
          <h2>${temple.name}</h2>
          <p>${temple.location}</p>
          <p>Dedication Date: ${temple.dedicationDate}</p>
          <p>Total Area: ${temple.totalArea}</p>
      `;

      return card;
  }

  // Function to render temple cards
  function renderTempleCards(templeArray) {
      gallery.innerHTML = '';
      templeArray.forEach(temple => {
          const card = createTempleCard(temple);
          gallery.appendChild(card);
      });
  }

  // Initial render of all temples
  renderTempleCards(temples);

  // Hamburger menu toggle
  hamburgerMenu.addEventListener('click', () => {
      navUl.classList.toggle('show');
      if (navUl.classList.contains('show')) {
          hamburgerMenu.textContent = '✖';
      } else {
          hamburgerMenu.textContent = '☰';
      }
  });

  // Filter temples based on menu selection
  navUl.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.dataset.filter;
      if (filter === 'Home') {
          renderTempleCards(temples);
      } else {
          const filteredTemples = temples.filter(temple => {
              if (filter === 'Old') {
                  return parseInt(temple.dedicationDate.split('/')[2]) < 1900;
              } else if (filter === 'New') {
                  return parseInt(temple.dedicationDate.split('/')[2]) > 2000;
              } else if (filter === 'Large') {
                  return parseInt(temple.totalArea) > 90000;
              } else if (filter === 'Small') {
                  return parseInt(temple.totalArea) < 10000;
              }
          });
          renderTempleCards(filteredTemples);
      }
  });
});
