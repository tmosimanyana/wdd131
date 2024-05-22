document.addEventListener("DOMContentLoaded", () => {
    // Set current year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Static weather data
    const temperature = 25; // °C
    const windSpeed = 10; // km/h

    // Wind chill calculation
    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    // Update wind chill if conditions are met
    const windChill = (temperature <= 10 && windSpeed > 4.8) ? calculateWindChill(temperature, windSpeed).toFixed(2) + ' °C' : 'N/A';
    document.getElementById('windChill').textContent = windChill;
});

