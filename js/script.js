document.addEventListener("DOMContentLoaded", () => {
    // Update the footer with the current year and last modified date
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    // Wind chill calculation
    function calculateWindChill(temp, windSpeed) {
        return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
    }

    // Static values for temperature and wind speed
    const temp = 30; // Example temperature in Fahrenheit
    const windSpeed = 10; // Example wind speed in mph

    // Determine if conditions are met for wind chill calculation
    if (temp <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(temp, windSpeed);
        document.getElementById("windchill-value").textContent = windChill + "°F";
    } else {
        document.getElementById("windchill-value").textContent = "N/A";
    }
});
