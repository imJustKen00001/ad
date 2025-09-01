export default function sideMenuAction() {
  const sideMenu = document.querySelector(".side-menu");
  const container = sideMenu.querySelector(".side-menu__container");
  const burgerBtn = document.querySelector(".burger-menu-button");
  const closeBtn = sideMenu.querySelector(".side-menu__button--close");
  const callMenuBtn = sideMenu.querySelector(".side-menu__button--call");
  const supportMenuBtn = document.querySelector(".side-menu__button--chat");

  const scrollBlock = function (e) {
    e.preventDefault();
    container.scrollTop += e.deltaY;
  };

  const showMenu = function () {
    window.addEventListener("wheel", scrollBlock, { passive: false });
    sideMenu.style.display = "block";
    sideMenu.classList.remove("side-menu--hidden");
    sideMenu.classList.add("side-menu--show");
  };
  const closeMenu = function () {
    window.removeEventListener("wheel", scrollBlock, { passive: false });
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
  callMenuBtn.addEventListener("click", () => {
    if (window.innerWidth < 1440) {
      closeMenu();
    }
    return;
  });
  supportMenuBtn.addEventListener("click", () => {
    if (window.innerWidth < 1440) {
      closeMenu();
    }
    return;
  });

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width >= 1440) {
      showMenu();
    } else {
      closeMenu();
    }
  });
}
