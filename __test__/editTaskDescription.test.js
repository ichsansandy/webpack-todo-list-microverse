import editTaskDesc from '../src/modules/editTaskDescription.js';

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

describe('editTaskDesc ', () => {
  const editedValue = 'edited task 2';
  const indexTarget = 1;
  editTaskDesc(editedValue, dummyArray, indexTarget);
  test('change the description', () => {
    expect(dummyArray[indexTarget].description).toBe(editedValue);
  });
});
