export default function SideMenuItem(text, modifieClass, hiddeClass) {
  return `
      <li class="side-menu__item ${modifieClass}">
        <a class="side-menu__link">${text} </a>
      </li>
  `;
}
