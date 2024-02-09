import "./MobileGallery.scss";
import { images } from "../../../utils/images";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Arrow from "../arrow/Arrow";

function MobileGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    selector: ".mobile-gallery__navigation-wrapper__images__image",
  });

  const mobileImages = images.slice(0, 3);

  return (
    <div className="mobile-gallery">
      <div className="mobile-gallery__navigation-wrapper">
        <div
          className="keen-slider mobile-gallery__navigation-wrapper__images"
          ref={sliderRef}
        >
          {mobileImages.map((i, index) => (
            <img
              key={index}
              src={i}
              alt=""
              className="mobile-gallery__navigation-wrapper__images__image"
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
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
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="mobile-gallery__preview-container">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <div
                key={idx}
                className="mobile-gallery__preview-container__images-cover"
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
              >
                <img
                  src={mobileImages[idx]}
                  alt=""
                  className="mobile-gallery__preview-container__images-cover__image"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MobileGallery;
