import savingData from './savingData.js';
import updateCompleted from './updateCompleted.js';
import reorder from './reorderArrayBasedOnIndex.js';

export default function loadTodoListCard(arrayTodoList) {
  function loopTodoElement(item) {
    return `<li id="${item.index}" class="wrapper task-item" draggable="true">
                <span class="list"><input class="checkbox" type="checkbox" data-id="${item.index}" ${item.completed === false ? '' : 'checked'} />${item.description}</span>
                <span><i class="icon fas fa-grip-vertical"></i></span>
            </li>`;
  }

  const listContainer = document.querySelector('.list-container');

  listContainer.innerHTML = arrayTodoList.map((list) => loopTodoElement(list)).join('');

  const taskList = document.querySelectorAll('.task-item');
  taskList.forEach((task) => {
    task.addEventListener('dragstart', () => {
      setTimeout(() => {
        task.classList.add('dragging');
      }, 0);
    });

    task.addEventListener('dragend', () => {
      task.classList.remove('dragging');
      const taskList = document.querySelectorAll('.task-item');
      const index = [];
      taskList.forEach((task) => {
        index.push(Number(task.id) - 1);
      });
      reorder(arrayTodoList, index, arrayTodoList.length);
      savingData(arrayTodoList);
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
}
