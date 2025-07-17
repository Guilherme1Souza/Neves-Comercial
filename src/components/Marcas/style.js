import styled from "styled-components";

export const Container = styled.div`
  background: #4f46e5; 
  padding: 40px 0;
  color: #fff;
  margin-top: 60px;

  @media (max-width: 600px) {
    padding: 32px 0;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-left: 60px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;


export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 900px) {
    gap: 24px;
  }

  @media (max-width: 600px) {
    gap: 16px;
  }
`;


export const BrandsTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  overflow: hidden;

  @media (max-width: 900px) {
    gap: 32px;
  }

  @media (max-width: 600px) {
    gap: 16px;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const BrandCircle = styled.div`
  width: 140px;
  height: 140px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }

  /* Se você ainda usar <img> em vez de <Image> */
  img,
  span > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
