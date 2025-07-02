import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StyledSliderWrapper, StyledSlider } from './style';

import suvinilCarrossel from '../../images/suvinilCarrossel.jpg';
import suvinilCarrosselMobile from '../../images/suvinilCarrosselMobile.jpg';
import votoranCarrossel from '../../images/votoranCarrossel.jpg';
import votoranCarrosselMobile from '../../images/votoranCarrosselMobile.jpg';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Define ponto de corte para mobile
  };

  handleResize(); // executa na montagem
  window.addEventListener('resize', handleResize); // escuta mudanças

  return () => window.removeEventListener('resize', handleResize); // limpa
}, []);


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
            src={isMobile? suvinilCarrosselMobile : suvinilCarrossel}
            alt="Slide 1"
            style={{ width: '100%', height: 'auto' }}
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src={isMobile? votoranCarrosselMobile : votoranCarrossel}
            alt="Slide 2"
            style={{ width: '100%', height: 'auto' }}
            placeholder="blur"
          />
        </div>
      </StyledSlider>
    </StyledSliderWrapper>
  );
}
