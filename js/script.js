// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const temperature = 25; // Static value for now
    const windSpeed = 15; // Static value for now

    const windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("windSpeed").textContent = `${windSpeed} km/h`;
    document.getElementById("windChill").textContent = windChill;

    // Footer Date
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

