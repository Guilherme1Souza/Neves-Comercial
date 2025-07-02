import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StyledSliderWrapper, StyledSlider } from './style';

import suvinilSlider from '../../images/suvinilCarrossel.jpg';
import votoranSlider from '../../images/votoranCarrossel.jpg';

export default function Hero() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <StyledSliderWrapper>
      <StyledSlider {...settings}>
        <div>
          <Image
            src={suvinilSlider}
            alt="Slide 1"
            style={{ width: '100%', height: 'auto' }}
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src={votoranSlider}
            alt="Slide 2"
            style={{ width: '100%', height: 'auto' }}
            placeholder="blur"
          />
        </div>
      </StyledSlider>
    </StyledSliderWrapper>
  );
}
