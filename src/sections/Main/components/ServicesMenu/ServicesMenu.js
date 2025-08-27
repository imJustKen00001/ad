import "./ServicesMenu.scss";
import Item from "./ServicesMenuItem.js";
import HeadTitle from "@components/HeadTitle/HeadTitle.js";

export default function ServicesMenu() {
  return `
  <section class="services-menu">

            ${HeadTitle(
              "services-menu__title",
              "services-menu__title--blue-line",
              "services-menu__title--hidden-large"
            )}

      <div class="swiper services-menu__box">
        <div class="swiper-wrapper services-menu__list">
          ${Item("Ремонтируемые устройства")}
          ${Item("Дополнительные услуги")}
          ${Item("Цены на услуги")}
          ${Item("Адреса сервисных центров")}
          ${Item("Специальные цены")}
          ${Item("Отзывы")}
        </div>
      </div>
  </section>
  `;
}
