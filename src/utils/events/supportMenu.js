export default function supportMenuAction() {
  const supportMenu = document.querySelector(".support-menu");
  const container = document.querySelector(".support-menu__container");
  const sideMenu = document.querySelector(".side-menu");
  const requestBtn = document.querySelector(".side-menu__button--chat");
  const requestBtn2 = document.querySelector(".nav-menu__item--chat");
  const closeBtn = supportMenu.querySelectorAll(".support-menu__button--close");
  const form = supportMenu.querySelector(".support-menu__personal-info");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const scrollBlock = function (e) {
    e.preventDefault();
    container.scrollTop += e.deltaY;
  };

  const showMenu = function () {
    window.addEventListener("wheel", scrollBlock, { passive: false });
    supportMenu.style.display = "block";
    supportMenu.classList.remove("support-menu--hidden");
    supportMenu.classList.add("support-menu--show");
  };

  const closeMenu = function () {
    window.removeEventListener("wheel", scrollBlock, { passive: false });
    supportMenu.classList.remove("support-menu--show");
    supportMenu.classList.add("support-menu--hidden");
    supportMenu.addEventListener("animationend", () => {
      supportMenu.classList.contains("support-menu--hidden")
        ? (supportMenu.style.display = "none")
        : "";
    });
  };

  supportMenu.addEventListener("click", (event) => {
    event.target === supportMenu ? closeMenu() : "";
  });
  requestBtn2.addEventListener("click", () => showMenu());
  requestBtn.addEventListener("click", () => {
    window.removeEventListener("wheel", scrollBlock, { passive: false });
    showMenu();
  });
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => closeMenu());
  });
}
