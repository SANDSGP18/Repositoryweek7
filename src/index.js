let currentTime = new Date();

let p = document.querySelector("p");

let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wensday",
  "Thuday",
  "Friday",
  "Saturday"
];
let currentDay = days[currentTime.getDay()];

let currentHours = currentTime.getHours();
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}

let currentMinutes = currentTime.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
p.innerHTML = `${currentDay} | ${currentHours}:${currentMinutes}`;

function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector(".search-bar");

  let h4 = document.querySelector("h4");

  if (searchInput.value) {
    h4.innerHTML = `${searchInput.value}`;
  } else {
    form.innerHTML = null;
    form.innerHTML = "Search for a city";
  }
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#changeClime");

  temperatureElement.innerHTML = 100;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#changeClime");

  temperatureElement.innerHTML = 38;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showForecast(response) {
  console.log(response);

  let tempValue = document.querySelector("#temperature");
  let tempRounded = Math.round(`${response.data.main.temp}`);
  tempValue.innerHTML = `${tempRounded}`;
}

function searchCurrentCity(city) {
  let apiKey = "1d4d255b77e630f2c1a85a42dd47884b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(searchCurrentCity);
}
function showCurrPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = `2ff29bed3181c3526c35cc5408037f85`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showInfo);
}
function getCurrLocation(e) {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrPosition);
}

function showCityInfo(info) {
  let temprature = Math.round(info.data.main.temp);

  let temp = document.querySelector(".temperature");
  temp.innerHTML = `${temprature}`;
}

function showCityLocation(e) {
  e.preventDefault();
  let searchcity = document.querySelector("#searchTime").value.toLowerCase();
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${searchcity}`;
  searchCity(searchcity);
}

function searchCity(city) {
  let apiKey = `2ff29bed3181c3526c35cc5408037f85`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCityInfo);
}
let button = document.querySelector("button");
button.addEventListener("click", Location);
let searchNow = document.querySelector("#searchForm");
searchNow.addEventListener("submit", showCityLocation);
