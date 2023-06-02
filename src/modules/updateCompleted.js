export default function updateCompleted(inputId, array) {
  array.map((item) => {
    if (item.index === inputId) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
    return item;
  });
}
