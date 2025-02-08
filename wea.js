const container = document.querySelector(".container");
const searchb = document.querySelector(".search button");
const weath = document.querySelector(".weather-box");
const weathdet = document.querySelector(".weather-details");

searchb.addEventListener("click", () => {
   const APIKey = '23ec1b305c13423eed97a536de7dc9e2';
   const city = document.querySelector(".search input").value;
   if (city == '')
      alert("Enter Your Location");

   // Use backticks for template literals
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
         const image = document.querySelector('.weather-box img');
         const temp = document.querySelector('.weather-box .temperature');
         const desc = document.querySelector('.weather-box .discription');
         const humi = document.querySelector('.weather-details .humidity span');
         const wi = document.querySelector('.weather-details .wind span');

         switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.jpg';
                break;
            case 'Rain':
                image.src = 'images/rainy.webp';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Clouds':
                image.src = 'images/cloudy.jpg';
                break;
            case 'Mist':
                image.src = 'images/mist.png';
                break;
            case 'Fog':
                image.src = 'images/haze.png';
                break;
            case 'Drizzle':
                image.src = 'images/drizzle.avif';
                break;
            default:
                image.src = 'images/vcloud.png';
         }

         temp.innerHTML = `${json.main.temp}°C`;
         desc.innerHTML = json.weather[0].description;
         humi.innerHTML = `${json.main.humidity}%`;
         wi.innerHTML = `${json.wind.speed} km/h`;
      });
});
