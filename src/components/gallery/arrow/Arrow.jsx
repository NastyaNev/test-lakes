import Button from "../../button/Button";
import "./Arrow.scss";
import arrow from "../../../images/icons/Arrow.svg";

function Arrow(props) {
  const disabled = props.disabled ? "arrow-disabled" : "";

  return (
    <Button
      icon={arrow}
      type="button-arrow"
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow-left" : "arrow-right"
      } ${disabled}`}
    />
  );
}

export default Arrow;
