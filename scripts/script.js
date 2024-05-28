// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10) && (windSpeed > 4.8)) {
        return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

// Check viewport width for hero image swap
const heroImage = document.querySelector('.hero img');
if (window.innerWidth < 600) {
    heroImage.src = 'images/hero-mobile.webp';
} else {
    heroImage.src = 'images/hero-desktop.webp';
}

// Update wind chill on page load
window.addEventListener('load', () => {
    const temperature = 5; // Example temperature in Celsius
    const windSpeed = 10; // Example wind speed in km/h
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;

    // Update footer with current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString();
});

