import Button from "../../button/Button";
import "./Arrow.scss";
import arrowRight from "../../../images/icons/ArrowRight.svg";
import arrowLeft from "../../../images/icons/ArrowLeft.svg";

function Arrow(props) {
  const disabled = props.disabled ? "arrow-disabled" : "";

  return (
    <Button
      icon={props.left ? arrowLeft : arrowRight}
      type="button-arrow-icon"
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow-left" : "arrow-right"
      } ${disabled}`}
      disabled={disabled}
    />
  );
}

export default Arrow;
