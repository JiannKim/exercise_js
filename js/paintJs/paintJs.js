const canvas = document.querySelector("#js-Canvas");
//canvas 안에서 pixel에 접근하기위한 변수선언
const ctx = canvas.getContext("2d");
//적용될 픽셀(canvas) 사이즈
canvas.width = 700;
canvas.height = 650;
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
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) { //마우스만 움직일경우 패스만 만들고
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {    //클릭할경우(painting이 true일경우) stroke한다
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
