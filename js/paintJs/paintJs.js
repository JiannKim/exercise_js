const canvas = document.getElementById("js-Canvas");
const colors = document.getElementsByClassName("js-Color");
const range = document.getElementById("js-Range");
const mode = document.getElementById("js-Mode");

//canvas 안에서 pixel에 접근하기위한 변수선언
const ctx = canvas.getContext("2d");
//default value
const Inition_Color = "#2c2c2c";
const Canvas_Width = 700;  //적용될 픽셀(canvas) 사이즈
const Canvas_Height = 650;

//적용될 픽셀(canvas) 사이즈
canvas.width = Canvas_Width;
canvas.height = Canvas_Height;
//canvas 안에서 픽셀을 다루기 위한
ctx.strokeStyle = Inition_Color;
ctx.fillStyle = Inition_Color;
ctx.lineWidth = 5;
//fill mode
ctx.fillStyle = "color";

let painting = false;
let filling = false;

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
    };
}
//brush의 색상을 변경해주기 위한 메소드
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
//range조절시 brush굵기 반영위한 메소드
function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
    console.log(event);
}
//brush mode is fill or paint toggle button
function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
        ctx.fillStyle
    } else {
        filling = true;
        mode.innerText = "PAINT"
    };
}
function handleCanvasClick(event) {
    if(filling) {
        ctx.fillRect(0, 0, Canvas_Width, Canvas_Height);
    } else {};
}
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
};
//handleColorClick에 인수값을 할당해주기
Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);

if(range) {
    range.addEventListener("input", handleRangeChange);
};
//button(mode)에 연결
if(mode) {
    mode.addEventListener("click", handleModeClick);
};