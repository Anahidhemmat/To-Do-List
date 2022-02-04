//Selectors
let todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filtertodos = document.querySelector(".filter-todo");
//EventListeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filtertodos.addEventListener("click", filterTodo);

//Functions

//Add todos to the list

function addTodo(e) {
  //prevent form from submmiting
  e.preventDefault();

  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.append(newTodo);

  //Check mark button
  const completedBtn = document.createElement("button");
  completedBtn.classList.add("complete-btn");
  completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.append(completedBtn);

  //Delete Button
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.append(trashBtn);

  //clear todoInput value
  todoList.append(todoDiv);
  todoInput.value = "";
}

//deleteCheck function

function deleteCheck(e) {
  const item = e.target;

  //delete item
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    //animation
    todo.classList.add("fall");

    //remove
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check item
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//filter todo function
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
