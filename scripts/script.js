document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified).toLocaleDateString();

    document.getElementById('copyright-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;

    const temperature = 10; // Example temperature in Celsius
    const windSpeed = 5; // Example wind speed in m/s

    if (temperature <= 10 && windSpeed > 4.8) {
        document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed).toFixed(2);
    }
});

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}
