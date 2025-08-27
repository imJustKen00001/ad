import "./ReadMoreBtn.scss";

export default function ReadMoreBtn(className, classHide, text) {
  return `
              <button class="${className} ${classHide} read-more-button read-more-button--blue-arrow">
                ${text}
             </button>
  `;
}
