import Fact from "../fact/Fact";
import "./Facts.scss";
import infoIcon from "../../images/icons/Info.svg";

function Facts() {
  return (
    <div className="facts">
      <Fact title="Север" text="Направление" />
      <Fact title="20 км" text="Расстояние от КАД" />
      <Fact title="СНТ, ДНП" text="Статус земли" infoIcon={infoIcon} />
      <Fact title="1-я Академия недвижимость" text="Застройщик" />
    </div>
  );
}

export default Facts;
