import './style.css';

const todoList = [
  {
    description: 'Hello There',
    completed: false,
    index: 1,
  },
  {
    description: 'Capstone Project and its very long type of text which is annoying and maybe it will destroy everything',
    completed: true,
    index: 3,
  },
  {
    description: 'Getting A Job Quickly',
    completed: false,
    index: 2,
  },
];

//  sort based in index
todoList.sort((a, b) => a.index - b.index);

function loopTodoElement(item) {
  return item.completed === false
    ? `<li class="wrapper">
        <span class="list"><input class="checkbox" type="checkbox" />${item.description}</span>
        <span><i class="icon fas fa-grip-vertical"></i></span>
    </li>`
    : `<li class="wrapper">
        <span class="list"><input class="checkbox" type="checkbox" checked />${item.description}</span>
        <span><i class="icon fas fa-grip-vertical"></i></span>
    </li>`;
}

const listContainer = document.querySelector('.list-container');

listContainer.innerHTML = todoList.map((list) => loopTodoElement(list)).join('');
