import Button from "../button/Button";
import "./HeaderBlock.scss";
import shareIcon from "../../images/icons/Share.svg";

function HeaderBlock() {
  return (
    <div className="header-block">
      <div className="header-block__title-container">
        <h1 className="header-block__title-container__title">Озерный край</h1>
        <p className="header-block__title-container__description">
          Московская область, Рузский городской округ, территория Рузская долина
        </p>
      </div>
      <div className="header-block__price-container">
        <div className="header-block__price-container__text-block">
          <span className="header-block__price-container__text-block__price">
            от 1 560 000 р.
          </span>
          <span className="header-block__price-container__text-block__amount">
            38 участков
          </span>
        </div>
        <Button icon={shareIcon} type="button-share-icon" />
      </div>
    </div>
  );
}

export default HeaderBlock;
