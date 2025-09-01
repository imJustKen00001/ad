import "./SideMenu.scss";
import Button from "@components/Button/Button";
import Logo from "@components/Logo/Logo";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
  return `
      <aside class="side-menu">
        <div class="side-menu__container">
          <div class="side-menu__header">
              ${Button(
                "side-menu__button",
                "side-menu__button--close",
                "side-menu__button--hidden-large"
              )}
              ${Logo()}
              ${Button("side-menu__button", "side-menu__button--search")}
          </div>
          <ul class="side-menu__list">
            ${SideMenuItem("Ремонт техники", "side-menu__item--active")}
            ${SideMenuItem("Услуги и сервисы")}
            ${SideMenuItem("Корпоративным клиентам")}
            ${SideMenuItem("Продавцам техники")}
            ${SideMenuItem("Партнерам")}
            ${SideMenuItem("Производителям")}
            ${SideMenuItem("Наши сервисные центры")}
            ${SideMenuItem("Контакты")}
          </ul>
          <div class="side-menu__nav">
            ${Button("side-menu__button", "side-menu__button--call")}
            ${Button("side-menu__button", "side-menu__button--chat")}
            ${Button("side-menu__button", "side-menu__button--profile")}
          </div>

          <div class="side-menu__footer">
            <a href="mailto:mail@cps.com" class="side-menu__email">
            mail@cps.com
            </a>

            <a href="tel:88008908900" class="side-menu__number">
            8 800 890 8900
            </a>
            <div class="side-menu__lang-change">
                <p class="side-menu__lang side-menu__lang--ru side-menu__lang--active"> ru</p>
                <p class="side-menu__lang side-menu__lang--en">en </p>
                <p class="side-menu__lang side-menu__lang--ch">ch </p>
            </div>
          </div>
        </div>
      </aside>

  `;
}
