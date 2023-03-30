const $toDoForm = document.querySelector("#todo-form"); //html id 값이 todo-form을 js에서 사용하고 싶어서 가지고옴
const $toDoInput = document.querySelector("#todo-form input");
const $toDoList = document.querySelector("#todo-list");

function deleteTodo(event) {
  // button click : delete
  const liTg = event.target.parentElement; // event.target : span
  liTg.remove(); // button click 시 삭제
}

const TODOS_Key = "todos"; // todos 라는 문자열이 계속 사용 되어서 변수로 저장
let ToDos = []; // 빈배열 생성
function saveToDos() {
  //ToDo list saved
  localStorage.setItem(TODOS_Key, JSON.stringify(ToDos)); // localStorage 라는 브라우저에서 제공하는 API? DATA? 에 저장하는 방법 JSON.stringify : js를 json 문자열로 변경
}

function paintToDo(newToDo) {
  // todo list create
  const $li = document.createElement("li"); // li 태그를 js에서 만드는 함수
  $li.id = newToDo.id; // 만들어진 li 태그에 id값 생성
  const $span = document.createElement("span"); //span 태그를 js에서 만드는 함수
  $span.innerText = newToDo.text; // span 태그에 내가
  const $button = document.createElement("button"); //button 태그를 js에서 만드는 함수
  $button.innerText = "❌"; //button 모양 ❌
  $button.addEventListener("click", deleteTodo); // button을 event(클릭) 실행 시 deleteTodo의 함수 실행
  $li.appendChild($span); // li태그 안에 span 태그 담기
  $li.appendChild($button); // li태그 안에 button 태그 담기
  $toDoList.appendChild($li); // ul태그 안에 li 태그 담기
  // 최종 ul > li > span, button
}

function handleToDoSubmit(event) {
  // ToDo list 조작하기
  event.preventDefault(); //새로고침 방지
  const newToDo = $toDoInput.value; // 내가 입력한 값 변수에 저장
  $toDoInput.value = ""; //내가 입력한 값 초기화
  const newToDoObj = {
    // ToDo list delete 할 때 id 값이 필요 하기 때문에 객체로 만듬
    id: Date.now(), // id : 현재 시간 ms초로 바꿈
    text: newToDo, // text : 내가 입력한 값
  };
  ToDos.push(newToDoObj); //ToDos 배열에 newToDoObj 넣기? 푸시한다?
  saveToDos(); //saveToDos 함수 실행
  paintToDo(newToDoObj); // paintToDo 함수 실행 파라미터에 newToDoObj가 들어감
}

$toDoForm.addEventListener("submit", handleToDoSubmit); // ToDo list 작성 후 event(enter) 실행 시  handleToDoSubmit 함수 실행



const savedToDo = localStorage.getItem(TODOS_Key); // localStorage API? DATA? 에 저장한 값 불러오기
if (savedToDo) { //savedToDo에 값이 있으면 실행
  const parseToDos = JSON.parse(savedToDo); // JSON 문자열을 문자열 안에 있는 js 자료형으로 바꿔주는 함수? 
  // ex) const a = '['a','b','c']' 를 JSON.parse(a) => ['a', 'b', 'c'] 가 된다
  ToDos = parseToDos;
  parseToDos.forEach(paintToDo); // localStorage에 저장된 각 value를 인자로 받아 paintToDo 반복 실행 그러므로 새로고침해도 웹페이지에 ToDo list가 보이게 됨.
}
