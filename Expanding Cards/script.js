// change class from panel to panel-active

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active');
  })
})

function removeActiveClasses () {
  panels.forEach ((panel) => {
    panel.classList.remove('active')
  })
}
