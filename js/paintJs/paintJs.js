const canvas = document.querySelector("#js-Canvas");

let painting = false;

function stopPainting() {
    painting = false;
}
//mouse in canvas 이벤트
function onMouseMove(event) {
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
}
//mouse down canvas 이벤트 (마우스를 누르고 있는 상태)
function onMouseDown(event) {
    painting = true;
    // console.log(event);
}
function onmouseup(event) {
    stopPainting();
}
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onmouseup);
    canvas.addEventListener("mouseleave", stopPainting);
}