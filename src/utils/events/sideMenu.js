export default function sideMenuAction() {
  const sideMenu = document.querySelector(".side-menu");
  const burgerBtn = document.querySelector(".burger-menu-button");
  const closeBtn = sideMenu.querySelector(".side-menu__button--close");

  const showMenu = function () {
    sideMenu.style.display = "block";
    sideMenu.classList.remove("side-menu--hidden");
    sideMenu.classList.add("side-menu--show");
  };
  const closeMenu = function () {
    sideMenu.classList.remove("side-menu--show");
    sideMenu.classList.add("side-menu--hidden");
    sideMenu.addEventListener("animationend", () => {
      sideMenu.classList.contains("side-menu--hidden")
        ? (sideMenu.style.display = "none")
        : "";
    });
  };

  sideMenu.addEventListener("click", (event) => {
    event.target === sideMenu ? closeMenu() : "";
  });
  burgerBtn.addEventListener("click", () => showMenu());
  closeBtn.addEventListener("click", () => closeMenu());

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width >= 1440) {
      showMenu();
    } else {
      closeMenu();
    }
  });
}
