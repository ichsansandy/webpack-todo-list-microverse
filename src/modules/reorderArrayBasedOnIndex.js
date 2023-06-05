export default function reorder(arr, index, n) {
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
