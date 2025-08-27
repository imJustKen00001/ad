import LinkButton from "@components/LinkButton/LinkButton";

export default function DevicesRepairMenuItem(text) {
  return `
          <div class="swiper-slide devices-repair-menu__item">
              ${text}</p>
              ${LinkButton("devices-repair-menu__button")}
          </div>

  `;
}
