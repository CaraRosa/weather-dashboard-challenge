const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
// const APIKey = '8ffcaf78a4d3963d8cfc46aad122cce3';
const weatherResultEl = document.querySelector('#weather-result');

// converts temperature
function convertTemp(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(2);
}

var getWeatherData = function(cityName) {
    var apiUrl = baseURL + '?q=' + cityName + '&appid=' + APIKey;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error: ' + response.statusText);
            }
        })
        .then(function (data) {
            var weatherCardsContainer = document.getElementById('weather-cards-container');

            // clears previous weather to allow for new weather
            weatherCardsContainer.innerHTML = '';

            for (let index = 0; index < data.list.length; index++) {
                const element = data.list[index];

                if (element.dt_txt.endsWith('12:00:00')) {
                    const date = element.dt_txt.split(' ')[0];
                    const temperatureKelvin = element.main.temp;
                    const temperatureFahrenheit = convertTemp(temperatureKelvin);
                    const wind = element.wind.speed;
                    const humidity = element.main.humidity;

                    // create the 5 cards
                    var card = document.createElement('div');
                    card.classList.add('weather-card');

                    // info that is to be displayed in the 5 cards
                    card.innerHTML = `
                        <h3>Date: <span class="date">${date}</span></h3>
                        <p>Temperature: <span class="temperature">${temperatureFahrenheit}</span>°F</p>
                        <p>Wind: <span class="wind">${wind}</span></p>
                        <p>Humidity: <span class="humidity">${humidity}</span></p>
                    `;

                    // appends the card to the container
                    weatherCardsContainer.appendChild(card);
                }
            }
        })
        .catch(function (error) {
            alert('Unable to connect to Open Weather: ' + error.message);
        });
};
