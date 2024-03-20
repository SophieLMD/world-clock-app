function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  citiesElement.innerHTML = `<div class="city">
            <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
          </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
