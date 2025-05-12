function updateTime(cityId, timeZone) {
  let cityElementDate = document.querySelector(`#${cityId} .date`);
  let cityElementTime = document.querySelector(`#${cityId} .time`);

  if (cityElementDate && cityElementTime) {
    cityElementDate.innerHTML = moment()
      .tz(`${timeZone}`)
      .format("Do of MMMM, YYYY");

    cityElementTime.innerHTML = moment()
      .tz(`${timeZone}`)
      .format("h:mm:ss [<small>]A[</small]");
  }
}

function updateCities() {
  updateTime("london", "Europe/London");
  updateTime("sao-paulo", "America/Sao_Paulo");
  updateTime("toronto", "America/Toronto");
}
setInterval(updateCities, 1000);

let currentCityInterval;

function updateCity(event) {
  clearInterval(currentCityInterval);

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let citiesElement = document.querySelector("#cities");

  function updateSelectedCityTime() {
    let cityName = cityTimeZone.replace(/_/g, " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);

    citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("Do of MMMM, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}
            </div>
             </div>
              <div class="back"><a href="#" id="back-link">🔙 Back to all cities</a></div>

              `;
    let backLink = document.querySelector("#back-link");
    backLink.addEventListener("click", function (event) {
      event.preventDefault();
      clearInterval(currentCityInterval);
      location.reload();
    });
  }

  updateSelectedCityTime();
  currentCityInterval = setInterval(updateSelectedCityTime, 1000);
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
