export default function loadTodoListCard(arrayTodoList) {
  function loopTodoElement(item) {
    return `<li id="${item.index}" class="wrapper">
                <span class="list"><input class="checkbox" type="checkbox" data-id="${item.index}" ${item.completed === false ? '' : 'checked'} />${item.description}</span>
                <span><i class="icon fas fa-grip-vertical"></i></span>
            </li>`;
  }

  const listContainer = document.querySelector('.list-container');

  listContainer.innerHTML = arrayTodoList.map((list) => loopTodoElement(list)).join('');
}
