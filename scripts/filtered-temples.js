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
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-square.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple.jpg"
    }
];

function createTempleCard(temple) {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

function displayTemples(filterFn) {
    const templeGallery = document.getElementById('temple-gallery');
    templeGallery.innerHTML = '';

    temples
        .filter(filterFn)
        .forEach(temple => {
            const templeCard = createTempleCard(temple);
            templeGallery.appendChild(templeCard);
        });
}

document.getElementById('all').addEventListener('click', () => {
    displayTemples(() => true);
    document.getElementById('selection-title').textContent = 'All Temples';
});

document.getElementById('old').addEventListener('click', () => {
    displayTemples(temple => new Date(temple.dedicated).getFullYear() < 1900);
    document.getElementById('selection-title').textContent = 'Old Temples';
});

document.getElementById('new').addEventListener('click', () => {
    displayTemples(temple => new Date(temple.dedicated).getFullYear() > 2000);
    document.getElementById('selection-title').textContent = 'New Temples';
});

document.getElementById('large').addEventListener('click', () => {
    displayTemples(temple => temple.area > 90000);
    document.getElementById('selection-title').textContent = 'Large Temples';
});

document.getElementById('small').addEventListener('click', () => {
    displayTemples(temple => temple.area < 10000);
    document.getElementById('selection-title').textContent = 'Small Temples';
});

// Set the footer information
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initial display of all temples
displayTemples(() => true);
