const weatherInfo = document.getElementById("weather-info");
const loc = document.getElementById("location");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");

const posUrl =
  "http://api.ipstack.com/check?access_key=b30492902047f0f621a3df40a4724f2c";

let getPosition = function(url) {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      const wurl = "https://api.openweathermap.org/data/2.5/weather?";
      const wurlApiKey = "b65422c4ce96e72fe468df1c98dc01dc";
      let locData = {
        city: data.city,
        country: data.country_code,
        longitude: data.longitude,
        latitude: data.latitude,
        weatherUrl: `${wurl}lat=${data.latitude}&lon=${
          data.longitude
        }&APPID=${wurlApiKey}`
      };
      return getWeatherData(locData.weatherUrl);
    });
};

let getWeatherData = function(url) {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      let weatherData = {
        weather: data.weather[0].main,
        temperature: data.main.temp
      };
      return weatherData;
    });
};

console.log(getPosition(posUrl));
