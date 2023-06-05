export default function draggingList(item) {
  item.addEventListener('dragstart', () => {
    item.classList.add('dragging');
  });
}
