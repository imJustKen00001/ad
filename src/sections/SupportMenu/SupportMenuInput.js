export default function SupportMenuInput(inputType) {
  let placeholder;

  if (inputType == "text") {
    placeholder = "Имя";
  } else if (inputType == "tel") {
    placeholder = "Телефон";
  } else {
    placeholder = "Электронная почта";
  }
  return `
     <input type="${inputType}" class="support-menu__input support-menu__input--${inputType}" placeholder="${placeholder}">
  `;
}
