import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:focus-within {
    outline: 2px solid #000000;
    outline-offset: 2px;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text}; 

  &::placeholder {
    color:rgb(39, 39, 39); 
    opacity: 1;
  }
`;


export const Dropdown = styled.ul`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 15rem;
  overflow-y: auto;
`;

export const Item = styled.li`
  padding: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover,
  &.active {
   background: ${({ theme }) => theme.colors.white};
  }
`;
