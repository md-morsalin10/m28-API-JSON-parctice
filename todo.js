const todoFunc = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            displayTodo(data)
        })
}

// {userId: 10, id: 198, title: 'quis eius est sint explicabo', completed: true}
const displayTodo = (todos) => {
    // get the container 
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    todos.forEach(todo => {
        console.log(todo);

        // create element 
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <div id="container-div">
            <p>${todo.completed === true ? `<i class="fa-solid fa-square-check"></i>`: `<i class="fa-regular fa-square-check"></i>` }</p>
            <h4>${todo.title}</h4>

        </div>
        
        `

        // append 
        todoContainer.appendChild(todoDiv)
    })
}
todoFunc()
