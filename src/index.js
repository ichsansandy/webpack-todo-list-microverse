import './style.css';
import loadTodoListCard from './modules/loadTodoListCard.js';
import savingData from './modules/savingData.js';
import setFavicons from './modules/addingFavico.js';
import reorder from './modules/reorderArrayBasedOnIndex.js';
import addNewTask from './modules/addNewTask.js';

let todoList = [];

// checked local storage
const savedData = JSON.parse(localStorage.getItem('todolist'));

if (savedData) {
  todoList = savedData;
}

//  render to html
loadTodoListCard(todoList);

// clear all completed
const clearAllCompleted = document.querySelector('#clear-completed');

clearAllCompleted.addEventListener('click', () => {
  const savedData = JSON.parse(localStorage.getItem('todolist'));
  if (savedData) {
    todoList = savedData;
  }
  todoList = todoList.filter((list) => list.completed !== true);
  reorder(todoList, todoList.length);
  savingData(todoList);
  loadTodoListCard(todoList);
});

setFavicons('https://cdn-icons-png.flaticon.com/512/1024/1024824.png');

const taskInput = document.querySelector('#task-input');

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // function add the input to the array
    const savedData = JSON.parse(localStorage.getItem('todolist'));
    if (savedData) {
      todoList = savedData;
    }
    addNewTask(taskInput.value, todoList);
    taskInput.value = '';
    savingData(todoList);
    loadTodoListCard(todoList);
  }
});
