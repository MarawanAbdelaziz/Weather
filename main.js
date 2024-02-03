var country = 'cairo' ;


async function getWeather(find){


  
  let find1 = find?.length >= 3 ? find : country;
  
  
  let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=acef007b1f2e4177874142345241801&q=${find1}&days=3&aqi=yes&alerts=no`);
  let result = await response.json();
  console.log(response);
  console.log(result);
  
  if(response.status == '200'){
    displayWeather(result);
  }
  

  console.log('f = ' + find);
  console.log('f1 = '+find1);
  

}
getWeather();



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

