import "./Button.scss";
import "@header/components/BurgerMenu/BurgerMenu.scss";

export default function Button(
  className = "",
  modClassName = "",
  hiddeClass = ""
) {
  return `
  <button class="${className} ${modClassName} ${hiddeClass} button">

  </button>

  `;
}
