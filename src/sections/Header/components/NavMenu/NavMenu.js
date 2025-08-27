import "./NavMenu.scss";
import Button from "@components/Button/Button.js";

export default function NavMenu() {
  return `
  <nav class="nav-menu">
      <ul class="nav-menu__list">
          <li class="nav-menu__item nav-menu__item--call nav-menu__item--hidden-small-large">
              ${Button("nav-menu__button nav-menu__button--call")}
          </li>
          <li class="nav-menu__item nav-menu__item--chat nav-menu__item--hidden-small-large">
              ${Button("nav-menu__button nav-menu__button--chat")}
          </li>
          <li class="nav-menu__item nav-menu__item--profile nav-menu__item--hidden-small-large">
              ${Button("nav-menu__button nav-menu__button--profile")}
          </li>

          <li class="nav-menu__item nav-menu__item--request nav-menu__item--grey-line">
              <span class="nav-menu__item-text nav-menu__item-text--hidden-small-medium">
                Оставить заявку
              </span>
              ${Button("nav-menu__button nav-menu__button--request")}
          </li>
          <li class="nav-menu__item nav-menu__item--search-list">
              <span class="nav-menu__item-text nav-menu__item-text--hidden-small-medium">
                Статус ремонта
              </span>
              ${Button("nav-menu__button nav-menu__button--search-list")}
          </li>
      </ul>
  </nav>
  `;
}
