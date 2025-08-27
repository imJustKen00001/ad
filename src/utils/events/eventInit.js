import sideMenuAction from "./sideMenu.js";
import supportMenuAction from "./supportMenu.js";
import callRequestMenu from "./callRequestMenu.js";
import readMoreBtn from "./readMoreBtn.js";
import actionMenu from "./menuAction.js";

export default function eventInit() {
  window.addEventListener("resize", () => {
    setTimeout(() => {
      if (window.innerWidth > 320) {
        location.reload();
      } else if (window.innerWidth < 768) {
        location.reload();
      } else if (window.innerWidth < 1440) {
        location.reload();
      }
    }, 1000);
  });
  sideMenuAction();
  callRequestMenu();
  supportMenuAction();
  readMoreBtn();
  actionMenu(
    "brands-menu__box",
    "brands-menu__read-more-button",
    "brands-menu__box--short"
  );
  actionMenu(
    "devices-repair-menu__box",
    "devices-repair-menu__read-more-button",
    "devices-repair-menu__box--short"
  );
}
