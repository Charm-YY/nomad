const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('#login-form input');
const $greeting = document.querySelector('#greeting'); // h1태그

const HIDDEN = 'hidden'; //css 스타일
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault(); // 새로고침하는것을 막아줌
    $loginForm.classList.add(HIDDEN); // HIDDEN 클래스 추가
    const userName = $loginInput.value; //사용자가 입력한 값을 변수에 저장
    localStorage.setItem(USERNAME_KEY, userName); // userName DB에 저장방법
    paintGreetings(userName);
}

function paintGreetings(username){ // #greeting 보이게 하는 함수
    $greeting.innerText = `Hello, ${username}`; // ``에 변수 사용법 : ${}
    $greeting.classList.remove(HIDDEN); // HIDDEN 클래스 삭제
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 저장된 이름 가져오기

if (savedUsername === null) { //로그인 폼을 보여줘
    $loginForm.classList.remove(HIDDEN);
    $loginForm.addEventListener('submit', onLoginSubmit);
} else { // greeting을 보여줘 
    paintGreetings(savedUsername);
}

