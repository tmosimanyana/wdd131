document.addEventListener('DOMContentLoaded', function() {
    // Array of temple objects
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        // Add more temple objects here...
    ];

    // Function to create temple cards dynamically
    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = 'lazy';

        const name = document.createElement('h2');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = 'Location: ' + temple.location;

        const dedicated = document.createElement('p');
        dedicated.textContent = 'Dedicated: ' + temple.dedicated;

        const area = document.createElement('p');
        area.textContent = 'Area: ' + temple.area + ' sq ft';

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        return card;
    }

    // Function to filter and display temples
    function filterTemples(category) {
        const templeGallery = document.getElementById('temple-gallery');
        templeGallery.innerHTML = '';

        if (category === 'all') {
            temples.forEach(temple => {
                templeGallery.appendChild(createTempleCard(temple));
            });
        } else {
            const filteredTemples = temples.filter(temple => {
                if (category === 'old') {
                    return temple.dedicated.split(',')[0] < 1900;
                } else if (category === 'new') {
                    return temple.dedicated.split(',')[0] > 2000;
                } else if (category === 'large') {
                    return temple.area > 90000;
                } else if (category === 'small') {
                    return temple.area < 10000;
                }
            });

            filteredTemples.forEach(temple => {
                templeGallery.appendChild(createTempleCard(temple));
            });
        }
    }

    // Function to update footer copyright year and last modified date
    function updateFooter() {
        const yearSpan = document.getElementById('year');
        const lastModifiedSpan = document.getElementById('lastModified');
        
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;

        const lastModifiedDate = new Date(document.lastModified);
        lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString();
    }

    // Initialize footer
    updateFooter();
});

