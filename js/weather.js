const weather = document.querySelector(".js-weather");
const API_Key = "326d931858d45c0bd124d45e17bb2156";
const Coords = 'coords';

//url을 가져오기 위한
function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
        ).then(function (response) {
            return response.json()})
        .then(function(json) {
            // console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}
function saveCoords(coordsObj) {
    localStorage.setItem(Coords, JSON.stringify(coordsObj));
}
//사용자 위치정보를 저장해주기 위한 메소드
function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        //latitude = latitude to shorten
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError() {
    console.log('cant accefdsmd,m,m...');
}
//user lacation info를 가져오기 위한
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(Coords);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather;
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    };
}
function init() {
    loadCoords();
}

init();