const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",checkDelete);
document.addEventListener("DOMContentLoaded",getTodos);


function addTodo(e) {
    e.preventDefault();

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");

    const listItem = document.createElement("li");
    if(todoInput.value === "") {
        return
    }
    listItem.innerText = todoInput.value;
    listItem.classList.add("todo-item");
    todoContainer.appendChild(listItem);
    saveToLocalStorage(todoInput.value);


    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    completedButton.classList.add("completed-button");
    todoContainer.appendChild(completedButton);



    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
    trashButton.classList.add("trash-button");
    todoContainer.appendChild(trashButton);

    todoList.appendChild(todoContainer);


    todoInput.value ="";
    
}


//checkdelete

function checkDelete(e) {
    const item = e.target;
    let todos = JSON.parse(localStorage.getItem("todos"));

    for(let i=0;i<=todos.length;i++) {
        if(todos[i]=== item.parentNode.firstChild.innerText) {
            todos.splice(i,1);
            localStorage.setItem("todos",JSON.stringify(todos));
        }
    }

    if(item.classList[0]==="trash-button") {

        const todo =item.parentNode;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function() {
            todo.remove();
        })
    }


    if(item.classList[0] === "completed-button") {
        const todo =item.parentNode;
        todo.classList.toggle("completed");


    }
}


function saveToLocalStorage(todo) {
    let todos;
    if(!(localStorage.getItem("todos"))) {
        todos = [];
    } else {
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}

    


function getTodos() {
    let todos;
    if(!(localStorage.getItem("todos"))) {
        todos=[];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

            const todoContainer = document.createElement("div");
            todoContainer.classList.add("todo");
        
            const listItem = document.createElement("li");
            listItem.innerText = todo;
            listItem.classList.add("todo-item");
            todoContainer.appendChild(listItem);
        
        
            const completedButton = document.createElement("button");
            completedButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
            completedButton.classList.add("completed-button");
            todoContainer.appendChild(completedButton);
        
        
        
            const trashButton = document.createElement("button");
            trashButton.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
            trashButton.classList.add("trash-button");
            todoContainer.appendChild(trashButton);
        
            todoList.appendChild(todoContainer);
            

        })
    }
}