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
        },
        {
            templeName: "Paris France",
            location: "Le Chesnay, France",
            dedicated: "2017, May, 21",
            area: 44500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior.jpg"
        },
        {
            templeName: "São Paulo Brazil",
            location: "São Paulo, Brazil",
            dedicated: "1978, October, 30",
            area: 54500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-exterior.jpg"
        },
        {
            templeName: "Johannesburg South Africa",
            location: "Johannesburg, South Africa",
            dedicated: "1985, August, 24",
            area: 55556,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-exterior.jpg"
        },
        {
            templeName: "Laie Hawaii",
            location: "Laie, Hawaii, United States",
            dedicated: "1919, November, 27",
            area: 40000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-hawaii-temple-exterior.jpg"
        },
        {
            templeName: "Frankfurt Germany",
            location: "Friedrichsdorf, Germany",
            dedicated: "1987, August, 28",
            area: 45000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple-exterior.jpg"
        },
        {
            templeName: "Accra Ghana",
            location: "Accra, Ghana",
            dedicated: "2004, January, 11",
            area: 17300,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-exterior.jpg"
        },
        {
            templeName: "Santiago Chile",
            location: "Santiago, Chile",
            dedicated: "1983, September, 15",
            area: 23633,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-temple-exterior.jpg"
        },
        {
            templeName: "Cardston Alberta",
            location: "Cardston, Alberta, Canada",
            dedicated: "1923, August, 26",
            area: 88000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/400x250/cardston-alberta-temple-exterior.jpg"
        },
        {
            templeName: "Palmyra New York",
            location: "Palmyra, New York, United States",
            dedicated: "2000, April, 6",
            area: 10700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-new-york-temple-exterior.jpg"
        },
        {
            templeName: "Cebu City Philippines",
            location: "Cebu City, Philippines",
            dedicated: "2010, June, 13",
            area: 21500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x250/cebu-city-philippines-temple-exterior.jpg"
        }
    ];

    function displayTemples(filteredTemples) {
        templeCardsContainer.innerHTML = '';
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');
            
            templeCard.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;
            
            templeCardsContainer.appendChild(templeCard);
        });
    }

    function filterTemples(criteria) {
        let filteredTemples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }
        currentFilterHeading.textContent = criteria.charAt(0).toUpperCase() + criteria.slice(1);
        displayTemples(filteredTemples);
    }

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            filterTemples(e.target.dataset.filter);
        }
    });

    displayTemples(temples); // Initial display of all temples
});
