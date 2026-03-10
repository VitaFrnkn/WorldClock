function updateTime(){
//Los Angeles time update
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

// Rome time update
    let RomeElement = document.querySelector("#rome");
    let RomeDateElement = RomeElement.querySelector(".date");
    let RomeTimeElement = RomeElement.querySelector(".time");
    let RomeTime = moment().tz("Europe/Rome");

    RomeDateElement.innerHTML = RomeTime.format("MMMM Do YYYY");
    RomeTimeElement.innerHTML = RomeTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);