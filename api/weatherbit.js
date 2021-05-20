// multiple use variables
let error = document.getElementById("error");

// eventListener variables
const zipcodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/; // src: https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
const cityRegex = /(?:^[a-zA-Z\s]+)/; // src: https://stackoverflow.com/questions/6800536/isalpha-replacement-for-javascript

// function getWeather variables
const apiKey = "257b3ab34f39423db21857eb68cff5d7"; // personal weatherbit api key
const units = "I"; // unit is in Farenheit (Imperial)
let search;

// function setInfo variables
let weatherDescriptionHeader = document.getElementById("weatherDescriptionHeader");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let visibility = document.getElementById("visibility");
let precipitation = document.getElementById("precipitation");
let snow = document.getElementById("snow");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let windSpeed = document.getElementById("windSpeed");
let windDirection = document.getElementById("windDirection");
let airQualityIndex = document.getElementById("airQualityIndex");
let cityHeader = document.getElementById("cityHeader");
let weatherIcon = document.getElementById("weatherIcon");


// makes the fetch request
function getWeather(searchTerm) {
  const WEATHER_URL = `https://api.weatherbit.io/v2.0/current?${search}=${searchTerm}&key=${apiKey}&include=minutely&units=${units}`; // weatherbit api url

  // make fetch request
  fetch(WEATHER_URL)
    .then((response) => {
      const processingPromise = response.json(); // convert response to json
      return processingPromise;
    })
    .then((weatherDetails) => {
      const weather = weatherDetails.data[0].weather; // get the weather description
      const weatherInfo = weatherDetails.data[0]; // get all other weather info

      setInfo(weather, weatherInfo); // set info for display
    })
    .catch((err) => {
      error.innerText = "Error: Invaild Input. Please enter a city or a zip code."; // otherwise, display error
    });
}


// sets weather information details for display after extracting them from the passed arguments
function setInfo(weather, weatherInfo) {
  // right column info
  sunrise.innerText = `Sunrise: ${weatherInfo.sunrise}`;
  sunset.innerText = `Sunset: ${weatherInfo.sunset}`;
  
  windSpeed.innerText = `Wind Speed: ${weatherInfo.wind_spd.toFixed(2)} m/s`;
  windDirection.innerHTML = `Wind Direction: ${weatherInfo.wind_cdir_full} ${weatherInfo.wind_dir}&#176`;
  
  airQualityIndex.innerHTML = `Air Quality Index: ${weatherInfo.aqi}`;
  humidity.innerText = `Humidity: ${Math.floor(weatherInfo.rh)}%`;
  
  visibility.innerHTML = `Visibility: ${weatherInfo.vis.toFixed(2)} KM`;
  precipitation.innerHTML = `Precipitation: ${weatherInfo.precip.toFixed(2)} mm/hr`;
  snow.innerHTML = `Snow: ${weatherInfo.snow.toFixed(2)} mm/hr`;

  // left column info
  cityHeader.innerText = `${weatherInfo.city_name}, ${weatherInfo.state_code}`;
  temperature.innerHTML = `${Math.floor(weatherInfo.app_temp)} &#176F`;
  
  weatherDescriptionHeader.innerText = weather.description;
  weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`;
}


// eventListener evoked when search button is clicked
document.getElementById("searchButton").addEventListener("click", () => {
  const searchTerm = document.getElementById("searchInput").value; // get the search term
  error.innerText = ""; // clear any error messages

  // check if search term is postal_code
  if (zipcodeRegex.test(searchTerm)) {
    search = "postal_code"; // set the search method as the zip code

    getWeather(searchTerm); // and make a request to get the weather
  } else if (cityRegex.test(searchTerm)) {
    // or city
    search = "city"; // set the search method as the city
    getWeather(searchTerm); // and make a request to get the weather
  } else {
    error.innerText = "Error: Invaild Input. Please enter a city or a zip code."; // otherwise display error
  }
});
