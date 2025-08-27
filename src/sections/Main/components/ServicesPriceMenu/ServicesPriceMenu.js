import "./ServicesPriceMenu.scss";
import Item from "./ServicesPriceMenuItem";
import SectionTitle from "@components/SectionTitle/SectionTitle.js";

export default function ServicesPriceMenu() {
  return `
      <section class="services-price-menu">
        ${SectionTitle("services-price-menu__title", "Цены на услуги")}

        <div class="swiper services-price-menu__box">
        <div class="services-price-menu__labels services-price-menu__labels--hidden-small">
        <h3 class="services-price-menu__label services-price-menu__label--name">Ремонтные услуги</h3>
        <h3 class="services-price-menu__label services-price-menu__label--price">Цена</h3>
        <h3 class="services-price-menu__label services-price-menu__label--time">Срок</h3>
        </div>
          <div class="swiper-wrapper services-price-menu__list">
            ${Item("Диагностика", "Бесплатно", "30-120")}
            ${Item("Замена дисплея", "1 000", "30-120")}
            ${Item("Замена полифонического динамика", "1 000", "30-120")}
            ${Item(
              "Тестирование с выдачей технического заключения",
              "1 000",
              "30-120"
            )}
            ${Item("Замена программного обеспечения", "1 000", "30-120")}

          </div>
          <div class="swiper-pagination services-price-menu__pagination"></div>
        </div>

        <div class="services-price-menu__footer">
            <p class="services-price-menu__about">
            Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу.
             Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.
            </p>

            <a href="#" class="services-price-menu__link-button">
              Получить коммерческое предложение
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
              <path d="M6 4l12 8-12 8" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
        </div>

      </section>


  `;
}
