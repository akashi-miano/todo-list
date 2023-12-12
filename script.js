const taskContainer = document.querySelector(".tasks-container");
const taskList = document.querySelector(".task-list");
const userInput = document.querySelector(".userInput");
const addTasks = document.querySelector(".submit");
const myForm = document.querySelector(".form");
const deleteTask = document.querySelector(".fa-trash");


function addTask(){
	if(userInput.value === "")
		alert("Type something!");
	else {
		taskContainer.innerHTML +=  `<ul class="task-list flow-content--m">
					<li class="item">${userInput.value}</li>
					<div class="icons">
						<i class="fa-solid fa-check"></i>
						<i class="fa-solid fa-trash"></i>
						<i class="fa-solid fa-pen"></i>
					</div>
				</ul>`
	}
}

addTasks.addEventListener("click", function() {
	addTask();
	saveData();
})

myForm.addEventListener("submit", function(e){
	e.preventDefault();
	userInput.value = "";
})

taskContainer.addEventListener("click", function(e){
	if(e.target.classList.contains("fa-trash")) {
		e.target.parentElement.parentElement.remove();
		saveData();
	} else if(e.target.classList.contains("fa-check")) {
		console.log(e.target.parentElement.previousElementSibling.classList)
		e.target.parentElement.previousElementSibling.classList.toggle("checked");
	} else if(e.target.classList.contains("fa-pen")) {
		let editedTask = prompt("Edit task: ");
		e.target.parentElement.previousElementSibling.innerText = editedTask;
	}
})

function saveData(){
	localStorage.setItem("data", taskContainer.innerHTML)
}

function showTask(){
	taskContainer.innerHTML = localStorage.getItem("data");
}

showTask();