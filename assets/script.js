//API Key
// 3165a95f6d12b7305ddd0dfd9f22e34f

//Globals
var $SearchBtn = $('#SearchBtn');
var $ClearBtn = $('#ClearBtn');
var input = document.querySelector('#search-city');
var cityName = document.querySelector('#cityName');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var index = document.querySelector('#index');
var createImg = document.createElement('img');
var recentCities = $(JSON.parse(localStorage.getItem('saved')));

function addEntry() {
    recentCities.sort();
    for(let i=0; i < recentCities.length; i++){
        if(recentCities[i] === recentCities[i-1]){
            recentCities.splice(i, 1);
            i--;
        }
    }
};

$SearchBtn.on('click', function(event){
    console.log(input.value);
    }
);

//fetch request for current info
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3165a95f6d12b7305ddd0dfd9f22e34f`)
    .then(response => response.json())
    .then(data => {
        var cityVal = data['name'];
        var tempVal = data['main']['temp'];
        var windVal = data['wind']['speed'];
        var humidVal = data['main']['humidity'];

        cityName.innerHTML = (cityVal + ' ');
        temp.innerHTML = (`Temperature: ${tempVal}°C`);
        wind.innerHTML = (`Wind Speed : ${windVal} mph`);
        humidity.innerHTML = (`Humidity: ${humidVal}%`);

        recentCities.push(cityVal);
        localStorage.setItem('saved', JSON.stringify(recentCities));
        addEntry();
    })