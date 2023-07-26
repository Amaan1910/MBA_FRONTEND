import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import PosterOne from "../assets/1.avif";
import PosterTwo from "../assets/2.avif";
import PosterThree from "../assets/3.avif";
import PosterFour from "../assets/4.avif";
const Slider = () => {
  return (
    <div className="shadow-lg">
      <CCarousel controls interval={2000} indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={PosterOne} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={PosterTwo} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={PosterThree} />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={PosterFour} />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Slider;
