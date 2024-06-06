document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const templeCardsContainer = document.getElementById('temple-cards');
  const currentFilterHeading = document.getElementById('currentFilter');

  const temples = [
      {
          name: 'Salt Lake Temple',
          location: 'Salt Lake City, Utah, USA',
          dedicated: '1893-04-06',
          area: 253015,
          image: 'https://path/to/salt-lake-temple.jpg',
      },
      {
          name: 'Laie Hawaii Temple',
          location: 'Laie, Hawaii, USA',
          dedicated: '1919-11-27',
          area: 47475,
          image: 'https://path/to/laie-hawaii-temple.jpg',
      },
      {
          name: 'Manila Philippines Temple',
          location: 'Manila, Philippines',
          dedicated: '1984-09-25',
          area: 26980,
          image: 'https://path/to/manila-philippines-temple.jpg',
      },
      {
          name: 'Provo City Center Temple',
          location: 'Provo, Utah, USA',
          dedicated: '2016-03-20',
          area: 85000,
          image: 'https://path/to/provo-city-center-temple.jpg',
      },
      {
          name: 'Kyiv Ukraine Temple',
          location: 'Kyiv, Ukraine',
          dedicated: '2010-08-29',
          area: 22100,
          image: 'https://path/to/kyiv-ukraine-temple.jpg',
      },
      {
          name: 'Paris France Temple',
          location: 'Le Chesnay, France',
          dedicated: '2017-05-21',
          area: 44124,
          image: 'https://path/to/paris-france-temple.jpg',
      },
      {
          name: 'Rome Italy Temple',
          location: 'Rome, Italy',
          dedicated: '2019-03-10',
          area: 40169,
          image: 'https://path/to/rome-italy-temple.jpg',
      },
      {
          name: 'Additional Temple 1',
          location: 'Location 1',
          dedicated: '2001-01-01',
          area: 100000,
          image: 'https://path/to/additional-temple-1.jpg',
      },
      {
          name: 'Additional Temple 2',
          location: 'Location 2',
          dedicated: '1899-01-01',
          area: 9000,
          image: 'https://path/to/additional-temple-2.jpg',
      },
      {
          name: 'Additional Temple 3',
          location: 'Location 3',
          dedicated: '1999-01-01',
          area: 50000,
          image: 'https://path/to/additional-temple-3.jpg',
      }
  ];

  // Set the current year in the footer
  yearSpan.textContent = new Date().getFullYear();

  // Set the last modified date in the footer
  lastModifiedSpan.textContent = document.lastModified;

  // Toggle navigation menu
  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('visible');
  });

  // Function to create and display temple cards
  function displayTemples(filteredTemples) {
      templeCardsContainer.innerHTML = ''; // Clear previous content
      filteredTemples.forEach(temple => {
          const card = document.createElement('div');
          card.classList.add('temple-card');
          card.innerHTML = `
              <figure>
                  <img src="${temple.image}" alt="${temple.name}" loading="lazy">
                  <figcaption>${temple.name}</figcaption>
              </figure>
              <p>Location: ${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Area: ${temple.area} sq ft</p>
          `;
          templeCardsContainer.appendChild(card);
      });
  }

  // Function to filter temples
  function filterTemples(criteria) {
      let filteredTemples;
      switch (criteria) {
          case 'old':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
              currentFilterHeading.textContent = 'Old Temples';
              break;
          case 'new':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
              currentFilterHeading.textContent = 'New Temples';
              break;
          case 'large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              currentFilterHeading.textContent = 'Large Temples';
              break;
          case 'small':
              filteredTemples = temples.filter(temple => temple.area < 10000);
              currentFilterHeading.textContent = 'Small Temples';
              break;
          default:
              filteredTemples = temples;
              currentFilterHeading.textContent = 'Home';
      }
      displayTemples(filteredTemples);
  }

  // Event listeners for filter buttons
  document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const filter = event.target.getAttribute('data-filter');
          filterTemples(filter);
      });
  });

  // Display all temples on initial load
  filterTemples('home');
});

