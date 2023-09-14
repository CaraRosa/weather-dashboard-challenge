const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
const APIKey = '8ffcaf78a4d3963d8cfc46aad122cce3';
const weatherResultEl = document.querySelector('#weather-result');

var getWeatherData = function(latitude, longitude) {
    var apiUrl = baseURL + '?lat=' + latitude + '&lon=' + longitude + APIKey;

    fetch(apiUrl)
        .then(function (response) {
            if(response.ok) {
                return response.json(); 
            } else {
                throw new Error('Error: ' + response.statusText);
            }
        })
        .then(function (data) {
            // displayWeather(data, longitude, latitude);
            console.log(data);
        })
        .catch(function (error) {
            alert('Unable to connect to Open Weather:' + error.message);
        });
};

