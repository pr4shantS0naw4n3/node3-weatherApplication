const request = require('request')

const getWeatherDetails = (options, callback) => {
    request(options, function (error, { body } = {}) {
        if (error) {
            callback("Unable to connect Weather Service", undefined);
        } else if (body.cod === '404') {
            callback("Location Not found", undefined);
        } else {
            const data = body
            console.log(data);
            const current_temperature = (data.main.temp - 273.15).toFixed(2);
            const clouds = data.clouds.all
            const respData = {
                weatherData: data,
                current_temperature:current_temperature,
                weather:data.weather[0].main
            }
            callback(undefined, respData)
        }
    })
};

module.exports = {
    getWeatherDetails
}