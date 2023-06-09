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
];
test('removeTask reduce the length of the array by 1', () => {
  array = removeTask(1, array);

  expect(array.length).toBe(1);
});
