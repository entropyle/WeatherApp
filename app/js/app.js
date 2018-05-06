const weatherInfo = document.getElementById("weather-info");
const loc = document.getElementById("location");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");

const posUrl =
  "http://api.ipstack.com/check?access_key=b30492902047f0f621a3df40a4724f2c";

let getWeatherData = async function(url) {
  let resp = await fetch(url);
  let data = await resp.json();
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
  resp = await fetch(locData.weatherUrl);
  data = await resp.json();
  let weatherData = {
    weather: data.weather[0].main,
    temperature: data.main.temp - 273.15 //convert temperature from kelvin to celsius
  };
  console.log(locData.city, locData.country, weatherData);
  loc.innerHTML = `${locData.city}, ${locData.country}`;
  temperature.innerHTML = `${weatherData.temperature}`;
  weather.innerHTML = `${weatherData.weather}`;
};

getWeatherData(posUrl);
