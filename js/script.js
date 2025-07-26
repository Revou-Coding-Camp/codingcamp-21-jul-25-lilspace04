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
            date: dateInput.value,
            completed: false
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
function renderTodo(showIncompleteOnly = false) {
    const todolist = document.getElementById("list-task");
    todolist.innerHTML = "";
    // Filter jika showIncompleteOnly true
    let todosToShow = showIncompleteOnly ? todo.filter(t => !t.completed) : todo;
    todosToShow.forEach((item, idx) => {
        // Cari index asli di array todo
        const realIdx = todo.indexOf(item);
        todolist.innerHTML += `
            <div class="list row">
                <div class="col-sm-8">
                    <span style="${item.completed ? 'opacity:0.5;text-decoration:line-through;' : ''}">
                        ${item.title}
                    </span>
                </div>
                <div class="col-sm-4">
                    <button type="button" class="complete-btn" data-index="${realIdx}">complete</button>
                    <button type="button" class="delete-btn" data-index="${realIdx}">delete</button>
                </div>
            </div>
        `;
    });

    // Event listener untuk tombol complete
    document.querySelectorAll('.complete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            todo[idx].completed = true;
            renderTodo(showIncompleteOnly);
        });
    });

    // Event listener untuk tombol delete
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            todo.splice(idx, 1);
            renderTodo(showIncompleteOnly);
        });
    });
}
// Tambahkan event listener untuk tombol filter
document.getElementById('filter').addEventListener('click', function() {
    renderTodo(true); // hanya tampilkan todo yang belum complete
});