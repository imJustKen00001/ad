import "./DevicesRepairMenu.scss";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import Item from "./DevicesRepairMenuItem";
import ReadMoreBtn from "@components/ReadMoreBtn/ReadMoreBtn.js";

export default function DevicesRepairMenu() {
  return `
    <section class="devices-repair-menu">
        ${SectionTitle(
          "devices-repair-menu__title",
          "Ремонт различных видов техники"
        )}
    <div class="devices-repair-menu__container">
      <div class="swiper devices-repair-menu__box devices-repair-menu__box--grey-ends devices-repair-menu__box--short">
        <div class="swiper-wrapper devices-repair-menu__list">
          ${Item("Ремонт ноутбуков")}
          ${Item("Ремонт планшетов")}
          ${Item("Ремонт ПК")}
          ${Item("Ремонт  мониторов")}
          ${Item("Ремонт ноутбуков")}
        </div>

        <div class="swiper-pagination devices-repair-menu__pagination"></div>
      </div>
              ${ReadMoreBtn(
                "devices-repair-menu__read-more-button",
                "devices-repair-menu__read-more-button--hidden-small",
                "Показать все"
              )}
      </div>
    </section>

  `;
}
