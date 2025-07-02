// ===== Variables and Data Structure
let tasks = [];
let currentFilter = "all";
let taskIdCounter = 1;

// DOM Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompleted");
const emptyState = document.getElementById("emptyState");

// Stats elements
const taskCount = document.getElementById("taskCount");
const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");
const completionRate = document.getElementById("completionRate");

// ===== Create Task Object =====
function createTask(text) {
  return {
    id: taskIdCounter++,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

// ===== Add Task Function =====
function addTask() {
  console.log("Add task clicked!");
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  const newTask = createTask(text);
  tasks.push(newTask);
  taskInput.value = "";

  console.log("Task added:", newTask);
  console.log("All tasks:", tasks);

  renderTasks();
  updateStats();
  saveToLocalStorage();
}

// ===== Filter Tasks =====
function getFilteredTasks() {
  switch (currentFilter) {
    case "completed":
      return tasks.filter((task) => task.completed);
    case "pending":
      return tasks.filter((task) => !task.completed);
    default:
      return tasks;
  }
}

// ===== Create Task Element =====
function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = `task-item ${task.completed ? "completed" : ""}`;
  li.setAttribute("data-id", task.id);

  li.innerHTML = `
                <div class="task-checkbox ${
                  task.completed ? "checked" : ""
                }" onclick="toggleTask(${task.id})"></div>
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="edit-btn" onclick="editTask(${
                      task.id
                    })">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(${
                      task.id
                    })">Delete</button>
                </div>
            `;

  return li;
}

// ===== Render Tasks =====
function renderTasks() {
  console.log("Rendering tasks...");

  // Clear current list
  taskList.innerHTML = "";

  const filteredTasks = getFilteredTasks();
  console.log("Filtered tasks:", filteredTasks);

  if (filteredTasks.length === 0) {
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  filteredTasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  });
}

// ===== Toggle Task Completion =====
function toggleTask(id) {
  console.log("Toggle task:", id);
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    console.log("Task toggled:", task);
    renderTasks();
    updateStats();
    saveToLocalStorage();
  }
}

// ===== Delete Task =====
function deleteTask(id) {
  console.log("Delete task:", id);
  tasks = tasks.filter((t) => t.id !== id);
  console.log("Remaining tasks:", tasks);
  renderTasks();
  updateStats();
  saveToLocalStorage();
}

// ===== Edit Task (Basic version) =====
function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    const newText = prompt("Edit task:", task.text);
    if (newText && newText.trim() !== "") {
      task.text = newText.trim();
      renderTasks();
      saveToLocalStorage();
    }
  }
}

// ===== Update Statistics =====
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const completionPercentage =
    total > 0 ? Math.round((completed / total) * 100) : 0;

  totalTasks.textContent = total;
  completedTasks.textContent = completed;
  pendingTasks.textContent = pending;
  completionRate.textContent = completionPercentage + "%";

  taskCount.textContent = `${pending} task${
    pending !== 1 ? "s" : ""
  } remaining`;
}

// ===== LocalStorage Functions =====
function saveToLocalStorage() {
  try {
    localStorage.setItem("taskManager_tasks", JSON.stringify(tasks));
    localStorage.setItem("taskManager_counter", taskIdCounter.toString());
    console.log("Saved to localStorage");
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

function loadFromLocalStorage() {
  try {
    const savedTasks = localStorage.getItem("taskManager_tasks");
    const savedCounter = localStorage.getItem("taskManager_counter");

    if (savedTasks) {
      tasks = JSON.parse(savedTasks);
      console.log("Loaded tasks:", tasks);
    }

    if (savedCounter) {
      taskIdCounter = parseInt(savedCounter);
    }
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    tasks = [];
    taskIdCounter = 1;
  }
}

// ===== Clear Completed Tasks =====
function clearCompleted() {
  tasks = tasks.filter((t) => !t.completed);
  renderTasks();
  updateStats();
  saveToLocalStorage();
}

// ===== Event Listeners =====
function initializeEventListeners() {
  console.log("Setting up event listeners...");

  // Add task button
  addBtn.addEventListener("click", addTask);

  // Enter key in input
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.getAttribute("data-filter");
      console.log("Filter changed to:", currentFilter);
      renderTasks();
    });
  });

  // Clear completed button
  clearCompletedBtn.addEventListener("click", clearCompleted);
}

// ===== Initialize App =====
function initApp() {
  console.log("Task Manager starting...");

  // Load saved tasks
  loadFromLocalStorage();

  // Set up event listeners
  initializeEventListeners();

  // Initial render
  renderTasks();
  updateStats();

  console.log("Task Manager ready!");
  console.log("Current tasks:", tasks);
}

// ===== START THE APP =====
document.addEventListener("DOMContentLoaded", initApp);
