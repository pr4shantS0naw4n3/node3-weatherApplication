const request = require('request')

const getWeatherDetails = (options, callback) => {
    request(options, function (error, { body } = {}) {
        if (error) {
            callback("Unable to connect Weather Service", undefined);
        } else if (body.cod === '404') {
            callback("Location Not found", undefined);
        } else {
            const data = body
            const current_temperature = (data.main.temp - 273.15).toFixed(2);
            const clouds = data.clouds.all
            callback(undefined, "It is currently " + current_temperature + " degrees. There is " + clouds + "% chance of rain.")
        }
    })
};

module.exports = {
    getWeatherDetails
}