import Button from "../button/Button";
import "./Gallery.scss";
import {images} from "../../utils/images";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__pictures-container">
        {images.map((i, index) => (
            <img key={index} src={i} alt="" className="gallery__pictures-container__image" />
        ))}
      </div>
      <div className="gallery__buttons-container">
        <div className="gallery__buttons-container__about-place">
          <Button text="Ген. план" type="button-light-text" />
          <Button text="Панорама" type="button-light-text" />
        </div>
        <Button text="Все фото" type="button-light-text" />
      </div>
    </div>
  );
}

export default Gallery;
