import loadTodoListCard from '../src/modules/loadTodoListCard.js';
import removeTask from '../src/modules/removeTask.js';
import reorder from '../src/modules/reorderArrayBasedOnIndex.js';

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
    completed: false,
  },
  {
    description: 'task 4',
    index: 4,
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
loadTodoListCard(dummyArray);

describe('reorder ', () => {
  dummyArray = removeTask(2, dummyArray);
  reorder(dummyArray, dummyArray.length);
  test('change the last todo index to be 3', () => {
    expect(dummyArray[dummyArray.length - 1].description).toBe('task 4');
    expect(dummyArray[dummyArray.length - 1].index).toBe(3);
    expect(dummyArray[dummyArray.length - 1].completed).toBe(false);
  });
  test('change the first todo index to be 1', () => {
    expect(dummyArray[0].description).toBe('task 1');
    expect(dummyArray[0].index).toBe(1);
    expect(dummyArray[0].completed).toBe(true);
  });
});
