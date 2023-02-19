let weather = {
  apikey : "ec3eaff725a8986b385ad4640faba8f5",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey)
   .then((response) => response.json())
   .then((data) => this.displayWeather(data));
 },
 displayWeather: function(data){
    var { name }  = data;
    const { description} = data.weather[0];
    const { temp , humidity} = data.main;
    const { speed } = data.wind;
    console.log(name, description, temp, humidity, speed);
    document.querySelector('.city').innerHTML = "Weather in " + name;
    document.querySelector('.temp').innerHTML = "Temperature " +temp+" °C";
    document.querySelector('.description').innerHTML = description;
    document.querySelector('.humidity').innerHTML = "Humidity: " +humidity+"g.m-3";
    document.querySelector('.wind').innerHTML = "Wind: "+speed+" km/hr";
 },
search: function() {
  this.fetchWeather(document.querySelector(".search-bar").value)
}
};

document.querySelector(".search button").addEventListener("click", function(){
  weather.search();
});

document.querySelector('.search-bar').addEventListener("keypress", function(){
  weather.search();
});

 


  