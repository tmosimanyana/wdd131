document.addEventListener("DOMContentLoaded", function() {
    // Array of temple objects
    var temples = [
        {
            name: "Temple 1",
            location: "Location 1",
            dedicationDate: "01/01/1800",
            area: 80000,
            image: "images/temple1.jpg"
        },
        {
            name: "Temple 2",
            location: "Location 2",
            dedicationDate: "02/02/1950",
            area: 50000,
            image: "images/temple2.jpg"
        },
        {
            name: "Temple 3",
            location: "Location 3",
            dedicationDate: "03/03/2005",
            area: 120000,
            image: "images/temple3.jpg"
        },
        {
            name: "Temple 4",
            location: "Location 4",
            dedicationDate: "04/04/1990",
            area: 30000,
            image: "images/temple4.jpg"
        },
        {
            name: "Temple 5",
            location: "Location 5",
            dedicationDate: "05/05/1890",
            area: 70000,
            image: "images/temple5.jpg"
        },
        {
            name: "Temple 6",
            location: "Location 6",
            dedicationDate: "06/06/2010",
            area: 95000,
            image: "images/temple6.jpg"
        },
        {
            name: "Temple 7",
            location: "Location 7",
            dedicationDate: "07/07/1980",
            area: 85000,
            image: "images/temple7.jpg"
        },
        {
            name: "Temple 8",
            location: "Location 8",
            dedicationDate: "08/08/1880",
            area: 40000,
            image: "images/temple8.jpg"
        },
        {
            name: "Temple 9",
            location: "Location 9",
            dedicationDate: "09/09/2015",
            area: 150000,
            image: "images/temple9.jpg"
        },
        // Add more temple objects here
        {
            name: "Temple 10",
            location: "Location 10",
            dedicationDate: "10/10/1900",
            area: 60000,
            image: "images/temple10.jpg"
        },
        {
            name: "Temple 11",
            location: "Location 11",
            dedicationDate: "11/11/1910",
            area: 92000,
            image: "images/temple11.jpg"
        },
        {
            name: "Temple 12",
            location: "Location 12",
            dedicationDate: "12/12/2012",
            area: 105000,
            image: "images/temple12.jpg"
        }
    ];

    // Function to create temple cards
    function createTempleCard(temple) {
        var card = document.createElement("div");
        card.classList.add("temple-card");

        var img = document.createElement("img");
        img.src = temple.image;
        img.alt = temple.name;
        img.loading = "lazy"; // Lazy loading
        card.appendChild(img);

        var name = document.createElement("h2");
        name.textContent = temple.name;
        card.appendChild(name);

        var location = document.createElement("p");
        location.textContent = "Location: " + temple.location;
        card.appendChild(location);

        var dedicationDate = document.createElement("p");
        dedicationDate.textContent = "Dedication Date: " + temple.dedicationDate;
        card.appendChild(dedicationDate);

        var area = document.createElement("p");
        area.textContent = "Area: " + temple.area + " sq ft";
        card.appendChild(area);

        return card;
    }

    // Function to display all temples
    function displayAllTemples() {
        var main = document.querySelector("main");
        main.innerHTML = ""; // Clear previous content

        temples.forEach(function(temple) {
            var card = createTempleCard(temple);
            main.appendChild(card);
        });
    }

    // Function to filter and display temples based on menu selection
    function filterAndDisplayTemples(filter) {
        var main = document.querySelector("main");
        main.innerHTML = ""; // Clear previous content

        temples.forEach(function(temple) {
            var dedicationYear = parseInt(temple.dedicationDate.split("/")[2]);
            if (filter === "Old" && dedicationYear < 1900) {
                var card = createTempleCard(temple);
                main.appendChild(card);
            } else if (filter === "New" && dedicationYear > 2000) {
                var card = createTempleCard(temple);
                main.appendChild(card);
            } else if (filter === "Large" && temple.area > 90000) {
                var card = createTempleCard(temple);
                main.appendChild(card);
            } else if (filter === "Small" && temple.area < 10000) {
                var card = createTempleCard(temple);
                main.appendChild(card);
            } else if (filter === "Home") {
                displayAllTemples();
            }
        });
    }

    // Update footer with the current year and last modified date
    var footerYear = document.getElementById("footer-year");
    footerYear.textContent = new Date().getFullYear();

    var lastModified = document.getElementById("last-modified");
    lastModified.textContent = new Date(document.lastModified).toLocaleDateString();

    // Responsive hamburger menu
    var hamburger = document.getElementById("hamburger");
    var navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });

    // Event listeners for filtering temples
    var filterLinks = document.querySelectorAll("nav ul li a");
    filterLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var filter = event.target.getAttribute("data-filter");
            filterAndDisplayTemples(filter);
        });
    });

    // Initial display of all temples
    displayAllTemples();
});


