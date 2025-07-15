import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 4rem;
`;

export const Title = styled.h2`
  font-size: 2rem;  
  font-weight: 700;
  color: #333;
`;

export const Subtitle = styled.p`
  color: #4f46e5;
  margin-bottom: 4rem;
  margin-top: 0.5rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin: 0 auto;
  width: 10.5rem;
  height: 30.875rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 1rem;
`;


export const ProductTitle = styled.p`
  color: #1e1e1e;
  font-size: 1rem;
  font-weight: 500;
  width: 12.6875rem;
  height: 2.3125rem;
  flex-shrink: 0;
  line-height: 1;
  margin: 1rem auto;
  text-align: center;
`;

export const Price = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 1rem;
  flex-shrink: 0;
  color: #1e1e1e;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  font-size: 0.9rem;
  color: #888;
  margin-left: 0.5rem;
`;

export const BuyButton = styled.button`
  background-color: #3b82f6;
  width: 14.625rem;
  height: 2.5625rem;
  flex-shrink: 0;
  color: #fff;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #2563eb;
  }
`;
