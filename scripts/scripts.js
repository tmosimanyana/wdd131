document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Function to calculate wind chill
    function calculateWindChill(temp, speed) {
        return (temp <= 10 && speed > 4.8) ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) : 'N/A';
    }

    // Usage example
    const temperature = 5; // Celsius
    const windSpeed = 10; // km/h
    const windChill = calculateWindChill(temperature, windSpeed);
    console.log('Wind Chill:', windChill);
});

