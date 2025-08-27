import "./Footer.scss";
import Info from "./components/Info/Info.js";

export default function Footer() {
  return `
    <footer class="footer">
      ${Info()}
    </footer>

  `;
}
