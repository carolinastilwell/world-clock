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

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace(/_/g, " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
           <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("Do of MMMM, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}
            </div>
             </div>

      `;
  }, 1000);
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
