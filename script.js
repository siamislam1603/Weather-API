const cityName = document.querySelector("input");
const button = document.querySelector("button");
const weatherConditionImg = document.querySelector(".weather-status img");
const weatherCondition = document.querySelector(".weather-status .lead");
const place = document.querySelector(".weather-status h1");
const temparature = document.querySelector(".weather-status h3 span");
const APIKey = "2d91295f33fb9ad3044e6a07be53cf98";
const alert=document.querySelector('.alert');
setTimeout(()=>{
    displayWeather('Dhaka');
},0);
button.onclick = () => {
displayWeather(cityName.value);
};
function displayWeather(city) {
console.log(city);
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
)
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    weatherConditionImg.setAttribute(
        "src",
        "http://openweathermap.org/img/wn/" +
        data.weather[0].icon +
        "@2x.png"
    );
    place.innerText = data.name;
    temparature.innerText = data.main.temp;
    weatherCondition.innerText = data.weather[0].main;
    })
    .catch((error) => {
    alert.style.display='block';
        setTimeout(()=>{
            alert.style.display='none';
        },2000);
    });
}