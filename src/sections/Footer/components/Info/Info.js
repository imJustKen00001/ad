import "./Info.scss";

export default function Info() {
  return `
  <section class="info">
    <p class="info__text info__text--developers">
      © 2019 CPS <br>
      Разработано командой Apesong
    </p>

      <a href="#" class="info__text info__text--policy">
        Политика конфиденциальности
      </a>

      <p class="info__text info__text--copyright">
        Информация, размещенная на данной странице, не является публичной офертой
      </p>
  </section>
  `;
}
