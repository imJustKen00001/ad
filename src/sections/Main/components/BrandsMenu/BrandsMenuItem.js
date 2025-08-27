import LinkButton from "@components/LinkButton/LinkButton";

export default function BrandsMenuItem(num) {
  return `
      <div class="swiper-slide brands-menu__item">
              <img src="/assets/logos/Bitmap-${num}.svg" alt="brand logo image" class="brands-menu__brand-img">
              ${LinkButton("brands-menu__button")}
          </div>

  `;
}
