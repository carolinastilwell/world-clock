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
