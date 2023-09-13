const APIKey = '8ffcaf78a4d3963d8cfc46aad122cce3';
let requestURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.3&appid=8ffcaf78a4d3963d8cfc46aad122cce3';


// Accessing elements by ID
const submitBtn = document.querySelector('#submit-btn');

// renders user input
function renderUserInput() {
    var userInputHistory = JSON.parse(localStorage.getItem('userInput'));
    var searchList = document.getElementById('searchList');

    if (userInputHistory !== null) {
        searchList.innerHTML = '';

        userInputHistory.forEach(function (userInput) {
            var listSearchItem = document.createElement('p');
            listSearchItem.textContent = userInput.userInput;
            searchList.appendChild(listSearchItem);
        });
    }
}

// event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    // Call the renderUserInput function to render user input when the page loads
    renderUserInput();

    // event listener for the submit button
    document.getElementById('submit-btn').addEventListener('click', function (event) {
        event.preventDefault();

        var search = document.getElementById('search-input').value;

        var userInput = {
            userInput: search,
        };

        if (search.trim() !== '') {
            var userInputHistory = JSON.parse(localStorage.getItem('userInput')) || [];
            userInputHistory.push(userInput);
            localStorage.setItem('userInput', JSON.stringify(userInputHistory));

            // After adding new input, re-render the user input list
            // After the user enters a new input, it again renders users' history of cities that they have searched for
            renderUserInput();
        } else {
            console.error('You need to enter a city name.');
            return;
        }
    });
});
