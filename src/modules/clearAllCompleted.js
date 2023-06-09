import reorder from './reorderArrayBasedOnIndex.js';
import savingData from './savingData.js';
import loadTodoListCard from './loadTodoListCard.js';

export default function clearAllCompleted(todoList) {
  const clearAllCompleted = document.querySelector('#clear-completed');

  clearAllCompleted.addEventListener('click', () => {
    todoList = JSON.parse(localStorage.getItem('todolist')) || [];
    todoList = todoList.filter((list) => list.completed !== true);
    reorder(todoList, todoList.length);
    savingData(todoList);
    loadTodoListCard(todoList);
  });
}
