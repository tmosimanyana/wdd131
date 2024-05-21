// script.js
document.addEventListener('DOMContentLoaded', () => {
    displayFooterDate();
    calculateAndDisplayWindChill();
});

function displayFooterDate() {
    const footerDateElement = document.getElementById('footer-date');
    const currentDate = new Date();
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    footerDateElement.textContent = `© ${currentDate.getFullYear()} | Last modified: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;
}

function calculateAndDisplayWindChill() {
    const temperature = 10; // Example temperature in Celsius
    const windSpeed = 10; // Example wind speed in km/h
    const windChillElement = document.querySelector('.windchill');

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `Wind Chill: ${windChill.toFixed(1)}°C`;
    } else {
        windChillElement.textContent = 'Wind Chill: N/A';
    }
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}
