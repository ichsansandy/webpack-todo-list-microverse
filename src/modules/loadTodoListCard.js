import savingData from './savingData.js';
import updateCompleted from './updateCompleted.js';

export default function loadTodoListCard(arrayTodoList) {
  function loopTodoElement(item) {
    return `<li id="${item.index}" class="wrapper task-item" draggable="true">
                <span class="list"><input class="checkbox" type="checkbox" data-id="${item.index}" ${item.completed === false ? '' : 'checked'} />${item.description}</span>
                <span><i class="icon fas fa-grip-vertical"></i></span>
            </li>`;
  }

  //  sort based in index
  // arrayTodoList.sort((a, b) => a.index - b.index);

  const listContainer = document.querySelector('.list-container');

  listContainer.innerHTML = arrayTodoList.map((list) => loopTodoElement(list)).join('');

  const taskList = document.querySelectorAll('.task-item');
  taskList.forEach((task) => {
    task.addEventListener('dragstart', () => {
      setTimeout(() => {
        task.classList.add('dragging');
      }, 0);
    });

    function reorder(arr, index, n) {
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
      savingData(arr);
    }

    task.addEventListener('dragend', () => {
      task.classList.remove('dragging');
      const taskList = document.querySelectorAll('.task-item');
      const index = [];
      taskList.forEach((task) => {
        index.push(Number(task.id) - 1);
      });
      reorder(arrayTodoList, index, arrayTodoList.length);
      loadTodoListCard(arrayTodoList);
    });

    const initSortableList = (e) => {
      e.preventDefault();
      document.body.style.cursor = 'grabbing';
      const draggingItem = document.querySelector('.dragging');
      const siblings = [...listContainer.querySelectorAll('.task-item:not(.dragging)')];
      // eslint-disable-next-line max-len
      const nextSibling = siblings.find((sibling) => e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2);
      listContainer.insertBefore(draggingItem, nextSibling);
    };

    task.addEventListener('dragover', initSortableList);
  });

  // update array if checkbox checked
  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((box) => {
    box.addEventListener('change', () => {
      const id = Number(box.getAttribute('data-id'));
      updateCompleted(id, arrayTodoList);
      savingData(arrayTodoList);
    });
  });

  console.log(arrayTodoList);
}
