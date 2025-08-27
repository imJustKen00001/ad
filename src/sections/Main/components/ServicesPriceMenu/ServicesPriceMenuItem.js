import SendButton from "@components/SendButton/SendButton.js";

export default function ServicesPriceMenuItem(description, price, time) {
  price === "Бесплатно" ? (price = price) : (price = price + " " + "₽");

  return `
   <div class="swiper-slide services-price-menu__item">
   <div class="services-price-menu__title-block">
      <h3 class="services-price-menu__label services-price-menu__label--hidden-med-large">Ремонтные услуги</h3>
      <p class="services-price-menu__text">${description}</p>
   </div>
   <div class="services-price-menu__price-block">
      <h3 class="services-price-menu__label services-price-menu__label--hidden-med-large">Цена</h3>
      <p class="services-price-menu__text">${price}</p>
   </div>
   <div class="services-price-menu__time-block">
      <h3 class="services-price-menu__label services-price-menu__label--hidden-med-large">Срок</h3>
      <p class="services-price-menu__text">${time}мин</p>
   </div>
      ${SendButton("services-price-menu__send-button", "Заказать")}
  </div>
  `;
}
