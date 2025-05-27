let API_KEY = "e710c3bfea5ac22ea3cdddb64fdfb798";

function getWeatherData(city, unit) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found or API issue.");
      return response.json();
    });
}

function searchCity() {
  const city = document.getElementById("city-input").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const symbol = unit === "metric" ? "°C" : "°F";

  getWeatherData(city, unit)
    .then((data) => {
      document.getElementById("city-name").textContent = data.name;
      document.getElementById("weather-type").textContent = data.weather[0].main;
      document.getElementById("temp").textContent = data.main.temp + symbol;
      document.getElementById("feels-like").textContent = data.main.feels_like + symbol;
      document.getElementById("min-temp").textContent = data.main.temp_min + symbol;
      document.getElementById("max-temp").textContent = data.main.temp_max + symbol;
      document.getElementById("humidity").textContent = data.main.humidity;
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
