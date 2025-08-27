import "./BrandsMenu.scss";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import Item from "./BrandsMenuItem";
import ReadMoreBtn from "@components/ReadMoreBtn/ReadMoreBtn.js";

export default function BrandsMenu() {
  return `
    <section class="brands-menu">
        ${SectionTitle(
          "brands-menu__title",
          "Ремонт техники различных брендов"
        )}
        <div class="brands-menu__container">
        <div class="swiper brands-menu__box brands-menu__box--grey-ends brands-menu__box--short">
        <div class="swiper-wrapper brands-menu__list brands-menu__list--short">

            ${Item("1")}
            ${Item("2")}
            ${Item("3")}
            ${Item("4")}
            ${Item("5")}
            ${Item("6")}
            ${Item("7")}
            ${Item("1")}
            ${Item("2")}


        </div>

        <div class="swiper-pagination brands-menu__pagination"></div>
      </div>
                    ${ReadMoreBtn(
                      "brands-menu__read-more-button",
                      "brands-menu__read-more-button--hidden-small",
                      "Показать все"
                    )}
    </div>
    </section>
  `;
}
