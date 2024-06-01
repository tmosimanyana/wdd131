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
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-lds-244739-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119620,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-utah-temple-lds-232755-wallpaper.jpg"
    },
    {
        templeName: "Provo Utah",
        location: "Provo, Utah, United States",
        dedicated: "1972, February, 9",
        area: 128325,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-utah-temple-exterior-1290-wallpaper.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-ldschurch-400x250-1.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-1084-wallpaper.jpg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        </figcaption>
    `;
    return card;
}

function displayTemples(filterFn) {
    const gallery = document.getElementById('temple-gallery');
    gallery.innerHTML = '';
    temples.filter(filterFn).forEach(temple => {
        gallery.appendChild(createTempleCard(temple));
    });
}

document.getElementById('home').addEventListener('click', () => {
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

// Initialize with all temples displayed
displayTemples(() => true);

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
