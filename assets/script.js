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

