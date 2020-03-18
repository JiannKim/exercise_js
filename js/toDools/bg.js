//DOM
const body = document.querySelector("body");
const Img_Number = 5;

//Img call 해주기 위한 메소드
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `../img/toDools/${imgNumber + 1}.jpg`;  //random num이 0이 나올 수도 있기때문에 +1
    image.classList.add("bgImage");
    body.appendChild(image);
}
//random number를 할당하고 return to number
function genRandom() {
    const number = Math.floor(Math.random() * Img_Number);
    return number;
}

//random Img call 초기화
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);   //Img call
}

init();