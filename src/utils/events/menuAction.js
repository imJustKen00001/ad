export default function actionMenu(menuClass, btnClass, hideClass) {
  const menu = document.querySelector(`.${hideClass}`);
  const btn = document.querySelector(`.${btnClass}`);
  console.log(btn);

  btn.addEventListener("click", () => {
    if (menu.classList.contains(hideClass)) {
      menu.classList.remove(hideClass);
      btn.textContent = "Скрыть";
      btn.classList.add("read-more-button--blue-arrow-rotate");
    } else {
      menu.classList.add(hideClass);
      btn.textContent = "Показать все";
      btn.classList.remove("read-more-button--blue-arrow-rotate");
    }
  });
}
