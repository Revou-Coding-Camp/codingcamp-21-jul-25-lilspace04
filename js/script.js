console.log("hello world");
let todo = [];
function addTodo() {
    const todoInput = document.getElementById("todo");
    const dateInput = document.getElementById("date");
    if(todoInput.value === ""||dateInput.value === "") {
        alert("please enter a to-do and a date")
    }
    else {
        todo.push({
            title: todoInput.value,
            date: dateInput.value
        });
        console.log("Task added:", todoInput.value, "on", dateInput.value);
        console.log(todo);
        renderTodo();
    }
}
function removeAllTodo() {
    todo = [];
    renderTodo();
}
function renderTodo() {
    const todolist=document.getElementById("list-task")
    todolist.innerHTML="";
    todo.forEach((todo, index)=> {
        todolist.innerHTML +=`
            <div class="list row">
                    <div class="col-sm-8">
                        <span>${todo.title}</span>
                    </div>
                    <div class="col-sm-4">
                        <button type="button" id="delete">delete</button>
                    </div>
            </div>
        `;
    });
}