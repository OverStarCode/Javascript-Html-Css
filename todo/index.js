 var addTask = document.getElementById("add-task");

 var taskInput = document.getElementById("new-task");

 var taskList = document.getElementById("todo-list");


var TaskArray =[]


// Function to add new task

function addNewTask(title, dueDate) {
    var newTask = {
        id: TaskArray.length + 1,
        title: title,
        completed: false,
        todo: true,
        inProgress: false,
        dueDate: dueDate
    }
    TaskArray.push(newTask);
    displayTasks();
}

window.addEventListener("keypress",function(e) {
   if(taskInput.value != "") {
    if(e.key == "Enter"){
        addNewTask(taskInput.value, new Date().toDateString());
        taskInput.value = "";
    }
   }
})
// Function to display tasks

function displayTasks() {

    if(TaskArray.length < 1) {
        taskList.innerHTML = '<h1 style="color: white; padding: 10px; margin: 10px auto;">No tasks here to show now</h1>';
        return;
        
    }
    taskList.innerHTML = '';
    TaskArray.forEach(function(task) {
        var newTask = document.createElement("li");
        newTask.setAttribute("id", task.id);
        newTask.className = "task";
            newTask.innerHTML = `
          <input type="checkbox" id="${task.id}"  ${task.completed ?'checked' : ""} />
          <label for="${task.id}">${task.title}  <span> ${task.dueDate} </span></label>
          <button class="delete" id=${task.id}>
            <i id="delete" class="fa-solid fa-delete-left"></i>
          </button>

          <button class="edit" id=${task.id}>
            <i id="edit" class="fa-solid fa-pen-to-square"></i>
          </button>
  `
        taskList.appendChild(newTask);
    });
}

// Event listener for add task

addTask.addEventListener("click", function() {
    console.log("add task");
    var title = taskInput.value;
    var dueDate = new Date().toDateString();
 

  
    
    if(title && dueDate) {
        addNewTask(title, dueDate);
        taskInput.focus();
        displayTasks();
        taskInput.value = '';
    }
})
displayTasks();
// Event listener for delete task

taskList.addEventListener("click", function(event) {
    if(event.target.classList.contains("delete") || event.target.getAttribute("id") == "delete") {
      
      var taskId= "";
        if(event.target.getAttribute("id") == "delete"){
         taskId = parseInt(event.target.parentElement.id);
        } else {
             taskId = parseInt(event.target.id);
        }
        TaskArray = TaskArray.filter(function(task) {
            return task.id!== taskId;
        });
        displayTasks();
       
    
    }
})

// Event listener for edit task

taskList.addEventListener("click", function(event) {
    if(event.target.classList.contains("edit"  || event.target.getAttribute("id") == "edit")) {
        var taskId= "";
        if(event.target.getAttribute("id") == "delete"){
         taskId = parseInt(event.target.parentElement.id);
        } else {
             taskId = parseInt(event.target.id);
        }

        var task = TaskArray.find(function(task) {
            return task.id === taskId;
        });

        var editInput = prompt("Enter new title for task:", task.title);
        if(editInput) {
            task.title = editInput;
            displayTasks();
        }
    }
})

// Event listener for checkbox

taskList.addEventListener("change", function(event) {
    if(event.target.type === "checkbox") {
        var taskId = parseInt(event.target.id);
        var task = TaskArray.find(function(task) {
            return task.id === taskId;
        });

        task.completed = event.target.checked;
        displayTasks();
    }
})



// Event listener for clear completed tasks

var clearCompletedTasks = document.getElementById("clear-completed");

clearCompletedTasks.addEventListener("click", function() {
    TaskArray = TaskArray.filter(function(task) {
        return!task.completed;
    });
    displayTasks();
})




// show all tasks    

var showAllTasks = document.getElementById("all");

showAllTasks.addEventListener("click", function() {
    displayTasks();
})