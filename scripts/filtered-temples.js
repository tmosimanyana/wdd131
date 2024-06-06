document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const templeCardsContainer = document.getElementById('temple-cards');
    const currentFilterHeading = document.getElementById('currentFilter');

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-lds-1007913-wallpaper.jpg"
        },
        {
            templeName: "Hong Kong China",
            location: "Hong Kong, China",
            dedicated: "1996, May, 26",
            area: 28000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-temple-exterior.jpg"
        },
        {
            templeName: "Kyiv Ukraine",
            location: "Kyiv, Ukraine",
            dedicated: "2010, August, 29",
            area: 22943,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-1014892-wallpaper.jpg"
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
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                    <figcaption>${temple.templeName}</figcaption>
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
