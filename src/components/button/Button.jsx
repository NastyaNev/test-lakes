import "./Button.scss";

function Button({ text, icon, type, className, onClick }) {
  return (
    <button className={`${type} ${className}`} onClick={onClick}>
      <span className="button__content">
        <span
          className={
            text ? "button__content__text" : "button__content__text_disable"
          }
        >
          {text}
        </span>
        <img
          src={icon}
          alt=""
          className={
            icon ? "button__content__icon" : "button__content__icon_disable"
          }
        />
      </span>
    </button>
  );
}

export default Button;
