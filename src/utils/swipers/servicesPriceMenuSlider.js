import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

export function servicesPriceMenuSlider() {
  const slider = document.querySelector(".services-price-menu__box");
  if (!slider) return;

  return new Swiper(".services-price-menu__box", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".services-price-menu__pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      768: {
        enabled: false,
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: false,
      },
    },
  });
}
