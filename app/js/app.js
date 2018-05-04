const posUrl =
  "https://api.ipstack.com/check?access_key=b30492902047f0f621a3df40a4724f2c";

let weatherData;

function getPosition(url) {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      let latitude = data.latitude;
      let longitude = data.longitude;
      let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
      let weatherUrlApiKey = "b65422c4ce96e72fe468df1c98dc01dc";
      return `${weatherUrl}lat=${data.latitude}&lon=
        ${data.longitude}&APPID=${weatherUrlApiKey}`;
    });
}

function getWeatherData(url) {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      let weatherData = {
        // location: data.;
        // temperature: data.;
      };
      return weatherData;
    });
}

// const weatherInfo = document.getElementById("weather-info");
// const location = document.getElementById("location");
// const temperature = document.getElementById("temperature");
// const weather = document.getElementById("weather");

// let weatherUrl = "https://fcc-weather-api.glitch.me/api/current?";
// var pos = [];

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((pos = getPosition()));
//     weatherData = getWeatherData();
//   } else {
//     weatherInfo.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function getPosition(position) {
//   let pos = [];
//   pos[0] = position.coords.latitute;
//   pos[1] = position.coords.longitude;
//   return pos;
//   //weatherUrl = `${weatherUrl}long=${lon}&lat=${lat}`;
// }

// function getWeatherData() {
//   fetch(weatherUrl)
//     .then(resp => resp.json())
//     .then(function(data) {
//       return data;
//     });
// }

// getLocation();
