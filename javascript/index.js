function updateTime(){
//Los Angeles time update
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement.length){
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }
// Rome time update
    let RomeElement = document.querySelector("#rome");
    if (RomeElement.length){
        let RomeDateElement = RomeElement.querySelector(".date");
        let RomeTimeElement = RomeElement.querySelector(".time");
        let RomeTime = moment().tz("Europe/Rome");

        RomeDateElement.innerHTML = RomeTime.format("MMMM Do YYYY");
        RomeTimeElement.innerHTML = RomeTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone=event.target.value;
    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector(".cities");
    
    citiesElement.innerHTML= `
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <div>
    <a href="index.html">All cities</a>
    </div>`;

}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change",updateCity);

