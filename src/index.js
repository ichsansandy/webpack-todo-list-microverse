import './style.css';
import loadTodoListCard from './modules/loadTodoListCard.js';
import setFavicons from './modules/addingFavico.js';
import clearAllCompleted from './modules/clearAllCompleted.js';
import eventInputNewTask from './modules/eventInputNewTask.js';

const todoList = JSON.parse(localStorage.getItem('todolist')) || [];

//  render to html
loadTodoListCard(todoList);

// clear all completed
clearAllCompleted(todoList);
// add new task
eventInputNewTask(todoList);

setFavicons('https://cdn-icons-png.flaticon.com/512/1024/1024824.png');
