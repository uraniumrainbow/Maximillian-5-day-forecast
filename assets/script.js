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

//fetch request for current info
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3165a95f6d12b7305ddd0dfd9f22e34f`)
        .then(response => response.json())
        .then(data => {
            var cityVal = data['name'];
            var tempVal = data['main']['temp'];
            var windVal = data['wind']['speed'];
            var humidVal = data['main']['humidity'];

            cityName.innerHTML = (cityVal + ' ');
            temp.innerHTML = (`Temperature: ${Math.floor((tempVal-273.15) * 1.8 + 32)}°F`);
            wind.innerHTML = (`Wind Speed : ${windVal} mph`);
            humidity.innerHTML = (`Humidity: ${humidVal}%`);

            recentCities.push(cityVal);
            localStorage.setItem('saved', JSON.stringify(recentCities));
            addEntry();
        })
   

    //fetch request for 5 day forecast?
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=imperial&appid=3165a95f6d12b7305ddd0dfd9f22e34f`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
                var icon1 = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
                $('#icon1').attr('src', icon1);
                document.getElementById('temp1').innerHTML = `Temp: ${Number(data.list[0].main.temp).toFixed(0)}°F`
                document.getElementById('wind1').innerHTML = `Wind: ${Number(data.list[0].wind.speed)} MPH`
                document.getElementById('humidity1').innerHTML = `Humidity ${Number(data.list[0].main.humidity)}%`
                document.getElementById("date1").innerHTML = (data.list[0].dt_txt);

                var icon2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
                $('#icon2').attr('src', icon2);
                document.getElementById('temp2').innerHTML = `Temp: ${Number(data.list[8].main.temp).toFixed(0)}°F`
                document.getElementById('wind2').innerHTML = `Wind: ${Number(data.list[8].wind.speed)} MPH`
                document.getElementById('humidity2').innerHTML = `Humidity ${Number(data.list[8].main.humidity)}%`
                document.getElementById("date2").innerHTML = (data.list[8].dt_txt);

                var icon3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
                $('#icon3').attr('src', icon3);
                document.getElementById('temp3').innerHTML = `Temp: ${Number(data.list[16].main.temp).toFixed(0)}°F`
                document.getElementById('wind3').innerHTML = `Wind: ${Number(data.list[16].wind.speed)} MPH`
                document.getElementById('humidity3').innerHTML = `Humidity ${Number(data.list[16].main.humidity)}%`
                document.getElementById("date3").innerHTML = (data.list[16].dt_txt);

                var icon4 = `https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;
                $('#icon4').attr('src', icon4);
                document.getElementById('temp4').innerHTML = `Temp: ${Number(data.list[24].main.temp).toFixed(0)}°F`
                document.getElementById('wind4').innerHTML = `Wind: ${Number(data.list[24].wind.speed)} MPH`
                document.getElementById('humidity4').innerHTML = `Humidity ${Number(data.list[24].main.humidity)}%`
                document.getElementById("date4").innerHTML = (data.list[24].dt_txt);

                var icon5 = `https://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png`;
                $('#icon5').attr('src', icon5);
                document.getElementById('temp5').innerHTML = `Temp: ${Number(data.list[32].main.temp).toFixed(0)}°F`
                document.getElementById('wind5').innerHTML = `Wind: ${Number(data.list[32].wind.speed)} MPH`
                document.getElementById('humidity5').innerHTML = `Humidity ${Number(data.list[32].main.humidity)}%`
                document.getElementById("date5").innerHTML = (data.list[32].dt_txt);
        })
    }
    );

    $('#BtnSpots').on('click', '#Relook' , function (event) { 
        event.stopPropagation();
        event.stopImmediatePropagation();
         console.log("Clicked");
         var city = $(this).text();
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ec96c3d6509b8a012ba07a86b8f2719b')
        .then(response => response.json())
        .then(data => {
            var cityVal = data['name'];
            var tempVal = data['main']['temp'];
            var windVal = data['wind']['speed'];
            var humidVal = data['main']['humidity'];

            cityName.innerHTML = (cityVal + ' ');
            temp.innerHTML = (`Temperature: ${Math.floor((tempVal-273.15) * 1.8 + 32)}°F`);
            wind.innerHTML = (`Wind Speed : ${windVal} mph`);
            humidity.innerHTML = (`Humidity: ${humidVal}%`);

            recentCities.push(cityVal);
            localStorage.setItem('saved', JSON.stringify(recentCities));
            addEntry();
        })
    }
    );