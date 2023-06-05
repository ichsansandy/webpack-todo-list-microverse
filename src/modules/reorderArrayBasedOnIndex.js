export default function reorder(arr, n) {
  const taskList = document.querySelectorAll('.task-item');
  const index = [];
  taskList.forEach((task) => {
    index.push(Number(task.id) - 1);
  });

  const temp = [...Array(n)];

  // arr[i] should be present at index[i] index
  for (let i = 0; i < n; i += 1) {
    temp[i] = arr[index[i]];
  }

  // Copy temp[] to arr[]
  for (let i = 0; i < n; i += 1) {
    arr[i] = temp[i];
    arr[i].index = i + 1;
  }
}
