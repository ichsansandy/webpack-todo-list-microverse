import updateCompleted from '../src/modules/updateCompleted.js';

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

describe('udpateCompleted', () => {
  test('will change the completed for the given index', () => {
    updateCompleted(2, dummyArray);
    expect(dummyArray[1].completed).toBe(true);
  });
  test('will change the completed to the right value', () => {
    updateCompleted(1, dummyArray);
    expect(dummyArray[0].completed).toBe(false);
  });
});
