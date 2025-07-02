"use strict";
console.log("Task Manager loaded! Ready for your JavaScript implementation.");
// Data structure
let tasks = []; // Hold all task objects
let currentFilter = "all"; // Track which filter is active
let taskIdCounter = 1; // For unique task IDs

// references to DOM elements we'll use frequently
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompleted");
const emptyState = document.getElementById("emptyState");

// stats elements
const taskCount = document.getElementById("taskCount");
const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");
const CompletionRate = document.getElementById("CompletionRate");

// creates a new task object
function createTask(text) {
  return {
    id: taskIdCounter++,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

// adding new task
function addTask() {
  const text = taskInput.ValueMax.trim();

  //validation
  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  //   create and add the task
  const newTask = createTask(text);
  tasks.push(newTask);

  //   clear input
  taskInput.value = "";

  // update the display
  renderTasks();
  updateStats();
  saveToLocalStorage();

  console.log("Task added", newTask);
}

// create render function
//render task in the DOM
function renderTasks() {
  taskList.innerHTML = "";
  const filteredTasks = getFilteredTasks();

  // show empty state if no tasks
  if (filteredTasks.length === 0) {
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  // create HTML for each task
  filteredTasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  });
}

// helper function to filter tasks
function getFilteredTasks() {
  switch (currentFilter) {
    case "completed":
      return tasks.filter((task) => task.completed);
    case "pending":
      return tasks.filter((task) => !task.completed);
  }
}
