const urlDomain = 'https://api-formula-1.p.rapidapi.com/';
const apiKey = '2342f67e1fbb27b647041cc411638017';

// Search Request Driver
function searchDriversNames(searchQuest) {
    fetch(`${urlDomain}drivers?search=${searchQuest}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": urlDomain,
            "x-rapidapi-key": apiKey
        }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.log(err);
        });
}
// Request Driver with ID
function searchDriversID(DriverID) {
    fetch(`${urlDomain}drivers?id=${DriverID}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": urlDomain,
            "x-rapidapi-key": apiKey
        }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.log(err);
        });
}

// Search Request Team
// Request Team with ID