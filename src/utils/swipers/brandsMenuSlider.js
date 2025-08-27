import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

export function brandsMenuSlider() {
  return new Swiper(".brands-menu__box", {
    slidesPerView: 1.2,
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: ".brands-menu__pagination",
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
