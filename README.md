# Weather Forecast Web Application 
A Sample Weather Forecast Application using node.js, express.js and Open weather Api

# Live Working Application
[stark-weather-application.herokuapp.com](stark-weather-application.herokuapp.com)

## Requirements
- Node
- Express
- Weather Api(Any)
- **IDE:** Visual Studio Code (Or any other according to your likings)
- Heroku Account - Deployment

## Introduction
This website was developed using node.js, express.js, javascript, html and css. The website will give real time weather forecast report of any Country, city, State using **Open weather api**.

- Node version: 12.6.0
- Express version: 4.17.1

The Deployment server used here is **heroku**
The motive behind this website was to learn fundamentals of node.js, express.js.

## Installation
First, install the programs required to run the application:
- [Node](https://nodejs.org/en/download/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/) **IDE**
- [Weather API](https://rapidapi.com/category/Weather).
  **Note**: Do not forget to subscribe to the api before using it other wise the api will not work
- [Heroku Account](https://signup.heroku.com/)
  
**Clone the respository**
```
git clone https://github.com/pr4shantS0naw4n3/node3-weatherApplication.git
```

**Install Dependencies**
```
npm install
```

**Now, start the development environment with the following command:**

```
npm start
```

## Deployment to Heroku

1. Create a heroku account

2. Download and install heroku for your pc

3. ```heroku -v```

4. Login to heroku
```
heroku login
```
This will log you in to heroku via cli


5. Add ssh key to heroku
```
heroku keys:add
```
6. Create a heroku application
```
heroku create name-of-application
```
This will give you
URL Location where we can view the application     URL Git repo where we have to deploy the application
https://example.com/ | https://git.heroku.com/example.git

7. To tell heroku how to run the application
**Goto**
```
package.json => scripts => add "start":"node src/app.js"
```
8. To set port
**Goto** 
```
app.js=> add const port=process.env.PORT
```

9. push the code to the heroku repository
```
git push heroku master
```
10. Open browser and view your application via URL generated in **step 6**
