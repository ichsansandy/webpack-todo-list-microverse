import loadTodoListCard from '../src/modules/loadTodoListCard.js';

const dummyArray = [
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
];
const simulateDOM = () => {
  const ul = document.createElement('ul');
  ul.className = 'list-container';
  document.body.appendChild(ul);
};

localStorage.clear();
simulateDOM();

describe('loadTodoListCard', () => {
  loadTodoListCard(dummyArray);
  const lists = document.querySelectorAll('.task-item');

  test('input height should change', () => {
    expect(lists.length).toBe(dummyArray.length);
  });
});
