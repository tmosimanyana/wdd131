// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    // Get the current year and display it
    var currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Get the last modified date of the document and display it
    var lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Calculate and display wind chill
    var temperature = 28; // in Celsius
    var windSpeed = 10; // in km/h

    if (temperature <= 10 && windSpeed > 4.8) {
        var windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById('wind-chill').textContent = windChill.toFixed(2) + '°C';
    } else {
        document.getElementById('wind-chill').textContent = 'N/A';
    }
});

function calculateWindChill(temperature, windSpeed) {
    // Formula for calculating wind chill factor
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}


