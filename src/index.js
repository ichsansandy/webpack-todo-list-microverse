import './style.css';
import loadTodoListCard from './modules/loadTodoListCard.js';
import updateCompleted from './modules/updateCompleted';
import savingData from './modules/savingData';

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

//  sort based in index
todoList.sort((a, b) => a.index - b.index);

//  render to html
loadTodoListCard(todoList);

// update array if checkbox checked

const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach((box) => {
  box.addEventListener('change', () => {
    const id = Number(box.getAttribute('data-id'));
    updateCompleted(id, todoList);
    savingData(todoList);
  });
});

// clear all completed

const clearAllCompleted = document.querySelector('#clear-completed');

clearAllCompleted.addEventListener('click', () => {
  todoList = todoList.filter((list) => list.completed !== true);
  savingData(todoList);
  loadTodoListCard(todoList);
});
