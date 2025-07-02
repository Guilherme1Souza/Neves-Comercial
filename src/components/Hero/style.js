import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSliderWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledSlider = styled(Slider)`
  position: relative;
`;
