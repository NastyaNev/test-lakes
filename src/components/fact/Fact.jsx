import "./Fact.scss";
import factIcon from "../../images/icons/Highway.svg";

function Fact({ title, text, infoIcon }) {
  return (
    <div className="fact">
      <img src={factIcon} alt="" />
      <div className="fact__text-container">
        <span className="fact__text-container__title">
          <span className="fact__text-container__title__title-text">
            {title}
          </span>
          <div
            className={
              infoIcon
                ? "fact__text-container__title__info"
                : "fact__text-container__title__info_disabled"
            }
          >
            <img src={infoIcon} alt="info" />
            <span className="fact__text-container__title__info__tooltip">
              Подсказка
            </span>
          </div>
        </span>
        <span className="fact__text-container__text">{text}</span>
      </div>
    </div>
  );
}

export default Fact;
