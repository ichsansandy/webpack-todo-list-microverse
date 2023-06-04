export default function removeTask(id, array) {
  return array.filter((item) => item.index !== id);
}
