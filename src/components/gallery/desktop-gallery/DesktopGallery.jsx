import "./DesktopGallery.scss";
import { images } from "../../../utils/images";
import Button from "../../button/Button";

function DesktopGallery() {
    const desktopImages = images.slice(0, 5);
  
    return (
      <div className="desktop-gallery">
        <div className="desktop-gallery__pictures-container">
          {desktopImages.map((i, index) => (
            <img
              key={index}
              src={i}
              alt=""
              className="desktop-gallery__pictures-container__image"
            />
          ))}
        </div>
        <div className="desktop-gallery__buttons-container">
          <div className="desktop-gallery__buttons-container__about-place">
            <Button text="Ген. план" type="button-light-text" />
            <Button text="Панорама" type="button-light-text" />
          </div>
          <Button text="Все фото" type="button-light-text" />
        </div>
      </div>
    );
  }

export default DesktopGallery