let button = document.querySelector('.button')
  function fetchWeather(city){
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=ec3eaff725a8986b385ad4640faba8f5")
      .then((Response) =>{
          if(!Response.ok){
             alert("No weather found.");
              throw new Error("No weather found.");
          }
          return Response.json();
      })
      .then((data) => this.displayWeather(data));
  }
  function displayWeather(data){
     const { name } = data;
     const { description } = data.weather;
     const{temp,humidity} = data.main;
     const {speed} = data.wind;
     document.querySelector(".city").innerText = "weather in" + name;
     document.querySelector(".description").innerText = description;
     document.querySelector(".temp").innerText = temp + "degree C";
     document.querySelector(".humidity").innerText = humidity;
     document.querySelector(".wind").innerText = speed + "km/hr";
  }
  
  function search(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
  document.querySelector('.button').addEventListener("click", search())
  
  .querySelector(".search-bar").addEventListener("keyup", function (event) {
         if (event.key == "Enter") {
           weather.search();
         }
        })

 


  