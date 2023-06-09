import savingData from '../src/modules/savingData.js';

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

localStorage.clear();

describe('savingData', () => {
  savingData(dummyArray);

  const loadData = JSON.parse(localStorage.getItem('todolist'));

  test('increase the length of the array', () => {
    expect(loadData).toEqual(dummyArray);
  });
});
