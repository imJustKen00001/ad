import "./styles/main.scss";
import "normalize.css";
import Header from "@header/Header.js";
import SideMenu from "@sidemenu/SideMenu.js";
import SupportMenu from "@supportmenu/SupportMenu.js";
import CallRequestMenu from "@callrequestmenu/CallRequestMenu.js";
import Main from "@main/Main.js";
import Footer from "@footer/Footer.js";
import swipersInit from "./utils/swipers/swiperInit";
import eventInit from "./utils/events/eventInit";

document.querySelector("#app").innerHTML = `
<div class="container">
  ${Header()}
  ${SideMenu()}
  ${SupportMenu()}
  ${CallRequestMenu()}
  ${Main()}
  ${Footer()}
`;

eventInit();
swipersInit();
