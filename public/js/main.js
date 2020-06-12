// Client side java script
console.log('Client side js is loaded');

const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

weather_form.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    message1.textContent = 'loading...'
    message2.textContent=''
    fetch('/weather?location='+location).then((response) => {
        response.json().then((data)=> {
            if (data.error) {
                message1.textContent=data.error
            } else {
                message1.textContent=data.location
                message2.textContent=data.forecastData
            }
        })
    })
})