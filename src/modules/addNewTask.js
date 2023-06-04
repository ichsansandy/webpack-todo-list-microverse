export default function addNewTask(newTaskDesc, array) {
  const newTask = {
    description: newTaskDesc,
    completed: false,
    index: array.length + 1,
  };

  array.push(newTask);
}
