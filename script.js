// script.js

let tasks = []; // Array to store tasks

// Function to add a task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Store task object in array
        taskInput.value = "";
        renderTasks();
    } else {
        alert("Please enter a task!");
    }
}

// Function to render the task list
function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing list

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button onclick="deleteTask(${index})">❌</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Toggle completed status
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    renderTasks();
}