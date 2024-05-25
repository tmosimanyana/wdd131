document.addEventListener("DOMContentLoaded", function() {
    // Update current year in footer
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Update last modified date in footer
    var lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString();

    // Calculate and display wind chill factor
    var temperature = 10; // Example temperature in Celsius
    var windSpeed = 5; // Example wind speed in km/h

    var windChillElement = document.getElementById('wind-chill');
    var windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = (windChill !== null) ? windChill.toFixed(1) + ' °C' : 'N/A';
});

function calculateWindChill(temperature, windSpeed) {
    // Check if conditions for wind chill calculation are met
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate wind chill factor
        var windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return windChill;
    } else {
        return null; // Conditions not met, return N/A
    }
}

