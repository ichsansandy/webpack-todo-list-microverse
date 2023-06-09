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

test('addNewTask increase the length of the array', () => {
  addNewTask('task 3', array);
  expect(array.length).toBe(3);
});
