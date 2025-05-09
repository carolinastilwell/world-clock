let londonElementDate = document.querySelector("#london .date");
londonElementDate.innerHTML = moment()
  .tz("Europe/London")
  .format("Do of MMMM, YYYY");

let londonElementTime = document.querySelector("#london .time");
londonElementTime.innerHTML = moment().tz("Europe/London").format("hh:mm:ss");

let londonElementUnit = document.querySelector("#london .time small");
londonElementUnit.innerHTML = moment().tz("Europe/London").format("A");
