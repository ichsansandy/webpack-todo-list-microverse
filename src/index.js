import './style.css';
import loadTodoListCard from './modules/loadTodoListCard.js';
import savingData from './modules/savingData.js';
import setFavicons from './modules/addingFavico.js';
import addNewTask from './modules/addNewTask.js';
import reorder from './modules/reorderArrayBasedOnIndex';

let todoList = [
  {
    description: 'Hello There',
    completed: false,
    index: 1,
  },
  {
    description: 'Capstone Project and its very long type of text which is annoying and maybe it will destroy everything',
    completed: true,
    index: 3,
  },
  {
    description: 'Getting A Job Quickly',
    completed: false,
    index: 2,
  },
  {
    description: 'Getting A Job Better And Higher Salary',
    completed: false,
    index: 4,
  },
];

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
    addNewTask(taskInput.value, todoList);
    taskInput.value = '';
    savingData(todoList);
    loadTodoListCard(todoList);
  }
});
