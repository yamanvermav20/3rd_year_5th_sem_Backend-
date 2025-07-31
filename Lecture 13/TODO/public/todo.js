let todoInput = document.querySelector('.todotitle'); // fixed class name case
let todoForm = document.querySelector('#todoform');
let todoContainer = document.querySelector('.todoContainer');

todoForm.addEventListener('submit', function(e){
    e.preventDefault();

    let value = inputValue();
    if (value.trim() === "") return; // prevent empty todo

    let newTodo = {
        id: Math.floor(Math.random() * 10000), // fixed Math.random()
        title: value
    }

    addTodo(newTodo);
    todoInput.value = ''; // clear input after adding
});

function inputValue() {
    return todoInput.value;
}

function addTodo(todo) {
    let li = document.createElement('li');
    li.setAttribute('id', todo.id);
    li.setAttribute('class', 'todoItem');
    li.style.display = 'flex';

    li.innerHTML = `
        <h1 class="todoTitle">${todo.title}</h1>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    todoContainer.appendChild(li);
}

