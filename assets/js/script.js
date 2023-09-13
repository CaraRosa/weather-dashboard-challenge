const APIKey = "8ffcaf78a4d3963d8cfc46aad122cce3";
let requestURL = "https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.3&appid=8ffcaf78a4d3963d8cfc46aad122cce3";


// Accessing elements by ID
const submitBtn = document.querySelector("#submit-btn");


if (localStorage.getItem("userInput")) {
    var userInputHistory = JSON.parse(localStorage.getItem("userInput"));
} else {
    var userInputHistory = [];
}

console.log(typeof userInputHistory);

document.getElementById("submit-btn").addEventListener("click", function(event) {
    // prevents the form from submitting
    event.preventDefault();

    var search = document.getElementById("search-input").value;
    
    var userInput = {
        userInput: search,
    }

    if (search.trim() !== "") {
        userInputHistory.push(userInput);
        localStorage.setItem("userInput", JSON.stringify(userInputHistory));
        console.log("user search", search);
    } else {
        console.log("Please enter a city.");
    }

    console.log("click");
});


document.getElementById("submit-btn").addEventListener("click", function(event) {
var userInputHistory = JSON.parse(localStorage.getItem("userInput"));
var searchList = document.getElementById("searchList");

if (userInputHistory !== null) {
    searchList.innerHTML = "";

    userInputHistory.forEach(function (userInput) {
        var listSearchItem = document.createElement("p");
        listSearchItem.textContent = userInput.userInput;
        searchList.appendChild(listSearchItem);
    })
}

});





