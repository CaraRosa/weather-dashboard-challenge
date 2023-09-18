const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
// const APIKey = '8ffcaf78a4d3963d8cfc46aad122cce3';
const weatherResultEl = document.querySelector('#weather-result');
const weatherContainer = document.querySelector('#weather-container');


// converts temperature
function convertTemp(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    // sets the decimal place to 2
    return fahrenheit.toFixed(2);
}

// gets the current date
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


var getWeatherData = function(cityName) {
    var apiUrl = baseURL + '?q=' + cityName + '&appid=' + APIKey;

    fetch(apiUrl)
        .then(function (response) {
            if(response.ok) {
                return response.json(); 
            } else {
                throw new Error('Error: ' + response.statusText);
            }
        })
        .then(function (data) {
            // store the weather data for future days
            var futureWeather = []; 

            // Filter data for the current date and future dates
            data.list.forEach(function (element) {
                const date = element.dt_txt.split(' ')[0];
                if (isFutureDate(date) && futureWeather.length < 5) {
                    const temperatureKelvin = element.main.temp;
                    const temperatureFahrenheit = convertTemp(temperatureKelvin);
                    const wind = element.wind.speed;
                    const humidity = element.main.humidity;
                    futureWeather.push({
                        date: date,
                        temperature: temperatureFahrenheit,
                        wind: wind,
                        humidity: humidity,
                    });
                }
            });
            // display the weather for the future days
            displayWeather(futureWeather); 
        })
        .catch(function (error) {
            alert('Unable to connect to Open Weather:' + error.message);
        });
};

function isFutureDate(date) {
    const currentDate = new Date();
    const targetDate = new Date(date);
    return targetDate > currentDate;
}

function displayWeather(futureWeather) {
    const weatherContainer = document.querySelector('#weather-container');
    // clear previous weather
    weatherContainer.innerHTML = '';

    // this code makes a card for each of the 5 future days
    futureWeather.forEach(function (weather) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>Date: ${weather.date}</h3>
            <p>Temperature: ${weather.temperature}°F</p>
            <p>Wind: ${weather.wind}MPH</p>
            <p>Humidity: ${weather.humidity} %</p>
        `;
        weatherContainer.appendChild(card);
    });
}
