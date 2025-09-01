export default function supportMenuAction() {
  const callRequestMenu = document.querySelector(".call-request-menu");
  const container = document.querySelector(".call-request-menu__container");
  const sideMenu = document.querySelector(".side-menu");
  const requestBtn = sideMenu.querySelector(".side-menu__button--call");
  const requestBtn2 = document.querySelector(".nav-menu__item--call");
  const closeBtn = callRequestMenu.querySelectorAll(
    ".call-request-menu__button--close"
  );
  const form = callRequestMenu.querySelector(
    ".call-request-menu__personal-info"
  );

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const scrollBlock = function (e) {
    e.preventDefault();
    container.scrollTop += e.deltaY;
  };

  const showMenu = function () {
    window.addEventListener("wheel", scrollBlock, { passive: false });
    callRequestMenu.style.display = "block";
    callRequestMenu.classList.remove("call-request-menu--hidden");
    callRequestMenu.classList.add("call-request-menu--show");
    callRequestMenu.style.display = "block";
  };
  const closeMenu = function () {
    window.removeEventListener("wheel", scrollBlock, { passive: false });
    callRequestMenu.classList.remove("call-request-menu--show");
    callRequestMenu.classList.add("call-request-menu--hidden");
    callRequestMenu.addEventListener("animationend", () => {
      callRequestMenu.classList.contains("call-request-menu--hidden")
        ? (callRequestMenu.style.display = "none")
        : "";
    });
  };
  callRequestMenu.addEventListener("click", (event) => {
    event.target === callRequestMenu ? closeMenu() : "";
  });
  requestBtn.addEventListener("click", () => showMenu());
  requestBtn2.addEventListener("click", () => showMenu());
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => closeMenu());
  });
}
