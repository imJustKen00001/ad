import "./Header.scss";
import HeadTitle from "@components/HeadTitle/HeadTitle.js";
import "./components/HeadTitle/HeadTitle.scss";
import Button from "@components/Button/Button.js";
import Logo from "@components/Logo/Logo.js";
import "./components/HeaderLogo/HeaderLogo.scss";
import NavMenu from "./components/NavMenu/NavMenu.js";

export default function Header() {
  return `
  <header class="header">
  ${HeadTitle(
    "services-menu-title",
    "services-menu-title--blue-line",
    "services-menu-title--hidden-small-med"
  )}
  ${Button(
    "burger-menu-button",
    "burger-menu-button--grey-line",
    "burger-menu-button--hidden-large"
  )}
  ${Logo(
    "header__logo",
    "header__logo--grey-line",
    "header__logo--hidden-large"
  )}
  ${NavMenu()}
  </header>
  `;
}
