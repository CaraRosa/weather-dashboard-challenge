const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
// const APIKey = '8ffcaf78a4d3963d8cfc46aad122cce3';
const weatherResultEl = document.querySelector('#weather-result');

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
            // displayWeather(data, longitude, latitude);
            console.log(data.list);

            for (let index = 0; index < data.list.length; index++) {
                const element = data.list[index];
                // console.log(element);
                

                if (element.dt_txt.endsWith('12:00:00')) {
                    console.log(element);
                    // element.main.temp
                    // appendChild or innerHTML to display results
                }
            }

        })
        .catch(function (error) {
            alert('Unable to connect to Open Weather:' + error.message);
        });
};

