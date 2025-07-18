import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.section`
  padding: 40px;
  width: 100%;
  max-width: 1200px;
  margin-top: 3.8rem;
  margin-bottom: 3.8rem;
  margin-inline: auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 2rem;  
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};

   @media (max-width: 768px) {
    font-size: 1.675rem;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.05rem;
  margin-bottom: 4rem;
  margin-top: 0.5rem;

    @media (max-width: 768px) {
    font-size: 1.175rem;
  }
`;


export const StyledSlider = styled(Slider)`
.slick-slide {
  display: flex !important;
  justify-content: center;
}

`;


export const Card = styled.div`
  padding: 24px 20px;
  border-radius: 8px;
  text-align: center;
  width: 20.2rem;
  height: 25rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid #D9D9D9;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 18rem; 
  }
`;

export const Stars = styled.div`
  text-align: center;
  align-items: center;
  margin: 0.2rem auto;
`;

export const Company = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1rem;
`;

export const Text = styled.p`
 color: ${({ theme }) => theme.colors.text};
 text-align: center;
 font-size: 0.75rem;
 font-style: normal;
 font-weight: 400;
 line-height: 1.5;
 width: 12.5rem;
 margin-block: 1rem;
`;