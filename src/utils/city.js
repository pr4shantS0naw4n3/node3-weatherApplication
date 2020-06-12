const cityWeather = (cityName, callback) => {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        json: true,
        qs: {
            id: '2172797',
            units: '"metric" or "imperial"',
            mode: 'json,html',
            q: cityName
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'OQfQFQ0QMymshr2XFAGykpbGmty4p1NTs4ZjsnN1QEiOc2i4y8',
            useQueryString: true
        }
    };
    callback(options)
}


module.exports = {
    cityWeather
}