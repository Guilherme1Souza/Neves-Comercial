import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
`

export const LogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-block: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 20px;
  }
`;

export const LogoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

   svg {
    color: #f4e453; /* amarelo */
    font-size: 2rem;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  strong {
    color: #3a45f4; /* azul */
    font-weight: bold;
  }

  span {
    font-size: 0.85rem;
    color: #3a45f4;
  }

 
`;

export const StyledSliderWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  border-radius: 18px;
  overflow: hidden;
`;

export const StyledSlider = styled(Slider)`
  position: relative;
 
`;