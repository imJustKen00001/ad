import { servicesMenuSlider } from "./servicesMenuSlider.js";
import { brandsMenuSlider } from "./brandsMenuSlider.js";
import { devicesRepairMenuSlider } from "./devicesRepairMenuSlider.js";
import { servicesPriceMenuSlider } from "./servicesPriceMenuSlider.js";

export default function swipersInit() {
  servicesMenuSlider();
  brandsMenuSlider();
  devicesRepairMenuSlider();
  servicesPriceMenuSlider();
}
