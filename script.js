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
