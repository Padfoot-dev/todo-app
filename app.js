const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",checkDelete);



function addTodo(e) {
    e.preventDefault();
    console.log(e);

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");

    const listItem = document.createElement("li");
    listItem.innerText = todoInput.value;
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


    todoInput.value ="";
    
}


//checkdelete

function checkDelete(e) {
    const item = e.target;


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