// Client side java script
console.log('Client side js is loaded');
const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const loadingHeader = document.querySelector('#loadingHeader')
const city=document.querySelector('#city')
const temperature = document.querySelector('#Temprature')
const wind = document.querySelector('#wind')
const weather = document.querySelector('#weatherDesc')
const anim=document.querySelector('#weather')
weather_form.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    loadingHeader.textContent = 'fetching...'
    city.textContent=''
    temperature.textContent=''
    wind.textContent=''
    weather.textContent = ''
    anim.textContent = ''
    fetch('/weather?location='+location).then((response) => {
        response.json().then((data)=> {
            if (data.error) {
                loadingHeader.textContent="Location Not Found"
            } else {
                console.log(data);
                
                loadingHeader.textContent = ''
                city.innerHTML="<b>City:</b> "+data.forecastData.weatherData.name+', '+data.forecastData.weatherData.sys.country
                temperature.innerHTML = "<b>Temperature:</b> "+data.forecastData.current_temperature+'°C'
                wind.innerHTML = "<b>Wind Speed:</b> "+data.forecastData.weatherData.wind.speed+' mph'
                weather.innerHTML = "<b>Weather Prediction:</b> " + data.forecastData.weather
                document.getElementById('weather').className=data.forecastData.weather === 'Rain'?'rainy':data.forecastData.weather === 'Clouds'?'cloudy':data.forecastData.weather === 'Clear'?'sunny':(data.forecastData.weather === 'Haze'|| data.forecastData.weather === 'Thunderstorm')?'stormy':'snowy'
            }
        })
    })
})

function toggleShow () {
  var el = document.getElementById("box");
  el.classList.toggle("show");
}