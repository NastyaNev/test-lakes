import "./Button.scss";

function Button({ text, icon, type }) {

  return (
    <button className={type}>
      <span className={text ? "button__text" : "button__text_disable"}>
        {text}
      </span>
      <img
        src={icon}
        alt=""
        className={icon ? "button__icon" : "button__icon_disable"}
      />
    </button>
  );
}

export default Button;
