// change class from panel to panel-active

const panels = document.querySelectorAll('.panel')

panels.forEach((panels) => {
  panels.addEventListener('click', () => {
    panels.classList.add('active');
  })
})

function removeActiveClasses () {
  panels.forEach ((panels) => {
    panels.classList.remove('active')
  })
}
