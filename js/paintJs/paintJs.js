const canvas = document.querySelector("#js-Canvas");
//canvas 안에서 pixel에 접근하기위한 변수선언
const ctx = canvas.getContext("2d");
//canvas 안에서 픽셀을 다루기 위한
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}
function startPainting() {
    painting = true;
}
//mouse in canvas 이벤트(움직임 감지)
function onMouseMove(event) {
    console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
//mouse down canvas 이벤트 (마우스를 누르고 있는 상태)
function onMouseDown(event) {
    painting = true;
    // console.log(event);
}
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}