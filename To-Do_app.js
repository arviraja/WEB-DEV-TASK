// script.js

document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const task = createTaskElement(taskText);
    document.getElementById('task-list').appendChild(task);
    
    saveTask(taskText);
    taskInput.value = '';
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', completeTask);

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}

function deleteTask(e) {
    const task = e.target.parentElement;
    task.remove();
    removeTaskFromStorage(task.textContent.replace('DeleteComplete', ''));
}

function completeTask(e) {
    const task = e.target.parentElement;
    task.classList.toggle('completed');
}

function saveTask(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        document.getElementById('task-list').appendChild(taskElement);
    });
}

function removeTaskFromStorage(taskText) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
