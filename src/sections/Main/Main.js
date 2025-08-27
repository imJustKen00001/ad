import "./Main.scss";
import ServicesMenu from "./components/ServicesMenu/ServicesMenu";
import MainAbout from "./components/MainAbout/MainAbout";
import BrandsMenu from "./components/BrandsMenu/BrandsMenu.js";
import DevicesRepair from "./components/DevicesRepairMenu/DevicesRepairMenu.js";
import ServicesPriceMenu from "./components/ServicesPriceMenu/ServicesPriceMenu.js";

export default function Main() {
  return `
      <main class="main">
          ${ServicesMenu()}
          ${MainAbout()}
          ${BrandsMenu()}
          ${DevicesRepair()}
          ${ServicesPriceMenu()}
      </main>

  `;
}
