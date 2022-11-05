// change class from panel to panel-active

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panels.addEventListener('click', () => {
    panels.classList.add('active');
  })
})

function removeActiveClasses () {
  panels.forEach ((panel) => {
    panels.classList.remove('active')
  })
}
