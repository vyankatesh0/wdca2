// script.js

// Get elements from the DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const navigationLinks = document.querySelectorAll('.navigation a');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create task item element
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerText = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Add click event listener to delete button
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
    });

    // Append task item and delete button to the task list
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Handle add task button click event
addTaskBtn.addEventListener('click', addTask);

// Handle enter key press event on task input field
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Handle navigation link click event
navigationLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const nextPage = link.getAttribute('href');
    window.location.href = nextPage;
  });
});
