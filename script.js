// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for wind chill calculation
    if ((temperature <= 10 && temperature >= -50) && (windSpeed > 4.8)) {
        // Calculate wind chill factor
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        // Conditions not met for wind chill calculation
        return "N/A";
    }
}

// Update wind chill factor
window.onload = function() {
    var temperature = 5; // Example temperature in Celsius
    var windSpeed = 10; // Example wind speed in km/h
    var windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").innerText = windChill;
};
