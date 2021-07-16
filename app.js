//define UI

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners

loadEventListeners();

function loadEventListeners() {
  //add task event
  form.addEventListener('submit', addTask);

  //add task

  function addTask(e) {
    if (taskInput.value === '') {
      alert('add a task');
    }
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';

    //create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));
    e.preventDefault();
  }
}
