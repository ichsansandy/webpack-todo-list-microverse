import addNewTask from '../src/modules/addNewTask.js';

const array = [
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

describe('addNewTask', () => {
  addNewTask('task 3', array);

  const newElement = {
    description: 'task 3',
    index: 3,
    completed: false,
  };

  test('increase the length of the array', () => {
    expect(array.length).toBe(3);
  });
  test('add new element to last index', () => {
    expect(array[array.length - 1]).toEqual(newElement);
  });
  test('add new element with completed false', () => {
    expect(array[array.length - 1].completed).toBe(false);
  });
});
