function displayWeatherCondition(response) {
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = "`<div class=row>`";
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
  <div class="forecast" id="forecast">
    <div class="row">
      <div class="col-1">
        ${day}</div>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          width="42"
          alt="weather icon"
        />
        <span class="forecast-temp-max">18°</span>
        <span class="forecast-temp-min">10°</span>
      </div>
    </div>
  </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function search(event) {
  event.preventDefault();
  let apiKey = "46ac7c730ce56529889bec2d81ce7245";
  let city = document.querySelector("#choose-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let iconElement = document.querySelector("#icon");
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

displayForecast();

dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;
