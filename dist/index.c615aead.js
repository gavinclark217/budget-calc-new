let list = new Map();
let utils = {}; //create a namespace for our utility functions
//get function to make an HTTP GET request
utils.get = (url)=>{
    //start promise object
    return new Promise(function(resolve, reject) {
        //create a new XMLHttpRequest object
        let request = new XMLHttpRequest();
        //initialize the request
        request.open("GET", url);
        request.onload = function() {
            //resolve on success
            if (request.status == 200) {
                console.log("Response OK");
                resolve(request.response);
            } else reject(Error(`promise error with ${request.status}`));
        };
        //handle network errors
        request.onerror = function(error) {
            reject(Error(`Network Error with ${url}: ${error}`));
        };
        //send the request
        request.send();
    }); //end Promise Object
};
//getJSON function to get JSON data from the server
utils.getJSON = async function(url) {
    let string = null;
    //get the JSON string from the server
    try {
        string = await utils.get(url);
    } catch (error) {
        console.log(error);
    }
    //parse the JSON string and return the data
    let data = JSON.parse(string);
    return data;
};
async function init() {
    //get the root element of the web page
    let chooseCareers = document.querySelector("#chooseCareer");
    //create a variable to hold the URL of the JSON data source
    let url = "https://api-demo.cartwebapp.com/data/2024";
    //create a variable to hold the JSON data
    let occupations = null;
    //try to retrieve the JSON data from the server
    try {
        //retrieve the JSON data from the server
        occupations = await utils.getJSON(url);
    } //catch any errors and display them in the root element
    catch (error) {
        chooseCareers.style.color = "red";
        chooseCareers.textContent = `error: ${error}`;
    }
    //show JSON data on the html page
    buildList(occupations);
}
function buildList(jobs) {
    //create an empty string to hold the HTML
    let html = document.getElementById("chooseCareer");
    //loop through the array of job objects retrieved from the JSON data
    for (let job of jobs)// list.set(job.occupation)
    html.innerHTML += `<option value = "${job.salary}">${job.occupation}</option>`;
    //return completed html
    return html;
}
//initialize the web page when the DOM is ready
document.addEventListener("DOMContentLoaded", init());
//change inside of salary box when option is selected
document.addEventListener("input", function(event) {
    if (event.target.id !== "chooseCareer") return;
    let income1 = Math.round((event.target.value * 0.6735 - 180) / 12);
    document.getElementById("monthlyNetIncome").innerHTML = `<p>${income1}</p>`;
});
document.addEventListener("input", function(event) {
    if (event.target.id !== "userInput") return;
    console.log("works");
    let housing = document.getElementById("Housing").value;
    let utilities = document.getElementById("Utilities");
    let transport = document.getElementById("Transportation");
    let food = document.getElementById("Food");
    let debt = document.getElementById("Debt");
    let clothing = document.getElementById("Clothing");
    let entertainment = document.getElementById("Entertainment");
    let savings = document.getElementById("Savings");
    let difference = income - housing - utilities - transport - food - debt - clothing - entertainment - savings;
    document.getElementById("budgetDifference").innerHTML = `<p>${difference}</p>`;
});

//# sourceMappingURL=index.c615aead.js.map
