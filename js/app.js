window.addEventListener("DOMContentLoaded", function() {
  // const weatherInfo = document.getElementById("weather-info");
  // const location = document.getElementById("location");
  // const temperature = document.getElementById("temperature");
  // const weather = document.getElementById("weather");

  let weatherUrl = "https://fcc-weather-api.glitch.me/api/current?";

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
      weatherData = getWeatherData();
    } else {
      weatherInfo.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function getPosition(position) {
    var lat = position.coords.latitute;
    var lon = position.coords.longitude;
    weatherUrl = `${weatherUrl}long=${lon}&lat=${lat}`;
  }

  function getWeatherData() {
    fetch(weatherUrl)
      .then(resp => resp.json())
      .then(function(data) {
        return data;
      });
  }
});
