import Fact from "../fact/Fact";
import "./About.scss";
import infoIcon from "../../images/icons/Info.svg";
import arrow from "../../images/icons/Vector 9.svg";
import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about">
      <div className="about__facts-container">
        <Fact title="Север" text="Направление" />
        <Fact title="20 км" text="Расстояние от КАД" />
        <Fact title="СНТ, ДНП" text="Статус земли" infoIcon={infoIcon} />
        <Fact title="1-я Академия недвижимость" text="Застройщик" />
      </div>
      <div className="about__description">
        <h2 className="about__description__title">О коттеджном поселке</h2>
        <div className="about__description__text-cover">
          <p
            className={
              open
                ? "about__description__text-cover__text_open"
                : "about__description__text-cover__text"
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
            панорамным остеклением, террасами-патио, видовыми террасами и
            крытыми зимними садами.
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
            панорамным остеклением, террасами-патио, видовыми террасами и
            крытыми зимними садами.
          </p>
          <span className={open ? "about__description__text-cover__dotts_disabled" : "about__description__text-cover__dotts"}>...</span>
        </div>
        <button
          className="about__description__button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span>Подробнее</span>
          <img
            src={arrow}
            alt=""
            className={
              open
                ? "about__description__button__arrow_open"
                : "about__description__button__arrow"
            }
          />
        </button>
      </div>
    </div>
  );
}

export default About;
