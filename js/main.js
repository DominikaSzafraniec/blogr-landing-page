const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__link");
const navBars = document.querySelector(".nav__bars");
const navSubLinks = document.querySelectorAll(".nav__sublinks");

function showNav() {
  navLinks.classList.toggle("show");

  // navLink.forEach(link => {
  //   link.addEventListener('click', () => {
  //     navSubLinks.forEach(item => {
  //       item.classList.toggle('show')
  //     })
  //   })
  // })

  for (let i = 0; i <= navLink.length; i++) {

    navLink[i].addEventListener('click', () => {
      navSubLinks[i].classList.toggle('show')
    })
    
  }
}

navBars.addEventListener("click", showNav);
