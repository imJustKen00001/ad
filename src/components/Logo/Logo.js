import "./Logo.scss";
import "@header/components/HeaderLogo/HeaderLogo.scss";

export default function Logo(className, modifieClass, hideClass) {
  return `
      <div class="${className} ${modifieClass} ${hideClass} logo">
          <img src="public/assets/logos/logo.svg" alt="logo picture" class="${className}-image logo__image">
      </div>
  `;
}
