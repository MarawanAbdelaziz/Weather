// https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3


async function getWeather(){

    let response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=acef007b1f2e4177874142345241801&q&q=cairo&days=3&aqi=yes&alerts=no');
    let result = await response.json();
    console.log(result);
    displayWeather(result);
    
}

getWeather()

function displayWeather(weather) {

  // day 1
  document.querySelector('.CN').innerHTML = weather.location.name ;
    document.querySelector('.fd-degree').innerHTML=weather.current.temp_c;
    document.querySelector('.c-img').innerHTML= `<img
    class="ms-8 w-[90%]"
    src="https:${weather.current.condition.icon}"
    alt=""
  />`;
  document.querySelector('.c-text').innerHTML= weather.current.condition.text;
  
  // day 2

  document.querySelector('.c-img2').innerHTML =`<img
  class="w-[100%]"
  src="https:${weather.forecast.forecastday[0].day.condition.icon }"
  alt=""
  />`;

  document.querySelector('.fd-degree2max').innerHTML=weather.forecast.forecastday[0].day.maxtemp_c;
  document.querySelector('.fd-degree2min').innerHTML=weather.forecast.forecastday[0].day.mintemp_c;
  document.querySelector('.c-text2').innerHTML= weather.forecast.forecastday[0].day.condition.text;

  


  // day 3

  document.querySelector('.c-img3').innerHTML =`<img
  class="w-[100%]"
  src="https:${weather.forecast.forecastday[1].day.condition.icon }"
  alt=""
  />`;

  document.querySelector('.fd-degree3max').innerHTML=weather.forecast.forecastday[1].day.maxtemp_c;
  document.querySelector('.fd-degree3min').innerHTML=weather.forecast.forecastday[1].day.mintemp_c;
  document.querySelector('.c-text3').innerHTML= weather.forecast.forecastday[1].day.condition.text;

  

}