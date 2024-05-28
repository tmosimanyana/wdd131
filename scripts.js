/* scripts.js */

document.addEventListener('DOMContentLoaded', () => {
    // Display current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Static values for temperature and wind speed
    const temperature = 5; // Celsius
    const windSpeed = 10; // km/h

    // Calculate and display wind chill
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector('.weather .windchill').textContent = `Wind Chill: ${windChill}`;

    // Function to calculate wind chill factor
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
        } else {
            return "N/A";
        }
    }
});
