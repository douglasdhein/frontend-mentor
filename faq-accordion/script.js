const accordionButtons = document.querySelectorAll('.accordion-button')

if (accordionButtons.length > 0) {
  const firstItem = accordionButtons[0].parentElement
  firstItem.classList.add('open')
  accordionButtons[0].setAttribute('aria-expanded', 'true')
}

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement
    const isOpen = item.classList.contains('open')

    item.classList.toggle('open')
    button.setAttribute('aria-expanded', !isOpen)
  })
})