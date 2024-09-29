const apikey="7ea652455aa73a976be1ed9ed9eb03e4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon= document.querySelector('.weather-icon')
async function weather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

if (response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".error").style.display="none";
}else{
    var data= await response.json();
    
    document.querySelector('.city').innerHTML=data.name;
document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
document.querySelector('.wind').innerHTML=data.wind.speed +  "kmph";

if(data.weather[0].main == "Rain"){
   weathericon.src='rain.png';
}
if(data.weather[0].main == "Clouds"){
    weathericon.src='cloud.png';
 }
 if(data.weather[0].main == "Clear"){
    weathericon.src='clear.png';
 }
 if(data.weather[0].main == "Drizzle"){
    weathericon.src='drizzle.png';
 }
 if(data.weather[0].main =="Mist"){
    weathericon.src='mist.png';
 }
 document.querySelector(".weather").style.display="block";
 document.querySelector(".error").style.display="none";
}


   
}

searchbtn.addEventListener('click',()=>{
    weather(search.value );
});

