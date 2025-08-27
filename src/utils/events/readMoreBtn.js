export default function readMoreBtn() {
  const btn = document.querySelector(".main-about__button");
  const text = document.querySelector(".main-about__caption");
  const hiddenText = document.querySelectorAll("span[data-hidden='true']");

  btn.addEventListener("click", () => {
    hiddenText.forEach((el) => {
      if (el.classList.contains("main-about__caption--hidden")) {
        el.classList.remove("main-about__caption--hidden");
        btn.textContent = "Скрыть";
        btn.classList.add("read-more-button--blue-arrow-rotate");
      } else {
        el.classList.add("main-about__caption--hidden");
        btn.textContent = "Читать далее";
        btn.classList.remove("read-more-button--blue-arrow-rotate");
      }
    });
  });
}
