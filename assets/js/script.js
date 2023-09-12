const APIKey = "8ffcaf78a4d3963d8cfc46aad122cce3";
let requestURL = "https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.3&appid=8ffcaf78a4d3963d8cfc46aad122cce3";


// Accessing elements by ID
const submitBtn = document.querySelector("#submit-btn");

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click submit button");
})



