document.addEventListener('scroll', event => {
    const appbarElement = document.querySelector('.appbar')

    const scrollPosition = window.scrollY
    const viewportHeight = window.innerHeight
    const appbarHeight = appbarElement.clientHeight

    const isScrollAfterHeroSection = scrollPosition > viewportHeight - appbarHeight

    if (isScrollAfterHeroSection) {
      appbarElement.classList.add('appbar--filled')
    } else {
      appbarElement.classList.remove('appbar--filled')
    }
})

const menu = document.getElementById('main-menu')
let showMenu = false

function toggleMenu() {
  showMenu = !showMenu

  if (showMenu) {
    menu.classList.add('appbar__menu--open')
} else {
    menu.classList.remove('appbar__menu--open')
  }
}