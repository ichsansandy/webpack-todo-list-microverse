import removeTask from '../src/modules/removeTask.js';

let array = [
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
];

describe('removeTask', () => {
  array = removeTask(2, array);
  test('reduce the length of the array by 1', () => {
    expect(array.length).toBe(2);
  });
  test('remove the right object', () => {
    expect(array[array.length - 1].index).toEqual(3);
  });
});
