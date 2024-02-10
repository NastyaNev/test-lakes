import "./Button.scss";

function Button({ text, icon, type, className, onClick, disabled }) {
  return (
    <button
      className={`${type} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={`${type}__content`}>
        <span
          className={
            text ? `${type}__content__text` : `${type}__content__text_disable`
          }
        >
          {text}
        </span>
        <img
          src={icon}
          alt=""
          className={
            icon ? `${type}__content__icon` : `${type}__content__icon_disable`
          }
        />
      </span>
    </button>
  );
}

export default Button;
