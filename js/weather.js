const API_Key = "326d931858d45c0bd124d45e17bb2156";
const Coords = 'coords';

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
}
function handleGeoError() {
    console.log('cant accefdsmd,m,m...');
}
//user lacation info를 가져오기 위한
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords() {
    const loadedCords = localStorage.getItem(Coords);

    if (loadedCords === null) {
        askForCoords();
    } else {
        //getWeather;
    }
}
function init() {
    loadCoords();
}

init();