import "./CallRequestMenu.scss";
import Button from "@components/Button/Button.js";
import SendButton from "@components/SendButton/SendButton.js";

export default function CallRequestMenu() {
  return `
      <aside class="call-request-menu">
      <div class="call-request-menu__container">
        ${Button(
          "call-request-menu__button",
          "call-request-menu__button--close"
        )}
        <h2 class="call-request-menu__title call-request-menu__title--blue-line">
            Заказать звонок
        </h2>

        <form class="call-request-menu__personal-info">
          <input type="tel" placeholder="Телефон" class="call-request-menu__input call-request-menu__input--number"></input>

          <p class="call-request-menu__about-policy">
          Нажимая “отправить”, вы даете согласие на
          <a class="call-request-menu__link" href="#">обработку персональных данных</a>
           и соглашаетесь с нашей
           <a class="call-request-menu__link" href="#">политикой конфиденциальности</a>
          </p>
          ${SendButton("call-request-menu__send-button", "отправить", "submit")}
        </form>
        </div>
      </aside>
  `;
}
