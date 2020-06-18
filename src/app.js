const path = require('path')
const express = require('express')
const hbs = require('hbs')
const city = require('./utils/city')
const forecast = require('./utils/forecast')

//Paths for Express Config
//path manipulation
const staticPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Initialize Express Object
const app = express()
const port=process.env.PORT || 3000
// Customize the server

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
// Register partials locations
hbs.registerPartials(partialsPath)
// Setup static directory to serve
// Express will match the root url to this since index.html is the initial html for web applications
app.use(express.static(staticPath))
const isWeatherActive = false
const isAboutActive = false
const isHelpActive=false

app.get('', (req, res) => {
    this.isWeatherActive = true;
    this.isAboutActive=false
    this.isHelpActive=false
    res.render('index', {
        title: 'Weather Forecast',
        name: 'Prashant',
        isWeatherActive:this.isWeatherActive?'active':''
    })
})

app.get('/about', (req, res) => {
    this.isWeatherActive = false;
    this.isAboutActive=true
    this.isHelpActive = false
    res.render('about', {
        title: 'About Us',
        name: 'Prashant',
        isAboutActive:this.isAboutActive?'active':''
    })
})

app.get('/help', (req, res) => {
    this.isWeatherActive = false;
    this.isAboutActive=false
    this.isHelpActive = true
    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    res.render('help', {
        title: 'Help',
        message: message,
        name: 'Prashant',
        isHelpActive:this.isHelpActive?'active':''
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.location) {
        return res.send({
            error: 'You must provide a location'
        })
    } else {
        city.cityWeather(req.query.location, (data) => {
            forecast.getWeatherDetails(data, (error, forecastData) => {
                if (error) {
                    console.log(error);
                    const errorData = {
                        error:error
                    }
                    res.send(errorData)
                } else {
                    const data = {
                        forecastData: forecastData,
                    }
                    res.send(data)
                }
            })
        })
    }
})

app.get('/products', (req, res) => {
    console.log(req.query);
    if (!req.query.search) {
        return res.send({
            error: 'You must provide search term'
        })
    }
    res.send({
        products: []
    })
})

//always has to be at the end
/* 
   Using Wild card character ( * ) we can match either every request or we can match
   a bunch of request that match a specific pattern
*/
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Help article not found',
        name: 'Prashant'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Page Not Found',
        name: 'Prashant'
    })
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})