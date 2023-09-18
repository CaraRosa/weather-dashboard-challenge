const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
// const APIKey = '8ffcaf78a4d3963d8cfc46aad122cce3';
const weatherResultEl = document.querySelector('#weather-result');

// converts temperature
function convertTemp(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
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
            var html = '';
            const currentDate = getCurrentDate();
            // displayWeather(data, longitude, latitude);
            console.log(data.list);

            for (let index = 0; index < data.list.length; index++) {
                const element = data.list[index];
                // console.log(element);
                

                if (element.dt_txt.endsWith('12:00:00')) {
                    console.log(element);
                    const date = element.dt_txt.split(' ')[0];
                    const temperatureKelvin = element.main.temp;
                    const temperatureFahrenheit = convertTemp(temperatureKelvin);
                    const wind = element.wind.speed;
                    const humidity = element.main.humidity;
                    html += `<p>Date: ${date}, Temperature: ${temperatureFahrenheit}°F, Wind: ${wind}, Humidity: ${humidity} </p>`;
                    // element.main.temp
                    // appendChild or innerHTML to display results
                    if (date === currentDate) {
                        html += `<p>Date: ${date}, Temperature: ${temperatureFahrenheit}°F, Wind: ${wind}, Humidity: ${humidity} </p>`;
                    }
                }
            }
            weatherResultEl.innerHTML = html;
        })
        .catch(function (error) {
            alert('Unable to connect to Open Weather:' + error.message);
        });
};