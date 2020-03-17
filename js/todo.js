//elements values(요소 변수값)
const toDoForm = document.querySelector(".js-toDoForm"),    //form
    toDoInput = toDoForm.querySelector("input"),    //input
    toDoList = document.querySelector(".js-toDoList");  //ul

//LocalStorage
const ToDos_LS = 'toDos';

//LocalStorages array (로컬스토리지에 데이터를 배열에 담아주는)
const toDos = [];

//JSON.stringify (로컬 스토리지에 저장된 값을 인수로 JSON 문자열로 변환)
function saveToDos() {
    localStorage.setItem(ToDos_LS, JSON.stringify(toDos));
}
//web html에서 배열에 추가 될때마다 각각의 elements를 생성
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //생성될때마다 Id값을 1씩 할당
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;  //li가 생성될때마다 위에 선언된 변수값 할당
    toDoList.appendChild(li);
//객체내의 매개변수로 각 elements와 할당받은 Id값
    const toDoObj = {
        text: text,
        id: newId
    };
    //toDos[]안에 toDoObj의 매개변수
    toDos.push(toDoObj);
    saveToDos();    //위에 코드가 먼저 실행된 후 문자열 변환값을 Call
}
//event.preventDefault() (값을 보내면 이벤트 실행 취소) 
function handleSubmit(event) {
    event.preventDefault();
//Input의 value값 변수선언
    const currentValue = toDoInput.value;
    paintToDo(currentValue);    //paintToDo의 인수값 currentValue(toDoInput.value) 할당
    toDoInput.value = "";   //???
}
//forEach()로 배열요소를 각각 실행을 위한 메소드정의
//web에 list로 출력되기 위한
function loadToDos() {
    //Local Storage에 저장된 배열값 변수선언
    const loadedToDos = localStorage.getItem(ToDos_LS);
    //만일 값이 있을경우(null이 아닐경우)
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        //toDo의 text(배열의 요소)를 각각 실행
        parsedToDos.forEach(function(toDo) { //toDo is element
            paintToDo(toDo.text);
        });

    }
}
//초기화
function init() {
    loadToDos();    //html에서 li로 출력되기 위한
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
