document.addEventListener("DOMContentLoaded", function() {
    // Calculate wind chill factor
    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(1);
        } else {
            return "N/A";
        }
    }

    // Update wind chill factor on the page
    const temperatureElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("wind-speed");
    const windChillElement = document.getElementById("wind-chill");

    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill;

    // Update the footer with the current year and last modified date
    const currentYearElement = document.getElementById("current-year");
    const lastModifiedElement = document.getElementById("last-modified");

    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModified.toDateString();
});
