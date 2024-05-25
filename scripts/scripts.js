document.addEventListener("DOMContentLoaded", function() {
    // Display current year and last modified date in the footer
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    // Static values for temperature and wind speed
    const temperatureC = 5; // example temperature in Celsius
    const windSpeedKmh = 10; // example wind speed in km/h

    // Calculate and display wind chill factor
    const windChillElement = document.querySelector('#weather .windchill');
    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(temperatureC, windSpeedKmh);
        windChillElement.textContent = `Wind Chill: ${windChill.toFixed(2)} °C`;
    } else {
        windChillElement.textContent = 'Wind Chill: N/A';
    }
});

// Function to calculate wind chill factor in Celsius
function calculateWindChill(tempC, windSpeedKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16);
}
