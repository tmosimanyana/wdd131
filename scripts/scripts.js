document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    const temperature = 10; // in °C
    const windSpeed = 5; // in km/h

    const calculateWindChill = (temp, speed) => {
        if (temp <= 10 && speed > 4.8) {
            return ((13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16)))).toFixed(2);
        }
        return "N/A";
    };

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;
});
