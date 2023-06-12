import addNewTask from '../src/modules/addNewTask.js';
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

describe('addNewTask', () => {
  addNewTask('task 3', dummyArray);

  const newElement = {
    description: 'task 3',
    index: 3,
    completed: false,
  };

  loadTodoListCard(dummyArray);

  const newRenderedElement = document.getElementById(`#${newElement.index}`);

  test('increase the length of the array', () => {
    expect(dummyArray.length).toBe(3);
  });
  test('add new element to last index', () => {
    expect(dummyArray[dummyArray.length - 1]).toEqual(newElement);
  });
  test('add new element with completed false', () => {
    expect(dummyArray[dummyArray.length - 1].completed).toBe(false);
  });
  test('render the element to the list in last index', () => {
    expect(newRenderedElement).toBeDefined();
  });
});
