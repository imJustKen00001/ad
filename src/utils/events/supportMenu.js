export default function supportMenuAction() {
  const supportMenu = document.querySelector(".support-menu");
  const sideMenu = document.querySelector(".side-menu");
  const requestBtn = document.querySelector(".side-menu__button--chat");
  const requestBtn2 = document.querySelector(".nav-menu__item--chat");
  const closeBtn = supportMenu.querySelector(".support-menu__button--close");
  const form = supportMenu.querySelector(".support-menu__personal-info");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const showMenu = function () {
    supportMenu.style.display = "block";
    supportMenu.classList.remove("support-menu--hidden");
    supportMenu.classList.add("support-menu--show");
    if (window.innerWidth < 1440) {
      sideMenu.classList.remove("side-menu--show");
      sideMenu.classList.add("side-menu--hidden");
    }
  };

  const closeMenu = function () {
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
  requestBtn.addEventListener("click", () => showMenu());
  closeBtn.addEventListener("click", () => closeMenu());
}
