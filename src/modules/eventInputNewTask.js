import addNewTask from './addNewTask.js';
import savingData from './savingData.js';
import loadTodoListCard from './loadTodoListCard.js';

export default function eventInputNewTask(todoList) {
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
}
