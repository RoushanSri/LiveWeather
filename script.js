let humidity=document.getElementById("hum");
let inp=document.getElementById("in");
let Winde=document.getElementById("wind");
let temperature=document.getElementById("temp");
let locations=document.getElementById("loc");
let search=document.getElementById("search");
let Img=document.getElementById("img");

search.addEventListener("click",async function(){
    let input=inp.value
    let network=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=96b795feea53c2facd68b013d82fb873&units=metric`
    let locate=fetch(network).then((response)=>{
    return response.json()
    })
    locate
    .then((place)=>{
        return place.main
    })
    .then((Temp)=>{
        temperature.innerHTML=`<p>${Temp.temp}&#176;C</p>`
        humidity.innerHTML=`<p>${Temp.humidity}%</p>`
    })
    locate
    .then((place)=>{
        return place.wind
    })
    .then((air)=>{
        Winde.innerHTML=`<p>${air.speed} Km/Hr</p>` 
    })
    locations.innerHTML=`<p>${input}</p>`
    locate.then((place)=>{
        return place.weather[0]
    }).then((cond)=>{
        if(cond.main===`Haze`)
           Img.innerHTML=` <img src="image/cloudy-day.png" alt="">`
        else if(cond.main===`Clear`)
            Img.innerHTML=` <img src="image/sun.png" alt="">`
        else if(cond.main===`Clouds`)
            Img.innerHTML=` <img src="image/cloudy.png" alt="">`
        else if(cond.main===`Snow`)
            Img.innerHTML=` <img src="image/snow.png" alt="">`
        else if(cond.main===`Storm`)
            Img.innerHTML=` <img src="image/storm.png" alt="">`
        else if(cond.main===`Rain`)
            Img.innerHTML=` <img src="image/heavy-rain.png" alt="">`
        else
            Img.innerHTML=` <img src="image/sun.png" alt="">`

        console.log(cond.main);
    })
})
