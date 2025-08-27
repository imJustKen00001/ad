import "./MainAbout.scss";
import ReadMoreBtn from "@components/ReadMoreBtn/ReadMoreBtn.js";

export default function MainAbout() {
  return `

      <section class="main-about">
        <figure class="main-about__figure">

        <figcaption class="main-about__caption">
            <span class="main-about__caption-text">Мы являемся авторизованным сервисным центром по ремонту техники Dell.
             Только у нас вы можете отремонтировать свой ноутбук Dell
             с официальной гарантией производителя.
             </span>
            <span class="main-about__caption-text main-about__caption--hidden-small main-about__caption--hidden" data-hidden="true">
            Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера,
            </span>
            <span class="main-about__caption-text main-about__caption--hidden-med main-about__caption--hidden" data-hidden="true">
            что подтверждает большое количество постоянных клиентов.
            Мы гордимся тем, что к нам обращаются по рекомендациям и,
              в свою очередь, советуют нас родным и близким.
            </span>
            <span class="main-about__caption-text main-about__caption--hidden" data-hidden="true">
            Наши специалисты проходят регулярное обучение и сертификацию у производителя,
            что позволяет нам предоставлять услуги на самом высоком уровне.
            </span>
             ${ReadMoreBtn("main-about__button", "", "Читать далее")}
        </figcaption>


        <img src="/assets/img/company.png" alt="company image" class="main-about__img"
        </figure>

      </section>
  `;
}
