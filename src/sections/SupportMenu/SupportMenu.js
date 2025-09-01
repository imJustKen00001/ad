import "./SupportMenu.scss";
import Button from "@components/Button/Button.js";
import SupportMenuInput from "./SupportMenuInput";
import SendButton from "@components/SendButton/SendButton";

export default function SupportMenu() {
  return `
      <aside class="support-menu support-menu--hidden">
      ${Button(
        "support-menu__button",
        "support-menu__button--close",
        "support-menu__button--hidden-small"
      )}
      <div class="support-menu__container">
        ${Button(
          "support-menu__button",
          "support-menu__button--close",
          "support-menu__button--hidden-large"
        )}
        <h2 class="support-menu__title support-menu__title--blue-line">
          Обратная связь
        </h2>

      <form class="support-menu__personal-info">
          ${SupportMenuInput("text")}
          ${SupportMenuInput("tel")}
          ${SupportMenuInput("email")}

          <textarea class="support-menu__input support-menu__input--message" placeholder="Сообщение"></textarea>

          <p class="support-menu__about-policy">
          Нажимая “отправить”, вы даете согласие на
          <a class="support-menu__link" href="#">обработку персональных данных</a>
           и соглашаетесь с нашей
           <a class="support-menu__link" href="#">политикой конфиденциальности</a>
          </p>
          ${SendButton("support-menu__send-button", "отправить", "submit")}
      </form>
      </div>
    </aside>
  `;
}
