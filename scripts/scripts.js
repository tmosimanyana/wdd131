// scripts/scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(1);
        } else {
            return "N/A";
        }
    }

    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;
});
