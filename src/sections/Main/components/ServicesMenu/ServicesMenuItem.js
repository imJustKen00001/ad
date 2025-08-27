export default function ServicesMenuSlide(text, url = "#") {
  return `
      <div class="swiper-slide services-menu__item">
      <a href="${url}" class="services-menu__link">
          ${text}
      </a>
      </div>
  `;
}
