export default function savingData(data) {
  localStorage.setItem('todolist', JSON.stringify(data));
}
