const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__link");
const navBars = document.querySelector(".nav__bars");
const navSubLinks = document.querySelectorAll(".nav__sublinks");

const linkProduct = document.querySelector(".nav__sublink--product");
const linkCompany = document.querySelector(".nav__sublink--company");
const linkConnect = document.querySelector(".nav__sublink--connect");

function showNav() {
  navLinks.classList.toggle("show");

  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
      
      navSubLinks[i].classList.toggle("show");
      
      hideSubNav();
      
    });
    
  }
}

function hideSubNav() {
  if (linkProduct.classList.contains("show")) {
    linkCompany.classList.remove("show");
    linkConnect.classList.remove("show");
  } else if (linkCompany.classList.contains("show")) {
    linkProduct.classList.remove("show");
    linkConnect.classList.remove("show");
  } else if (linkConnect.classList.contains("show")) {
    linkProduct.classList.remove("show");
    linkCompany.classList.remove("show");
  } 
  
  
}

// FIXME: navigation doesnt want to open from top to bottom, it opens from bottom to top


navBars.addEventListener("click", showNav);
