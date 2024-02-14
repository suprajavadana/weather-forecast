// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    fetchWeatherData();
});

function fetchWeatherData() {
    // Fetch weather data from an API
    // Example: https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
    // Replace YOUR_API_KEY with your OpenWeatherMap API key
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
        .then(response => response.json())
        .then(data => {
            // Update the content of the cards with the fetched weather data
            document.querySelector("#today-temperature").textContent = `Temperature: ${data.main.temp}°C`;
            document.querySelector("#today-humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.querySelector("#today-wind-speed").textContent = `Wind Speed: ${data.wind.speed} km/h`;
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
