// change class from panel to panel-active

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.add('active');
  })
})