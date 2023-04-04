
const API_KEY = 'e550be19c1253f53c36b33bee5ed9283'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const city = document.querySelector('#weather span:first-child');
    const weather = document.querySelector('#weather span:last-child');
    city.innerHTML = data.name;
    weather.innerHTML = `${data.weather[0].main}`;
  })
}

function onGeoError(){
    alert(`Can't find you. No weather for you` )
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)