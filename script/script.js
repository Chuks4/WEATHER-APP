// creating an object for weather informations
let weather = {
  // fetched API key
  apiKey: 'af01229a795646654fe241df299293fe',
// function that fetches 
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then(res => res.json())
      .then(data => this.displayWeather(data))
  },
  displayWeather: data => {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    document.querySelector('.city').innerText = `Weather in ${name}`
    document.querySelector(
      '.icon'
    ).src = `https://openweathermap.org/img/wn/${icon}.png`
    document.querySelector('.temp').innerText = `${temp}°C`
    document.querySelector('.description').innerText = description
    document.querySelector('.Humidity').innerText = `Humidity: ${humidity}%`
    document.querySelector(
      '.Wind-speed'
    ).innerText = `Wind speed: ${speed}km/hr`
    document.querySelector('.weather').classList.remove('loading')
  },
  search: function () {
    this.fetchWeather(document.querySelector('.enter-bar').value)
  }
}
document.querySelector('.search-bar').addEventListener('click', () => {
  weather.search( document.querySelector('.weather').classList.add('loading'))
})
document.querySelector('.enter-bar').addEventListener('keyup', event => {
  if (event.key == 'Enter') {
    weather.search( document.querySelector('.weather').classList.add('loading'))
  }
})
weather.fetchWeather('Lagos')
