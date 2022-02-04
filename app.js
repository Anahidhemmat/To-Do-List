//Selectors
let todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

//EventListeners
todoBtn.addEventListener("click", addTodo);

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
