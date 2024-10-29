let input = document.querySelector("input");
let button = document.querySelector("button");
let tasksList = document.querySelector(".tasks-list");

function addTask() {
  if (input.value === "") {
    alert("Please Add Your Fucking Task!");
  } else {
    let task = document.createElement("li");
    let xmark = document.createElement("span");
    task.innerHTML = input.value;
    xmark.innerHTML = "&times;";
    task.appendChild(xmark);
    tasksList.appendChild(task);
  }
  input.value = "";
  saveTask();
}

button.addEventListener("click", addTask);

tasksList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
    saveTask();
  }
});

// Save (SET) Tasks On Local Storage
function saveTask() {
  localStorage.setItem("tasks", tasksList.innerHTML);
}

// Load (GET) Tasks On Local Storage
function loadTask() {
  tasksList.innerHTML = localStorage.getItem("tasks");
}
loadTask();
