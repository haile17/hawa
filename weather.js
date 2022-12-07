const inputTxt = document.querySelector(".inputTxt");
var button = document.querySelector(".btn1");
const showData = document.querySelector(".show-details");
const API_key = "38f30d7e5e868ff6a8bc084515f5a5d3";

button.addEventListener("click", () => {
  const cityInput = inputTxt.value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_key}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      inputTxt.value = "";
      showData.innerHTML = `
        <ul>
            <li class="city">${data.name.toUpperCase()}</li>
            <li class="temp">${data.main.temp} °c</li>
            <li class="description">${data.weather[0].description.toUpperCase()}</li>
            <li class="wind">WIND SPEED: ${data.wind.speed} km/h</li>
        </ul>
      `;
    });
});
