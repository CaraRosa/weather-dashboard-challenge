const APIKey = "8ffcaf78a4d3963d8cfc46aad122cce3";
let requestURL = "https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.3&appid=8ffcaf78a4d3963d8cfc46aad122cce3";


// Accessing elements by ID
const submitBtn = document.querySelector("#submit-btn");

if (localStorage.getItem("userSearch")) {
    var userSearchHistory = JSON.parse(localStorage.getItem("userSearch"));
} else {
    var userSearchHistory = [];
}

console.log(typeof userSearchHistory);

document.getElementById("submit-btn").addEventListener("click", function(event) {
    // prevents the form from submitting
    event.preventDefault();


    var userInput = document.getElementById('search-input').value;

    var userSearch = {
        userSearch: userInput,  
    }

    if(userInput.trim() !== "") {
        userSearchHistory.push(userSearch);
        localStorage.setItem("userSearch", JSON.stringify(userSearchHistory));
        console.log("user search", userInput);
    } else {
        console.log("Please enter a city.");
    }

    console.log("click submit button");


});




