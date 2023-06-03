function displayWeatherCondition(response) {
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "46ac7c730ce56529889bec2d81ce7245";
  let city = document.querySelector("#choose-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let windElement = document.querySelector("#wind");
let humidityElement = document.querySelector("#humidity");
let descriptionElement = document.querySelector("#description");
let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();

let searchCity = document.querySelector("#search-city");
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thursday",
  "Friday",
  "Saturday",
];

searchCity.addEventListener("submit", search);

dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;
