function getTodaysFormattedDate() {
  /**
   * returns today's date and time in a specific format
   */
  let dayWords = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  let currentDay = dayWords[today.getDay()];
  let currentHour = today.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = today.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  return `${currentDay} ${currentHour}:${currentMinute}`;
}

function displayCityAndTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureCurrent = document.querySelector("#temperature-current");
  temperatureCurrent.innerHTML = temperature;

  fahrenheitTemperature = response.data.main.temp;
  celsiusTemperature = Math.round((fahrenheitTemperature - 32) * 5) / 9;

  // Set the targets innerHTML
  // let searchInput = document.querySelector("#location-bar");
  let cityName = document.querySelector("#current-location");
  cityName.innerHTML = response.data.name;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed) + " mph";
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function getTemperature(cityName) {
  let apiKey = "6235b58538eef339ac44773d06f22df9";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

  axios
    .get(apiUrl)
    .then(displayCityAndTemperature)
    .catch((error) => {
      if (error.response.status === 404) {
        alert("Please enter a valid city name.");
      }
    });
}

function searchLocation(position) {
  let apiKey = "6235b58538eef339ac44773d06f22df9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayCityAndTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#submit-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

//=====================================

// get the HTML reference
let updatedDate = document.querySelector("#current-date");

// set the innerHTML from step 1 with function I made
updatedDate.innerHTML = getTodaysFormattedDate();

function search(event) {
  event.preventDefault();
  // Get the search input from input element.
  let searchInput = document.querySelector("#location-bar");

  if (searchInput.value.trim().length === 0) {
    alert("Please enter a location");
    return;
  }
  getTemperature(searchInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

/**
 * Change temperature to Fahrenheit
 */
function showFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature-current");
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  temperature.innerHTML = Math.round(fahrenheitTemperature);
}
/**
 * Change temperature to celsius
 */
function showCelsius(event) {
  event.preventDefault();
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  let temperature = document.querySelector("#temperature-current");
  temperature.innerHTML = Math.round(celsiusTemperature);
}
let celsiusTemperature = null;
let fahrenheitTemperature = null;

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheit);

getTemperature("Fairfax");
