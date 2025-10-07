const apiKey = "2513641e5ba74071b0674128253006";

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
    city
  )}&aqi=no`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found or API error.");
      }
      return response.json();
    })
    .then((data) => {
  
      const name = data.location.name;
      const country = data.location.country;
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      const iconUrl = data.current.condition.icon;
      resultDiv.innerHTML = `
 
        <p><strong>The Temperature in ${city} is ${temp}°C</strong></p>
        <img src="https:${iconUrl}" alt="weather icon">
        <p><strong>${temp}°C</strong></p>
        <p>${condition}</p>
      `;
    })
    .catch((error) => {
      resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});
