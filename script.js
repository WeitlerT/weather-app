const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const searchField = document.querySelector(".search-input")
const searchIcon = document.querySelector(".search-icon");
console.log(searchIcon);

searchIcon.addEventListener("click", () => {
    getWeather(searchField.value);
})

async function getWeather(city){
    let response;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eeac38cd87059d743be43e8ffc5a538b`)
        if (!response.ok) throw new Error(`City ${city} not found`);
        const weatherData = await response.json();
        cityName.innerText = weatherData.name;
        temp.innerText = Math.round(weatherData.main.temp) + "°";
        weather.innerText = weatherData.weather[0].description;
        console.log(weatherData);
    }
    catch (error) {
        console.log(`Failed to load data for ${city}. Error code is as follows: ` , error);
        alert(error);
    }
}

getWeather("Brighton");