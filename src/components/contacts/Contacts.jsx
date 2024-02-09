import "./Contacts.scss";
import Button from "../button/Button";


function Contacts() {
  return (
    <div className="contacts">
      <span className="contacts__title">Есть вопрос по КП?</span>
      <span className="contacts__text">Отдел бронирования</span>
      <p className="contacts__phone-number"><span className="contacts__phone-number__number">8 (800) 600-62-16</span><span>(бесплатно по РФ)</span></p>
      <Button text="Спросить в телеграм" type="button-blue-text" />
    </div>
  )
}

export default Contacts