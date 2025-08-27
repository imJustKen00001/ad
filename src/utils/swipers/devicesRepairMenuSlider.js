import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

export function devicesRepairMenuSlider() {
  const slider = document.querySelector(".devices-repair-menu__box");
  if (!slider) return;
  return new Swiper(".devices-repair-menu__box", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".devices-repair-menu__pagination",
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
