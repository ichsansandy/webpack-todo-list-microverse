import './style.css';
import loadTodoListCard from './modules/loadTodoListCard.js';
import savingData from './modules/savingData.js';
import setFavicons from './modules/addingFavico.js';
import reorder from './modules/reorderArrayBasedOnIndex.js';
import addNewTask from './modules/addNewTask.js';

let todoList = JSON.parse(localStorage.getItem('todolist')) || [];

//  render to html
loadTodoListCard(todoList);

// clear all completed
const clearAllCompleted = document.querySelector('#clear-completed');

clearAllCompleted.addEventListener('click', () => {
  todoList = JSON.parse(localStorage.getItem('todolist')) || [];
  todoList = todoList.filter((list) => list.completed !== true);
  reorder(todoList, todoList.length);
  savingData(todoList);
  loadTodoListCard(todoList);
});

setFavicons('https://cdn-icons-png.flaticon.com/512/1024/1024824.png');

const taskInput = document.querySelector('#task-input');

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    todoList = JSON.parse(localStorage.getItem('todolist')) || [];

    addNewTask(taskInput.value, todoList);
    taskInput.value = '';
    savingData(todoList);
    loadTodoListCard(todoList);
  }
});
