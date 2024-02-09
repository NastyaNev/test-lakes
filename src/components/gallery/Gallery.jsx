import Button from "../button/Button";
import "./Gallery.scss";
import {images} from "../../utils/images";
// import 'keen-slider/keen-slider.min.css';
// import { useKeenSlider } from 'keen-slider/react';
// import { useState } from "react";
// import KeenSlider from 'keen-slider';

// function Arrow(props) {
//   const disabled = props.disabled ? "arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${
//         props.left ? "arrow--left" : "arrow--right"
//       } ${disabled}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   )
// }

function Gallery() {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [loaded, setLoaded] = useState(false);
  // const [sliderRef, instanceRef] = useKeenSlider({
  //   initial: 0,
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel)
  //   },
  //   created() {
  //     setLoaded(true)
  //   },
  // });

  return (
    <div className="gallery" >
      <div className="gallery__pictures-container">
        {images.map((i, index) => (
            <img key={index} src={i} alt="" className="gallery__pictures-container__image" />
        ))}
      </div>
      {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              // disabled={
              //   currentSlide ===
              //   instanceRef.current.track.details.slides.length - 1
              // }
            />
          </>
        )} */}
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
