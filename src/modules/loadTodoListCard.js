import savingData from './savingData.js';
import updateCompleted from './updateCompleted.js';
import reorder from './reorderArrayBasedOnIndex.js';
import editTaskDesc from './editTaskDescription.js';
import removeTask from './removeTask.js';

export default function loadTodoListCard(arrayTodoList) {
  function loopTodoElement(item) {
    return `<li id="${item.index}" class="wrapper task-item" >
                <span class="list ${item.completed === false ? '' : 'checked'}"><input class="checkbox" type="checkbox" data-id="${item.index}" ${item.completed === false ? '' : 'checked'} />
                  <textarea class="input" data-id="${item.index}">${item.description}</textarea>
                </span>
                <span id="${item.index}-grab-icon" class="grab" draggable="true"><i class="icon fas fa-grip-vertical"></i></span>
                <span id="${item.index}-delete-icon" class="hidden remove-button" data-id="${item.index}" ><i class="icon fas fa-trash"></i></span>
            </li>`;
  }

  const listContainer = document.querySelector('.list-container');

  listContainer.innerHTML = arrayTodoList.map((list) => loopTodoElement(list)).join('');

  const textareaInputs = document.querySelectorAll('.input');

  textareaInputs.forEach((input) => {
    if (input.scrollHeight > 50) {
      const height = input.scrollHeight;
      input.style.height = `${height - 10}px`;
    }

    input.addEventListener('keyup', (e) => {
      e.target.style.height = 'auto';
      const height = e.target.scrollHeight;
      e.target.style.height = `${height - 20}px`;
      if (e.key === 'Enter') {
        input.value = input.value.replace(/\n/g, '');
        const index = Number(input.getAttribute('data-id')) - 1;
        editTaskDesc(input.value, arrayTodoList, index);
        savingData(arrayTodoList);
        loadTodoListCard(arrayTodoList);
      }
    });

    const inputId = input.getAttribute('data-id');
    const grabIcon = document.getElementById(`${inputId}-grab-icon`);
    const deleteIcon = document.getElementById(`${inputId}-delete-icon`);

    input.addEventListener('focusin', () => {
      grabIcon.classList.add('hidden');
      deleteIcon.classList.remove('hidden');
    });

    input.addEventListener('focusout', () => {
      setTimeout(() => {
        grabIcon.classList.remove('hidden');
        deleteIcon.classList.add('hidden');
      }, 400);
    });
  });

  const removeButtons = document.querySelectorAll('.remove-button');

  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-id'));
      arrayTodoList = removeTask(id, arrayTodoList);
      reorder(arrayTodoList, arrayTodoList.length);
      savingData(arrayTodoList);
      loadTodoListCard(arrayTodoList);
    });
  });

  const taskList = document.querySelectorAll('.task-item');
  taskList.forEach((task) => {
    task.addEventListener('dragstart', () => {
      setTimeout(() => {
        task.classList.add('dragging');
      }, 0);
    });

    task.addEventListener('dragend', () => {
      task.classList.remove('dragging');
      reorder(arrayTodoList, arrayTodoList.length);
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
      loadTodoListCard(arrayTodoList);
    });
  });
}
