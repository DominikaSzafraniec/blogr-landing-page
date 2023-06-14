const navLinks = document.querySelector('.nav__links')

const navBars = document.querySelector('.nav__bars')

const headerBox = document.querySelector('.header__box')

function showNav() {
  navLinks.classList.toggle('show')
  headerBox.classList.toggle('hide')
}

navBars.addEventListener('click', showNav)

