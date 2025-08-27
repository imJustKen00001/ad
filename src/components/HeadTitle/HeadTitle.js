import "./HeadTitle.scss";

export default function HeadTitle(className, modifieClass, hideClass) {
  return `
    <div class="${className}  ${modifieClass} ${hideClass} head-title head-title--blue-line">
      <h1 class="${className}__text head-title__text">
          Услуги и сервисы
      </h1>
    </div>
  `;
}
