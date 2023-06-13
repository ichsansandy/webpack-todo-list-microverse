import clearAllCompleted from '../src/modules/clearAllCompleted.js';
import loadTodoListCard from '../src/modules/loadTodoListCard';
import savingData from '../src/modules/savingData.js';

let dummyArray = [
  {
    description: 'task 1',
    index: 1,
    completed: true,
  },
  {
    description: 'task 2',
    index: 2,
    completed: false,
  },
  {
    description: 'task 3',
    index: 3,
    completed: true,
  },
  {
    description: 'task 4',
    index: 4,
    completed: true,
  },
];
const simulateDOM = () => {
  const ul = document.createElement('ul');
  ul.classList.add('list-container');
  document.body.appendChild(ul);

  const clearButton = document.createElement('button');
  clearButton.id = 'clear-completed';
  document.body.appendChild(clearButton);
};

simulateDOM();
savingData(dummyArray);

describe('clearAllCompleted', () => {
  clearAllCompleted(dummyArray);
  loadTodoListCard(dummyArray);

  const clearButton = document.getElementById('clear-completed');
  clearButton.click();

  dummyArray = JSON.parse(localStorage.getItem('todolist'));

  test('will remove all the completed task', () => {
    expect(dummyArray.length).toBe(1);
  });
});
