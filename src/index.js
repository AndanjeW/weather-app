function dateFormat(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = dateFormat(currentTime);

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

function search(city){
  let apiKey = "e569e71e164e7e0ec0fb7827f996e194";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}
let searchForm = document.querySelector("#city-search");
searchForm.addEventListener("submit", showCity);
function showDegrees(event) {
  event.preventDefault();

  let tempCelsius = document.querySelector("#temperature");
  tempCelsius.innerHTML = 30;
}

let tempCelsius = document.querySelector("#celsius-link");
tempCelsius.addEventListener("click", showDegrees);

function showDegreesFahrenheit(event) {
  event.preventDefault();
  let tempFahrenheit = document.querySelector("#fahrenheit-link");
  tempFahrenheit.innerHTML = 66;
}

let tempFahrenheit = document.querySelector("#fahrenheit-link");
tempFahrenheit.addEventListener("click", showDegreesFahrenheit);

search("Nairobi");