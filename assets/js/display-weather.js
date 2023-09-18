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
            var html = '';
            // displayWeather(data, longitude, latitude);
            console.log(data.list);

            for (let index = 0; index < data.list.length; index++) {
                const element = data.list[index];
                // console.log(element);
                

                if (element.dt_txt.endsWith('12:00:00')) {
                    console.log(element);
                    const date = element.dt_txt;
                    const temperature = element.main.temp;
                    const wind = element.wind.speed;
                    const humidity = element.main.humidity;
                    html += `<p>Date: ${date}, Temperature: ${temperature}°C, Wind: ${wind}, Humidity: ${humidity} </p>`;
                    // element.main.temp
                    // appendChild or innerHTML to display results
                }
            }
            weatherResultEl.innerHTML = html;
        })
        .catch(function (error) {
            alert('Unable to connect to Open Weather:' + error.message);
        });
};