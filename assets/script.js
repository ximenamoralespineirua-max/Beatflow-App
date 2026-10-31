const menuButton = document.querySelector(".header__boton");
const menuList = document.querySelector(".nav__lista");

menuButton.addEventListener("click", () => {
  console.log("Button clicked");

  menuList.classList.toggle("nav__lista--activa");
});