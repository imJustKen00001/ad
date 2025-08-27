import "swiper/swiper-bundle.css";
import Swiper from "swiper";

export function servicesMenuSlider() {
  const slider = document.querySelector(".services-menu__box");
  if (!slider) return;

  return new Swiper(".services-menu__box", {
    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 5,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
      },
      1440: {
        enabled: false,
        slidesPerView: "auto",
      },
    },
  });
}
