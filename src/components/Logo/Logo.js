import "./Logo.scss";

export default function Logo(className, modifieClass, hideClass) {
  return `
      <div class="${className} ${modifieClass} ${hideClass} logo">
          <img src="/ad/assets/logos/logo.svg" alt="logo picture" class="${className}-image logo__image">
      </div>
  `;
}
