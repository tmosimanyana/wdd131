document.addEventListener('DOMContentLoaded', () => {
    // Function to calculate wind chill factor
    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8) ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) : 'N/A';
    }

    // Static values for temperature and wind speed
    const temperatureCelsius = 8; // Static temperature in Celsius
    const windSpeedKmh = 6; // Static wind speed in kilometers per hour

    const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);

    // Display wind chill factor in the "Weather" section
    const weatherSection = document.getElementById('weather');
    const windchillElement = document.createElement('p');
    windchillElement.textContent = `Windchill: ${windChill} °C`;
    weatherSection.appendChild(windchillElement);

    // Display current year and last modified date in footer
    const currentYearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastModifiedElement = document.getElementById('last-modified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;
});
