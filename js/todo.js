const $toDoForm = document.querySelector('#todo-form');
const $toDoInput = document.querySelector('#todo-form input');
const $toDoList = document.querySelector('#todo-list');

function paintToDo(newTodo){ // todo list create
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    $li.appendChild($span);
    $span.innerText = newTodo;
    $toDoList.appendChild($li);
}

function handleToDoSubmit(event){ // write todo list and todo-list add
    event.preventDefault();
    const newTodo = $toDoInput.value;
    $toDoInput.value = '';
    paintToDo(newTodo);
}

$toDoForm.addEventListener('submit', handleToDoSubmit)