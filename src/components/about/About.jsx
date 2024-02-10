import "./About.scss";
import arrow from "../../images/icons/ArrowRight.svg";
import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about">
      <h2 className="about__title">О коттеджном поселке</h2>
      <div className="about__text-cover">
        <p
          className={
            open
              ? "about__text-cover__text_open"
              : "about__text-cover__text"
          }
        >
          Жилой комплекс «Петровская Доминанта» представляет собой 3 жилых
          корпуса высотой от 7 до 9 этажей. При отделке фасадов использованы
          клинкерный кирпич, натуральный камень, черненый металл, стекло,
          декоративные элементы. Проект разработан архитектурном бюро
          «INTERCOLUMNIUM». Комплекс выполнен в стиле классической архитектуры
          Санкт-Петербурга конца XIX — начала XX веков. В ЖК представлены от
          одно- до семикомнатных квартир как классического типа, так и
          евроформата. Высота потолков начинается от 3 метров. К покупке
          предложены квартиры без отделки. Возможно приобретение квартир с
          панорамным остеклением, террасами-патио, видовыми террасами и крытыми
          зимними садами.
          <br />
          Жилой комплекс «Петровская Доминанта» представляет собой 3 жилых
          корпуса высотой от 7 до 9 этажей. При отделке фасадов использованы
          клинкерный кирпич, натуральный камень, черненый металл, стекло,
          декоративные элементы. Проект разработан архитектурном бюро
          «INTERCOLUMNIUM». Комплекс выполнен в стиле классической архитектуры
          Санкт-Петербурга конца XIX — начала XX веков. В ЖК представлены от
          одно- до семикомнатных квартир как классического типа, так и
          евроформата. Высота потолков начинается от 3 метров. К покупке
          предложены квартиры без отделки. Возможно приобретение квартир с
          панорамным остеклением, террасами-патио, видовыми террасами и крытыми
          зимними садами.
        </p>
        <span
          className={
            open
              ? "about__text-cover__dotts_disabled"
              : "about__text-cover__dotts"
          }
        >
          ...
        </span>
      </div>
      <button
        className="about__button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="about__button__text">Подробнее</span>
        <img
          src={arrow}
          alt=""
          className={
            open
              ? "about__button__arrow_open"
              : "about__button__arrow"
          }
        />
      </button>
    </div>
  );
}

export default About;
