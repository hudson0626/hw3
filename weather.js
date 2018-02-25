let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  jQuery(".card-text").text("The current temp is " + data.main.temp + " degree")
  jQuery(".card-title").text(data.main.name)
  jQuery("#weather img").attr("src", "http://openweathermap.org/img/w/"+data.weather[0].icon+".png")

}

let updateWidget2 = function(data) {
  console.log("Got weather data: ", data)
  jQuery(".card-text").text("The current temp is " + data.main.temp + " degree")
  jQuery("#weather h4").text(data.name)
  jQuery("#weather img").attr("src", "http://openweathermap.org/img/w/"+data.weather[0].icon+".png")

}

let getLocation =function (event) {
  navigator.geolocation.getCurrentPosition(getLocationWeather)
}

let getLocationWeather = function (position) {
  let locationLatitude = position.coords.latitude
  let locationLongitude = position.coords.longitude
  let locationApiKey = '0e0d9a394ab9aa95c8500c1ac1fffaad'

  let locationURL = 'https://api.openweathermap.org/data/2.5/weather?'
  locationURL += 'lat=' + locationLatitude
  locationURL += '&lon=' + locationLongitude
  locationURL +='&appid=' + locationApiKey + '&units=imperial'
  fetch(locationURL).then(convertToJSON).then(updateWidget2).catch(displayError);

  }



let getWeather = function(event) {
  let latitude = '48.8566';
  let longitude = '2.3522';
  let apiKey = '0e0d9a394ab9aa95c8500c1ac1fffaad'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

jQuery("#get_forecast").on("click", getWeather)
jQuery("#get_forecast").on("click", getLocation)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
