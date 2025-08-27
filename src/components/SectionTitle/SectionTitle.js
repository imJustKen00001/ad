import "./SectionTitle.scss";

export default function SectionTitle(className, text) {
  return `
  <div class="section-title ${className}">
    <h2 class="${className}-text section-title__text">
        ${text}
    </h2>
  </div>
  `;
}
